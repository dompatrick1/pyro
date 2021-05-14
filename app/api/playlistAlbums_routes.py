from flask import Blueprint
from app.models import PlaylistAlbum, db

playlistAlbum_routes = Blueprint("playlistAlbums", __name__)

@playlistAlbum_routes.route('/playlist/<int:id>')
def get_playlistAlbums(id):
    playlistAlbums = PlaylistAlbum.query.filter(PlaylistAlbum.playlistId == id).all()
    return {"playlistAlbums": [playlistAlbum.to_dict() for playlistAlbum in playlistAlbums]}

@playlistAlbum_routes.route('/playlist/<playlistId>/album/<albumId>', methods=["POST"])
def create_playlistAlbum(playlistId, albumId):
    playlistAlbum = PlaylistAlbum(playlistId= playlistId, albumId= albumId)
    db.session.add(playlistAlbum)
    db.session.commit()
    return playlistAlbum.to_dict()

@playlistAlbum_routes.route('/<int:id>', methods=["DELETE"])
def delete_playlistAlbum(id):
    playlistAlbum = PlaylistAlbum.query.get(id)
    db.session.delete(playlistAlbum)
    db.session.commit()

@playlistAlbum_routes.route('delete/playlist/<playlistId>', methods=["DELETE"])
def delete_playlistAlbums(playlistId):
    playlistAlbums = PlaylistAlbum.query.filter(PlaylistAlbum.playlistId == playlistId).all()
    for playlistAlbum in playlistAlbums:
        db.session.delete(playlistAlbum)
    db.session.commit()
