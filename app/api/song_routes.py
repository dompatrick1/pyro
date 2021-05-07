from flask import Blueprint, jsonify
from app.models import Song

song_routes = Blueprint('songs', __name__)

@song_routes.route('/')
def all_songs():
    songs = Song.query.all()
    return {"songs": [song.to_dict() for song in songs]}

@song_routes.route('/album/<int:id>')
def get_album_songs(id):
    songs = Song.query.filter(Song.albumId == id).all()
    return {"songs": [song.to_dict() for song in songs]}
