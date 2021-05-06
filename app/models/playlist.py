from .db import db

class Playlist(db.Model):
    __tablename__='playlists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

    playlistAlbums = db.relationship('PlaylistAlbum', backref='playlists')


def to_dict(self):
    return {
        "id": self.id,
        "name": self.name,
        "userId": self.userId
    }
