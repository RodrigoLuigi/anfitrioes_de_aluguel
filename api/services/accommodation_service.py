from models.accommodation import Accommodation
from sqlalchemy.exc import SQLAlchemyError

class AccommodationService():
    def __init__(self, db_session):
        self.db_session = db_session

    def create_accommodation(self, data):
      try:
          required_fields = ['name', 'image_url', 'price_per_night', 'locale']
          for field in required_fields:
              if field not in data or not data[field]:
                  return {'error': f'O campo {field} é obrigatório.'}, 400
          
          existing_accommodation = Accommodation.query.filter_by(name=data['name']).first()
          if existing_accommodation:
              return {'error': 'Já existe uma acomodação com esse nome.'}, 400
          
          new_accommodation = Accommodation(
              name=data['name'],
              image_url=data['image_url'],
              price_per_night=data['price_per_night'],
              locale=data['locale']
          )

          self.db_session.add(new_accommodation)
          self.db_session.commit()

          return {'message': 'Acomodação cadastrada com sucesso!'}, 201

      except SQLAlchemyError as e:
          self.db_session.rollback()
          return {'error': 'Erro ao salvar no banco de dados.', 'details': str(e)}, 500
      except Exception as e:
          return {'error': 'Erro inesperado.', 'details': str(e)}, 500
      
    def get_all_accommodations(self):
        try:
            accommodations = Accommodation.query.all()
            if not accommodations:
                return {'message': 'Nenhuma acomodação encontrada.'}, 404

            accommodations_list = [accommodation.as_dict() for accommodation in accommodations]
            return accommodations_list, 200
        except SQLAlchemyError as e:
            return {'error': 'Erro ao buscar acomodações.', 'details': str(e)}, 500
        except Exception as e:
            return {'error': 'Erro inesperado ao buscar acomodações.', 'details': str(e)}, 500
    
    def get_accommodation_by_id(self, accommodation_id):
        try:
            accommodation = Accommodation.query.get(accommodation_id)
            if not accommodation:
                return {'error': 'Acomodação não encontrada.'}, 404

            return accommodation.as_dict(), 200
        except SQLAlchemyError as e:
            return {'error': 'Erro ao buscar a acomodação.', 'details': str(e)}, 500
        except Exception as e:
            return {'error': 'Erro inesperado ao buscar a acomodação.', 'details': str(e)}, 500