from app.models import db, Song

def seed_songs():
    songs = [
        Song(
            songTitle="Rock-n-Roll Never Forgets",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Rock-n-Roll-Never-Forgets.mp3", albumId=1
        ),
        Song(
            songTitle="Night Moves",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Night-Moves.mp3", albumId=1
        ),
        Song(
            songTitle="The Fire Down Below",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-The-Fire-Down-Below.mp3", albumId=1
        ),
        Song(
            songTitle="Sunburst",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Sunburst.mp3", albumId=1
        ),
        Song(
            songTitle="Sunspot Baby",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Sunspot-Baby.mp3", albumId=1
        ),
        Song(
            songTitle="Main Street",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Main-Street.mp3", albumId=1
        ),
        Song(
            songTitle="Come To Poppa",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Come-To-Poppa.mp3", albumId=1
        ),
        Song(
            songTitle="Ship of Fools",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Ship-Of-Fools.mp3", albumId=1
        ),
        Song(
            songTitle="Mary Lou",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Mary-Lou.mp3", albumId=1
        ),
    ]

    db.session.add_all(songs)
    db.session.commit()

def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
