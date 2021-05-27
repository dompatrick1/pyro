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
        Song(
            songTitle="Ramble Tamble",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Ramble-Tamble.mp3", albumId=6
        ),
        Song(
            songTitle="Before You Accuse Me",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Before-You-Accuse-Me.mp3", albumId=6
        ),
        Song(
            songTitle="Travelin' Band",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Travelin-Band.mp3", albumId=6
        ),
        Song(
            songTitle="Ooby Dooby",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Ooby-Dooby.mp3", albumId=6
        ),
        Song(
            songTitle="Lookin' Out My Back Door",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Lookin-Out-My-Back-Door.mp3", albumId=6
        ),
        Song(
            songTitle="Run Through The Jungle",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Run-Through-The-Jungle.mp3", albumId=6
        ),
        Song(
            songTitle="Up Around The Bend",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Up-Around-The-Bend.mp3", albumId=6
        ),
        Song(
            songTitle="My Baby Left Me",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/My-Baby-Left-Me.mp3", albumId=6
        ),
        Song(
            songTitle="Who'll Stop The Rain",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Wholl-Stop-The-Rain.mp3", albumId=6
        ),
        Song(
            songTitle="I Heard It Through The Grapevine",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/I-Heard-It-Through-The-Grapevine.mp3", albumId=6
        ),
        Song(
            songTitle="Long As I Can See The Light",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Long-As-I-Can-See-The-Light.mp3", albumId=6
        ),
        Song(
            songTitle="The Times They Are a-Changin'",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/The-Times-They-Are-A-Changin.mp3", albumId=7
        ),
        Song(
            songTitle="Ballad of Hollis Brown",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Ballad-of-Hollis-Brown.mp3", albumId=7
        ),
        Song(
            songTitle="With God on Our Side",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/With-God-on-Our-Side.mp3", albumId=7
        ),
        Song(
            songTitle="One Too Many Mornings",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/One-Too-Many-Mornings.mp3", albumId=7
        ),
        Song(
            songTitle="North Country Blues",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/North-Country-Blues.mp3", albumId=7
        ),
        Song(
            songTitle="Only a Pawn in Their Game",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Only-A-Pawn-In-Their-Game.mp3", albumId=7
        ),
        Song(
            songTitle="Boots of Spanish Leather",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Boots-of-Spanish-Leather.mp3", albumId=7
        ),
        Song(
            songTitle="When the Ship Comes In",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/When-the-Ship-Comes-In.mp3", albumId=7
        ),
        Song(
            songTitle="The Lonesome Death of Hattie Carroll",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/The-Lonesome-Death-of-Hattie-Carroll.mp3", albumId=7
        ),
        Song(
            songTitle="Restless Farewell",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Restless-Farewell.mp3", albumId=7
        ),
        Song(
            songTitle="Move Over",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Move-Over.mp3", albumId=8
        ),
        Song(
            songTitle="Cry Baby",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Cry-Baby.mp3", albumId=8
        ),
        Song(
            songTitle="A Woman Left Lonely",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/A-Woman.mp3", albumId=8
        ),
        Song(
            songTitle="Half Moon",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Half-Moon.mp3", albumId=8
        ),
        Song(
            songTitle="Buried Alive In The Blue",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Buried-Alive-In-The-Blues.mp3", albumId=8
        ),
        Song(
            songTitle="My Baby",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/My-Baby.mp3", albumId=8
        ),
        Song(
            songTitle="Me and Bobby McGee",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Me-And-Bobby-McGee.mp3", albumId=8
        ),
        Song(
            songTitle="Mercedes Benz",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Mercedes-Benz.mp3", albumId=8
        ),
        Song(
            songTitle="Trust Me",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Trust-Me.mp3", albumId=8
        ),
        Song(
            songTitle="Get It While You Can",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Get-It-While-You-Can.mp3", albumId=8
        ),
        Song(
            songTitle="Black Dog",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Black-Dog.mp3", albumId=9
        ),
        Song(
            songTitle="Rock and Roll",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Rock-and-Roll.mp3", albumId=9
        ),
        Song(
            songTitle="The Battle of Evermore",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/The-Battle-of-Evermore.mp3", albumId=9
        ),
        Song(
            songTitle="Stairway to Heaven",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Stairway-to-Heaven.mp3", albumId=9
        ),
        Song(
            songTitle="Misty Mountain Hop",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Misty-Mountain-Hop.mp3", albumId=9
        ),
        Song(
            songTitle="Four Sticks",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Four-Sticks.mp3", albumId=9
        ),
        Song(
            songTitle="Going to California",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Going-to-California.mp3", albumId=9
        ),
        Song(
            songTitle="When the Levee Breaks",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/When-the-Levee-Breaks.mp3", albumId=9
        ),
        Song(
            songTitle="Don't Stop 'Til You Get Enough",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Dont-Stop-Till-You-Get-Enough.mp3", albumId=10
        ),
        Song(
            songTitle="Rock With You",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Rock-With-You.mp3", albumId=10
        ),
        Song(
            songTitle="Workin' Day and Night",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Workin-Day-And-Night.mp3", albumId=10
        ),
        Song(
            songTitle="Get on the Floor",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Get-On-The-Floor.mp3", albumId=10
        ),
        Song(
            songTitle="Off the Wall",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Off-The-Wall.mp3", albumId=10
        ),
        Song(
            songTitle="Girlfriend",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Girlfriend.mp3", albumId=10
        ),
        Song(
            songTitle="She's Out of My Life",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Shes-Out-Of-My-Life.mp3", albumId=10
        ),
        Song(
            songTitle="I Can't Help It",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/I-Cant-Help-It.mp3", albumId=10
        ),
        Song(
            songTitle="It's the Falling in Love",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Its-the-Falling-in-Love.mp3", albumId=10
        ),
        Song(
            songTitle="Burn This Disco Out",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Burn-This-Disco-Out.mp3", albumId=10
        ),
        Song(
            songTitle="Baba O'Riley",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Baba-O-Riley.mp3", albumId=11
        ),
        Song(
            songTitle="Bargain",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Bargain.mp3", albumId=11
        ),
        Song(
            songTitle="Love Ain't for Keepin'",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Love-Aint-for-Keeping.mp3", albumId=11
        ),
        Song(
            songTitle="My Wife",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/My-Wife.mp3", albumId=11
        ),
        Song(
            songTitle="The Song Is Over",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/The-Song-is-Over.mp3", albumId=11
        ),
        Song(
            songTitle="Getting In Tune",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Getting-in-Tune.mp3", albumId=11
        ),
        Song(
            songTitle="Goin' Mobile",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Going-Mobile.mp3", albumId=11
        ),
        Song(
            songTitle="Behind Blue Eyes",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Behind-Blue-Eyes.mp3", albumId=11
        ),
        Song(
            songTitle="Won't Get Fooled Again",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Wont-Get-Fooled-Again.mp3", albumId=11
        ),
        Song(
            songTitle="War Pigs",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/War-Pigs.mp3", albumId=12
        ),
        Song(
            songTitle="Paranoid",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Paranoid.mp3", albumId=12
        ),
        Song(
            songTitle="Planet Caravan",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Planet-Caravan.mp3", albumId=12
        ),
        Song(
            songTitle="Iron Man",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Iron-Man.mp3", albumId=12
        ),
        Song(
            songTitle="Electric Funeral",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Electric-Funeral.mp3", albumId=12
        ),
        Song(
            songTitle="Hand of Doom",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Hand-of-Doom.mp3", albumId=12
        ),
        Song(
            songTitle="Rat Salad",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Rat-Salad.mp3", albumId=12
        ),
        Song(
            songTitle="Fairies Wear Boots",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Jack-the-Stripper-Fairies-Wear-Boots.mp3", albumId=12
        ),
        Song(
            songTitle="Wasted Words",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Wasted-Words.mp3", albumId=13
        ),
        Song(
            songTitle="Ramblin' Man",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Ramblin-Man.mp3", albumId=13
        ),
        Song(
            songTitle="Come and Go Blues",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Come-and-Go-Blues.mp3", albumId=13
        ),
        Song(
            songTitle="Jelly Jelly",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Jelly-Jelly.mp3", albumId=13
        ),
        Song(
            songTitle="Southbound",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Southbound.mp3", albumId=13
        ),
        Song(
            songTitle="Jessica",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Jessica.mp3", albumId=13
        ),
        Song(
            songTitle="Pony Boy",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Pony-Boy.mp3", albumId=13
        ),
        Song(
            songTitle="Breathe",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Breathe.mp3", albumId=14
        ),
        Song(
            songTitle="On the Run",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/On-The-Run.mp3", albumId=14
        ),
        Song(
            songTitle="Time",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Time.mp3", albumId=14
        ),
        Song(
            songTitle="The Great Gig in the Sky",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/The-Great-Gig-In-The-Sky.mp3", albumId=14
        ),
        Song(
            songTitle="Money",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Money.mp3", albumId=14
        ),
        Song(
            songTitle="Us and Them",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Us-And-Them.mp3", albumId=14
        ),
        Song(
            songTitle="Any Colour You Like",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Any-Colour-You-Like.mp3", albumId=14
        ),
        Song(
            songTitle="Brain Damage",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Brain-Damage.mp3", albumId=14
        ),
        Song(
            songTitle="Eclipse",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Eclipse.mp3", albumId=14
        ),
        Song(
            songTitle="Toys in the Attic",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Toys-In-The-Attic.mp3", albumId=15
        ),
        Song(
            songTitle="Uncle Salty",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Uncle-Salty.mp3", albumId=15
        ),
        Song(
            songTitle="Adam's Apple",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Adams-Apple.mp3", albumId=15
        ),
        Song(
            songTitle="Walk This Way",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Walk-This-Way.mp3", albumId=15
        ),
        Song(
            songTitle="Big Ten Inch Record",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Big-Ten-Inch-Record.mp3", albumId=15
        ),
        Song(
            songTitle="Sweet Emotion",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Sweet-Emotion.mp3", albumId=15
        ),
        Song(
            songTitle="No More No More",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/No-More.mp3", albumId=15
        ),
        Song(
            songTitle="Round and Round",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Round-and-Round.mp3", albumId=15
        ),
        Song(
            songTitle="You See Me Crying",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/You-See-Me-Crying.mp3", albumId=15
        ),
        Song(
            songTitle="I Ain't the One",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/I-Aint-The-One.mp3", albumId=16
        ),
        Song(
            songTitle="Tuesday's Gone",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Tuesdays-Gone.mp3", albumId=16
        ),
        Song(
            songTitle="Gimme Three Steps",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Gimme-Three-Steps.mp3", albumId=16
        ),
        Song(
            songTitle="Simple Man",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Simple-Man.mp3", albumId=16
        ),
        Song(
            songTitle="Things Goin' On",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Things-Goin-On.mp3", albumId=16
        ),
        Song(
            songTitle="Mississippi Kid",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Mississippi-Kid.mp3", albumId=16
        ),
        Song(
            songTitle="Poison Whiskey",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Poison-Whiskey.mp3", albumId=16
        ),
        Song(
            songTitle="Free Bird",
            song="https://pyro-songs.s3.us-east-2.amazonaws.com/Free-Bird.mp3", albumId=16
        ),
    ]

    db.session.add_all(songs)
    db.session.commit()

def undo_songs():
    db.session.execute('TRUNCATE songs RESTART IDENTITY CASCADE;')
    db.session.commit()
