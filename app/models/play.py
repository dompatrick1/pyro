from .db import db

class Play(db.Model):
    __tablename__='plays'

    id = db.Column(db.Integer, primary_key=True)
    playCount = db.Column(db.Integer, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
    albumId = db.Column(db.Integer, db.ForeignKey('albums.id'), nullable = False)

    def to_dict(self):
        return {
            "id": self.id,
            "playCount": self.playCount,
            "userId": self.userId,
            "albumId": self.albumId
        }
