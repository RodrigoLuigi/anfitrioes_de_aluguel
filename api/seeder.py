from database.db import db  
from models.accommodation import Accommodation  
from app import app

with app.app_context():

    db.session.query(Accommodation).delete()
    db.session.commit()

    new_accommodations = [
        Accommodation(
            name="Apartamento Beira-Mar",
            image_url="https://example.com/beira-mar.jpg",
            price_per_night=350.00,
            locale="Florianópolis, SC"
        ),
        Accommodation(
            name="Chalé na Serra",
            image_url="https://example.com/chale.jpg",
            price_per_night=350.00,
            locale="Florianópolis, SC"
        ),
        Accommodation(
            name="Hotel Luxo",
            image_url="https://example.com/hotel-luxo.jpg",
            price_per_night=400.00,
            locale="São Paulo"
        ),
        Accommodation(
            name="Pousada Maravilha",
            image_url="https://example.com/pousada-maravilha.jpg",
            price_per_night=200.00,
            locale="Rio de Janeiro"
        ),
        Accommodation(
            name="Resort Paraíso",
            image_url="https://example.com/resort-paraíso.jpg",
            price_per_night=800.00,
            locale="Bahia"
        ),
        Accommodation(
            name="Chalé das Montanhas",
            image_url="https://example.com/chale-montanhas.jpg",
            price_per_night=350.00,
            locale="Gramado"
        ),
        Accommodation(
            name="Flat Executivo",
            image_url="https://example.com/flat-executivo.jpg",
            price_per_night=350.00,
            locale="Belo Horizonte"
        ),
    ]

    db.session.add_all(new_accommodations)
    db.session.commit()

    print("Seeders executados com sucesso! 🎉")
