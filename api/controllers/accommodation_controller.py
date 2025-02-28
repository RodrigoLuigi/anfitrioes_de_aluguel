from flask import request, jsonify
from services.accommodation_service import AccommodationService
from database.db import db

accommodation_service = AccommodationService(db.session)

class AccommodationController:
   @staticmethod
   def create_accommodation():
      data = request.get_json()
      response, status_code = accommodation_service.create_accommodation(data)
      return jsonify(response), status_code