from app.models import db, Album

def seed_albums():
    albums = [
        Album(
            title="Night Moves", artist="Bob Seger", year="1976", image='/night-moves.jpg'
        ),
        Album(
            title="Rumours", artist="Fleetwood Mac", year="1977", image='/rumours.jpg'
        ),
    ]

    db.session.add_all(albums)
    db.session.commit()


def undo_albums():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
