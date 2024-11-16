from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Database configuration
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'bursary.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize database and Marshmallow
db = SQLAlchemy(app)
ma = Marshmallow(app)

# Bursary Application Model
class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    status = db.Column(db.String(20), nullable=False, default="Pending")
    amount_requested = db.Column(db.Float, nullable=False)
    amount_approved = db.Column(db.Float, nullable=True)

    def __init__(self, name, email, phone, address, amount_requested):
        self.name = name
        self.email = email
        self.phone = phone
        self.address = address
        self.amount_requested = amount_requested

# Bursary Application Schema
class ApplicationSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Application
        fields = ("id", "name", "email", "phone", "address", "status", "amount_requested", "amount_approved")

# Initialize schema
application_schema = ApplicationSchema()
applications_schema = ApplicationSchema(many=True)

# Create a new bursary application
@app.route('/applications', methods=['POST'])
def add_application():
    name = request.json['name']
    email = request.json['email']
    phone = request.json['phone']
    address = request.json['address']
    amount_requested = request.json['amount_requested']

    new_application = Application(name, email, phone, address, amount_requested)
    db.session.add(new_application)
    db.session.commit()

    return application_schema.jsonify(new_application)

# Get all bursary applications
@app.route('/applications', methods=['GET'])
def get_applications():
    all_applications = Application.query.all()
    result = applications_schema.dump(all_applications)
    return jsonify(result)

# Get a single bursary application by ID
@app.route('/applications/<id>', methods=['GET'])
def get_application(id):
    application = Application.query.get(id)
    if not application:
        return jsonify({"error": "Application not found"}), 404
    return application_schema.jsonify(application)

# Update a bursary application by ID
@app.route('/applications/<id>', methods=['PUT'])
def update_application(id):
    application = Application.query.get(id)
    if not application:
        return jsonify({"error": "Application not found"}), 404

    application.name = request.json.get('name', application.name)
    application.email = request.json.get('email', application.email)
    application.phone = request.json.get('phone', application.phone)
    application.address = request.json.get('address', application.address)
    application.status = request.json.get('status', application.status)
    application.amount_requested = request.json.get('amount_requested', application.amount_requested)
    application.amount_approved = request.json.get('amount_approved', application.amount_approved)

    db.session.commit()
    return application_schema.jsonify(application)

# Delete a bursary application by ID
@app.route('/applications/<id>', methods=['DELETE'])
def delete_application(id):
    application = Application.query.get(id)
    if not application:
        return jsonify({"error": "Application not found"}), 404

    db.session.delete(application)
    db.session.commit()
    return jsonify({"message": "Application deleted successfully"})

# Initialize the database tables
with app.app_context():
    db.create_all()

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
