from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///appointment.db'
app.config['SECRET_KEY'] = 'your_secret_key'
db = SQLAlchemy(app)
CORS(app)

# Models
class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(15), nullable=False)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.Time, nullable=False)

# Routes
@app.route('/appointments', methods=['GET', 'POST'])
def manage_appointments():
    if request.method == 'GET':
        # Fetch all appointments
        appointments = Appointment.query.all()
        appointments_data = [
            {
                "id": appt.id,
                "name": appt.name,
                "email": appt.email,
                "phone": appt.phone,
                "date": appt.date.strftime('%Y-%m-%d'),
                "time": appt.time.strftime('%H:%M')
            }
            for appt in appointments
        ]
        return jsonify({"appointments": appointments_data}), 200

    if request.method == 'POST':
        # Create a new appointment
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone')
        date = data.get('date')
        time = data.get('time')

        if not all([name, email, phone, date, time]):
            return jsonify({"error": "All fields are required"}), 400

        try:
            new_appointment = Appointment(
                name=name,
                email=email,
                phone=phone,
                date=datetime.datetime.strptime(date, '%Y-%m-%d').date(),
                time=datetime.datetime.strptime(time, '%H:%M').time()
            )
            db.session.add(new_appointment)
            db.session.commit()
            return jsonify({"message": "Appointment created successfully"}), 201
        except ValueError:
            return jsonify({"error": "Invalid date or time format"}), 400

@app.route('/appointments/<int:appointment_id>', methods=['PUT', 'DELETE'])
def modify_appointment(appointment_id):
    # Fetch the appointment by ID
    appointment = Appointment.query.get(appointment_id)

    if not appointment:
        return jsonify({"error": "Appointment not found"}), 404

    if request.method == 'PUT':
        # Update the appointment
        data = request.get_json()
        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone')
        date = data.get('date')
        time = data.get('time')

        if not all([name, email, phone, date, time]):
            return jsonify({"error": "All fields are required"}), 400

        try:
            appointment.name = name
            appointment.email = email
            appointment.phone = phone
            appointment.date = datetime.datetime.strptime(date, '%Y-%m-%d').date()
            appointment.time = datetime.datetime.strptime(time, '%H:%M').time()
            db.session.commit()
            return jsonify({"message": "Appointment updated successfully"}), 200
        except ValueError:
            return jsonify({"error": "Invalid date or time format"}), 400

    if request.method == 'DELETE':
        # Delete the appointment
        db.session.delete(appointment)
        db.session.commit()
        return jsonify({"message": "Appointment deleted successfully"}), 200

# Run the app
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5300)
