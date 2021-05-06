from .db import db

class PlaylistAlbum(db.Model):
    __tablename__="playlistAlbums"

    id = db.Column(db.Integer, primary_key=True)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'), nullable = False)
    playlistId = db.Column(db.Integer, db.ForeignKey('playlists.id'), nullable = False)


    def to_dict(self):
        return {
            "id": self.id,
            "albumId": self.albumId,
            "playlistId": self.playlistId
        }


