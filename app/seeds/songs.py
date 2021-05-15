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
        Song(
            songTitle="Gimme Shelter",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Gimme-Shelter.mp3", albumId=3
        ),
        Song(
            songTitle="Love In Vain",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Love-In-Vain.mp3", albumId=3
        ),
        Song(
            songTitle="Country Honk",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Country-Honk.mp3", albumId=3
        ),
        Song(
            songTitle="Live With Me",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Live-With-Me.mp3", albumId=3
        ),
        Song(
            songTitle="Let It Bleed",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Let-It-Bleed.mp3", albumId=3
        ),
        Song(
            songTitle="Midnight Rambler",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Midnight-Rambler.mp3", albumId=3
        ),
        Song(
            songTitle="You Got The Silver",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/You-Got-The-Silver.mp3", albumId=3
        ),
        Song(
            songTitle="Monkey Man",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Monkey-Man.mp3", albumId=3
        ),
        Song(
            songTitle="You Can't Always Get What You Want",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/You-Cant-Always-Get-What-You-Want.mp3", albumId=3
        ),
        Song(
            songTitle="Sweet Baby James",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Sweet-Baby-James.mp3", albumId=4
        ),
        Song(
            songTitle="Lo and Behold",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Lo-and-Behold.mp3", albumId=4
        ),
        Song(
            songTitle="Sunny Skies",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Sunny-Skies.mp3", albumId=4
        ),
        Song(
            songTitle="Steamroller",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Steamroller.mp3", albumId=4
        ),
        Song(
            songTitle="Country Road",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Country-Road.mp3", albumId=4
        ),
        Song(
            songTitle="Oh Susannah",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Oh-Susannah.mp3", albumId=4
        ),
        Song(
            songTitle="Fire & Rain",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Fire-and-Rain.mp3", albumId=4
        ),
        Song(
            songTitle="Blossom",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Blossom.mp3", albumId=4
        ),
        Song(
            songTitle="Anywhere Like Heaven",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Anywhere-like-Heaven.mp3", albumId=4
        ),
        Song(
            songTitle="Oh Baby, Don't You Loose Your Lip On Me",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Oh-Baby-Dont-You-Loose-Your-Lip-on-Me.mp3", albumId=4
        ),
        Song(
            songTitle="Suite for 20 G",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Suite-for-20-G.mp3", albumId=4
        ),
        Song(
            songTitle="Hotel California",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Hotel-California.mp3", albumId=5
        ),
        Song(
            songTitle="New Kid In Town",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/New-Kid-in-Town.mp3", albumId=5
        ),
        Song(
            songTitle="Life in the Fast Lane",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Life-in-the-Fast-Lane.mp3", albumId=5
        ),
        Song(
            songTitle="Wasted Time",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Wasted-Time.mp3", albumId=5
        ),
        Song(
            songTitle="Victim of Love",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Victim-of-Love.mp3", albumId=5
        ),
        Song(
            songTitle="Pretty Maids All In A Row",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Pretty-Maids-All-in-a-Row.mp3", albumId=5
        ),
        Song(
            songTitle="Try and Love Again",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Try-and-Love-Again.mp3", albumId=5
        ),
        Song(
            songTitle="The Last Resort",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/The-Last-Resort.mp3", albumId=5
        ),
    ]

    db.session.add_all(songs)
    db.session.commit()

def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
