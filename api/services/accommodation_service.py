from models.accommodation import Accommodation
from sqlalchemy.exc import SQLAlchemyError

class AccommodationService():
    def __init__(self, db_session):
        self.db_session = db_session

    def create_accommodation(self, data):
      try:
          # Validação dos campos obrigatórios
          required_fields = ['name', 'image_url', 'price_per_night', 'locale']
          for field in required_fields:
              if field not in data or not data[field]:
                  return {'error': f'O campo {field} é obrigatório.'}, 400
          
          # Verificando se já existe uma acomodação com o mesmo nome
          existing_accommodation = Accommodation.query.filter_by(name=data['name']).first()
          if existing_accommodation:
              return {'error': 'Já existe uma acomodação com esse nome.'}, 400
          
          # Criando nova acomodação
          new_accommodation = Accommodation(
              name=data['name'],
              image_url=data['image_url'],
              price_per_night=data['price_per_night'],
              locale=data['locale']
          )

          # Iniciando transação no banco de dados
          self.db_session.add(new_accommodation)
          self.db_session.commit()

          return {'message': 'Acomodação cadastrada com sucesso!'}, 201

      except SQLAlchemyError as e:
          self.db_session.rollback()
          return {'error': 'Erro ao salvar no banco de dados.', 'details': str(e)}, 500
      except Exception as e:
          return {'error': 'Erro inesperado.', 'details': str(e)}, 500