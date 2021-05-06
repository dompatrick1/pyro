from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


followings = db.Table('followings',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('follower_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('followed_id', db.Integer, db.ForeignKey('users.id'))
)

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  lastListen = db.Column(db.Integer, db.ForeignKey('albums.id'))

  plays = db.relationship('Play', backref='users')
  playlists = db.relationship('Playlist', backref='users')
  followed = db.relationship(
        'User', secondary=followings,
        primaryjoin=(followings.c.follower_id == id),
        secondaryjoin=(followings.c.followed_id == id),
        backref=db.backref('followings', lazy='dynamic'), lazy='dynamic')



  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }
