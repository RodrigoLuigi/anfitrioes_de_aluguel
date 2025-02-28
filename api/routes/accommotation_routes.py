from flask import Blueprint
from controllers.accommodation_controller import AccommodationController

accommodation_bp = Blueprint('accommodation_bp', __name__)

accommodation_bp.add_url_rule(
  '/acomodacoes', 
  'create_accommodation', 
  AccommodationController.create_accommodation, 
  methods=['POST']
)

accommodation_bp.add_url_rule(
  '/acomodacoes',
  'get_all_accommodations',
  AccommodationController.get_all_accommodations,
  methods=['GET']
)
