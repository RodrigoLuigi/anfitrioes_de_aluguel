from sqlalchemy.dialects.postgresql import  NUMERIC
from database.db import db

class Accommodation(db.Model):
  __tablename__ = 'accommodation'

  id = db.Column(db.Integer(), primary_key=True, nullable=False, autoincrement=True)
  name = db.Column(db.String(255), nullable=False)
  image_url = db.Column(db.Text(), nullable=False)
  price_per_night = db.Column(NUMERIC(), nullable=False)
  locale = db.Column(db.Text(), nullable=False)

  def as_dict(self):
    return {
    'id': self.id,
    'name': self.name,
    'image_url': self.image_url,
    'price_per_night': self.price_per_night,
    'locale': self.locale
  }