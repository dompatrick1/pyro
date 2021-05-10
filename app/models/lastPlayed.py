from .db import db

class LastPlay(db.Model):
    __tablename__='lastPlays'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'), nullable = False)

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.userId,
            "albumId": self.albumId
        }
