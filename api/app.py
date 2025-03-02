from flask import Flask
from flask_cors import CORS
from database.db import db
from flask_migrate import Migrate
from config.db_config import Config
from routes.accommotation_routes import accommodation_bp

app = Flask(__name__)
CORS(app)

app.config.from_object(Config)

db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(accommodation_bp)

if __name__ == '__main__':
  app.run(debug=True, port=3333, host='0.0.0.0')