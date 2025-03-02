from database.db import db  
from models.accommodation import Accommodation  
from app import app

with app.app_context():

    db.session.query(Accommodation).delete()
    db.session.commit()

    new_accommodations = [
        Accommodation(
            name="Apartamento Beira-Mar",
            image_url="https://i.ytimg.com/vi/Nx7p4hUB-Qo/maxresdefault.jpg",
            price_per_night=350.00,
            locale="Florianópolis, SC"
        ),
        Accommodation(
            name="Chalé na Serra",
            image_url="https://www.holmy.com.br/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-11-at-3.35.04-PM.jpeg",
            price_per_night=350.00,
            locale="Florianópolis, SC"
        ),
        Accommodation(
            name="Hotel Luxo",
            image_url="https://resortnabahia.com.br/wp-content/uploads/2020/05/Design-sem-nome-12-2.png",
            price_per_night=400.00,
            locale="São Paulo"
        ),
        Accommodation(
            name="Pousada Maravilha",
            image_url="https://passageirodeprimeira.b-cdn.net/wp-content/uploads/2023/03/pousada-maravilha-noronha.png",
            price_per_night=200.00,
            locale="Rio de Janeiro"
        ),
        Accommodation(
            name="Resort Paraíso",
            image_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtFmFq6lNWTpgnYqlW14zBFHOEwQDjpfnghGdV8YM9BjPQHTGY-ne8ONp4eOQU796So4&usqp=CAU",
            price_per_night=800.00,
            locale="Bahia"
        ),
        Accommodation(
            name="Chalé das Montanhas",
            image_url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/20/05/8d/pousada-chales-da-montanha.jpg?w=500&h=-1&s=1",
            price_per_night=350.00,
            locale="Gramado"
        ),
        Accommodation(
            name="Flat Executivo",
            image_url="https://flat-exclusivo-no-ed-dna-smart-style-setor-bueno-g.goianiahotels.com/data/Images/OriginalPhoto/13270/1327066/1327066811/image-goiania-14.JPEG",
            price_per_night=350.00,
            locale="Belo Horizonte"
        ),
    ]

    db.session.add_all(new_accommodations)
    db.session.commit()

    print("Seeders executados com sucesso! 🎉")
