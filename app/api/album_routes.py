from flask import Blueprint, jsonify
from app.models import Album

album_routes = Blueprint('albums', __name__)

@album_routes.route('/')
def all_albums():
    albums = Album.query.all()
    return {"albums": [album.to_dict() for album in albums]}

@album_routes.route('/<int:id>')
def get_album(id):
    album = Album.query.get(id)
    return album.to_dict()
