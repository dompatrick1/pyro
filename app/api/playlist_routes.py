from flask import Blueprint
from app.models import Playlist, db

playlist_routes = Blueprint("playlists", __name__)

@playlist_routes.route('/user/<int:id>')
def get_playlists(id):
    playlists = Playlist.query.filter(Playlist.userId == id).all()
    return {"playlists": [playlist.to_dict() for playlist in playlists]}

@playlist_routes.route('/user/<userId>/playlist/<name>', methods=["POST"])
def create_playlist(name, userId):
    playlist = Playlist(name= name, userId= userId)
    db.session.add(playlist)
    db.session.commit()
    return playlist.to_dict()

@playlist_routes.route('/<int:id>', methods=["DELETE"])
def delete_playlist(id):
    playlist = Playlist.query.get(id)
    db.session.delete(playlist)
    db.session.commit()
    return {}


