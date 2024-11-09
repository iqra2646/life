# app/routes.py
from flask import Blueprint, request, jsonify
from app.models import db, User
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

routes = Blueprint('routes', __name__)
jwt = JWTManager()

@routes.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    role = data.get('role', 'user')

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "User already exists"}), 400

    user = User(email=email, role=role)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

@routes.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        access_token = create_access_token(identity={'email': user.email, 'role': user.role})
        return jsonify(access_token=access_token, role=user.role), 200

    return jsonify({"message": "Invalid credentials"}), 401

@routes.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    current_user = get_jwt_identity()
    return jsonify({"message": f"Welcome {current_user['email']}!"}), 200

@routes.route('/admin-dashboard', methods=['GET'])
@jwt_required()
def admin_dashboard():
    current_user = get_jwt_identity()
    if current_user['role'] != 'admin':
        return jsonify({"message": "Admin access required"}), 403

    return jsonify({"message": "Welcome to the admin dashboard!"}), 200
