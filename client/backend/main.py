from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
import jwt
import datetime
from functools import wraps

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hospital.db'
app.config['SECRET_KEY'] = 'your_secret_key'  # Use a strong secret key for JWT
db = SQLAlchemy(app)
CORS(app)

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

class Doctor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    specialty = db.Column(db.String(100), nullable=False)

class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    doctor_id = db.Column(db.Integer, db.ForeignKey('doctor.id'), nullable=False)
    appointment_date = db.Column(db.DateTime, nullable=False)

# Helper functions
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({"error": "Token is missing!"}), 403
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user = User.query.filter_by(id=data['user_id']).first()
        except:
            return jsonify({"error": "Token is invalid!"}), 403
        return f(current_user, *args, **kwargs)
    return decorated

# Routes
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({"error": "Invalid credentials"}), 401

    token = jwt.encode(
        {'user_id': user.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)},
        app.config['SECRET_KEY'], algorithm="HS256"
    )
    return jsonify({"token": token})

@app.route('/doctors', methods=['GET'])
@token_required
def get_doctors(current_user):
    doctors = Doctor.query.all()
    doctors_data = [{"id": doc.id, "name": doc.name, "specialty": doc.specialty} for doc in doctors]
    return jsonify({"doctors": doctors_data})

@app.route('/appointments', methods=['POST'])
@token_required
def create_appointment(current_user):
    data = request.get_json()
    doctor_id = data.get('doctor_id')
    appointment_date = data.get('appointment_date')

    if not doctor_id or not appointment_date:
        return jsonify({"error": "Doctor ID and appointment date are required"}), 400

    new_appointment = Appointment(
        user_id=current_user.id,
        doctor_id=doctor_id,
        appointment_date=datetime.datetime.strptime(appointment_date, '%Y-%m-%d %H:%M')
    )
    db.session.add(new_appointment)
    db.session.commit()

    return jsonify({"message": "Appointment created successfully"}), 201

@app.route('/appointments', methods=['GET'])
@token_required
def get_appointments(current_user):
    appointments = Appointment.query.filter_by(user_id=current_user.id).all()
    appointments_data = [
        {
            "id": appt.id,
            "doctor_id": appt.doctor_id,
            "appointment_date": appt.appointment_date.strftime('%Y-%m-%d %H:%M')
        } for appt in appointments
    ]
    return jsonify({"appointments": appointments_data})

# Run the app
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5300)
