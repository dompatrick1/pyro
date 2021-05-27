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
        Album(
            title="Cosmo's Factory", artist="CCR", year="1970", image='/ccr.jpg'
        ),
        Album(
            title="Times They Are a-Changin'", artist="Bob Dylan", year="1964", image='/bob-dylan.jpg'
        ),
        Album(
            title="Pearl", artist="Janis Joplin", year="1970", image='/pearl.jpg'
        ),
        Album(
            title="Lead Zeppelin IV", artist="Led Zeppelin", year="1971", image='/iv.jpg'
        ),
        Album(
            title="Off the Wall", artist="Michael Jackson", year="1979", image='/off-the-wall.jpg'
        ),
        Album(
            title="Who's Next", artist="The Who", year="1971", image='/Whos-Next.jpg'
        ),
        Album(
            title="Paranoid", artist="Black Sabbath", year="1970", image='/paranoid.jpg'
        ),
        Album(
            title="Brothers and Sisters", artist="The Allman Brothers Band", year="1973", image='/brothers-and-sisters.jpg'
        ),
        Album(
            title="The Dark Side of the Moon", artist="Pink Floyd", year="1973", image='/dark-side-of-the-moon.jpeg'
        ),
        Album(
            title="Toys in the Attic", artist="Aerosmith", year="1975", image='/toys-in-the-attic.jpg'
        ),
        Album(
            title="(Pronounced 'Lĕh-'nérd 'Skin-'nérd)", artist="Lynyrd Skynyrd", year="1973", image='/pronounced.jpg'
        ),
    ]

    db.session.add_all(albums)
    db.session.commit()


def undo_albums():
    db.session.execute('TRUNCATE albums RESTART IDENTITY CASCADE;')
    db.session.commit()
