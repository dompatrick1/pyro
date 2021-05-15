from app.models import db, Album

def seed_albums():
    albums = [
        Album(
            title="Night Moves", artist="Bob Seger", year="1976", image='/night-moves.jpg'
        ),
        Album(
            title="Rumours", artist="Fleetwood Mac", year="1977", image='/rumours.jpg'
        ),
        Album(
            title="Let It Bleed", artist="The Rolling Stones", year="1969", image='/let-it-bleed.jpg'
        ),
        Album(
            title="Sweet Baby James", artist="James Taylor", year="1970", image='/sweet-baby-james.jpg'
        ),
        Album(
            title="Hotel California", artist="Eagles", year="1977", image='/hotel-california.jpg'
        ),
    ]

    db.session.add_all(albums)
    db.session.commit()


def undo_albums():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
