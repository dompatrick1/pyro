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
        Song(
            songTitle="Second Hand News",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Second-Hand-News.mp3", albumId=2
        ),
        Song(
            songTitle="Dreams",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Dreams.mp3", albumId=2
        ),
        Song(
            songTitle="Never Going Back Again",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Never-Going-Back-Again.mp3", albumId=2
        ),
        Song(
            songTitle="Don't Stop",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Don't-Stop.mp3", albumId=2
        ),
        Song(
            songTitle="Go Your Own Way",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Go-Your-Own-Way.mp3", albumId=2
        ),
        Song(
            songTitle="Songbird",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Songbird.mp3", albumId=2
        ),
        Song(
            songTitle="The Chain",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/The-Chain.mp3", albumId=2
        ),
        Song(
            songTitle="You Make Loving Fun",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/You-Make-Loving-Fun.mp3", albumId=2
        ),
        Song(
            songTitle="I Don't Want To Know",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Dont-Want-to-Know.mp3", albumId=2
        ),
        Song(
            songTitle="Oh Daddy",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Oh-Daddy.mp3", albumId=2
        ),
        Song(
            songTitle="Gold Dust Woman",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Gold-Dust-Woman.mp3", albumId=2
        ),
        Song(
            songTitle="Silver Springs",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Silver-Springs.mp3", albumId=2
        ),
    ]

    db.session.add_all(songs)
    db.session.commit()

def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
