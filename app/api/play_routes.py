from flask import Blueprint, jsonify, request, redirect
from app.models import Play, db

play_routes = Blueprint('plays', __name__)

@play_routes.route('/user/<int:id>')
def get_plays(id):
    plays = Play.query.filter(Play.userId == id).all()
    return {"plays": [play.to_dict() for play in plays]}

@play_routes.route('/user/<userId>/album/<albumId>/<playCount>', methods=["POST"])
def create_play(playCount, userId, albumId):
    play = Play(playCount= playCount, userId= userId, albumId= albumId)
    db.session.add(play)
    db.session.commit()
    return play.to_dict()


@play_routes.route('/user/<userId>/album/<albumId>/<playCount>/<int:id>', methods=["PATCH"])
def edit_play(id, playCount, userId, albumId):
    play = Play.query.get(id)
    play.playCount= playCount
    play.userId= userId
    play.albumId= albumId
    db.session.commit()
    return play.to_dict()
