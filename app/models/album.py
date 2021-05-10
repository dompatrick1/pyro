from .db import db


class Album(db.Model):
    __tablename__ = 'albums'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable = False)
    artist = db.Column(db.String(100), nullable = False)
    year = db.Column(db.String(4), nullable = False)
    image = db.Column(db.String(100), nullable = False)

    lastPlays = db.relationship('LastPlay', backref='albums')
    songs = db.relationship('Song', backref='albums')
    plays = db.relationship('Play', backref='albums')
    playlistAlbums = db.relationship('PlaylistAlbum', backref='albums')


    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "artist": self.artist,
            "year": self.year,
            "image": self.image,
        }
