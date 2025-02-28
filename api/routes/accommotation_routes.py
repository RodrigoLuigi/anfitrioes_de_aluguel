from flask import Blueprint, request, jsonify
from database.db import db
from controllers.accommodation_controller import AccommodationController

accommodation_bp = Blueprint('accommodation_bp', __name__)

accommodation_bp.add_url_rule('/acomodacoes', 'create_accommodation', AccommodationController.create_accommodation, methods=['POST'])