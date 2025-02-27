from flask import Flask
from flask_migrate import Migrate
from database.db import db
from models.acomodacao import Acomodacao

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123456@localhost:5432/acomodacoes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

@app.route('/')
def hello():
  return "API is live!"


if __name__ == '__main__':
  app.run(debug=True, port=5050, host='0.0.0.0')