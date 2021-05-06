from .db import db

class Song(db.Model):
    __tablename__= 'songs'

    id = db.Column(db.Integer, primary_key=True)
    songTitle = db.Column(db.String(100), nullable = False)
    song = db.Column(db.String(500), nullable = False)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'), nullable = False)


    def to_dict(self):
        return {
            "id": self.id,
            "songTitle": self.songTitle,
            "song": self.song,
            "albumId": self.albumId,
        }
