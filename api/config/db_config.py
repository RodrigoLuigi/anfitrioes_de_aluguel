import os

from dotenv import load_dotenv

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://postgres:123456@localhost:5432/acomodacoes')
    SQLALCHEMY_TRACK_MODIFICATIONS = False