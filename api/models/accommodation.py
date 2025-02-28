from sqlalchemy.dialects.postgresql import UUID, TEXT, NUMERIC
from sqlalchemy import func
from database.db import db

class Accommodation(db.Model):
  __tablename__ = 'accommodation'

  id = db.Column(UUID(as_uuid=True), primary_key=True, default=func.uuid_generate_v4())
  name = db.Column(db.String(255), nullable=False)
  image_url = db.Column(TEXT(), nullable=False)
  price_per_night = db.Column(NUMERIC(), nullable=False)
  locale = db.Column(TEXT(), nullable=False)

  def as_dict(self):
    return {
    'id': str(self.id),
    'name': self.name,
    'image_url': self.image_url,
    'price_per_night': self.price_per_night,
    'locale': self.locale
  }