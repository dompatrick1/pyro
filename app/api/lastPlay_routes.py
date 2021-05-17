from flask import Blueprint, jsonify, request, redirect
from app.models import LastPlay, db
from flask_login import login_required, current_user

lastPlay_routes = Blueprint('lastPlays', __name__)


@lastPlay_routes.route('/')
@login_required
def get_lastPlay():
    lastPlays = LastPlay.query.all()
    return {"lastPlays": [lastPlay.to_dict() for lastPlay in lastPlays]}

@lastPlay_routes.route('/user/<userId>')
@login_required
def get_user_lastPlay(userId):
    lastPlay = LastPlay.query.filter(LastPlay.userId == userId).first()
    return {"lastPlay": lastPlay.to_dict()}


@lastPlay_routes.route('/user/<userId>/album/<albumId>', methods=["POST"])
@login_required
def first_play(userId, albumId):
    # data = request.json
    firstPlay = LastPlay(userId= userId, albumId= albumId)
    db.session.add(firstPlay)
    db.session.commit()
    return firstPlay.to_dict()


@lastPlay_routes.route('/user/<userId>/album/<albumId>/<int:id>', methods=["PATCH"])
@login_required
def edit_lastPlay(id, userId, albumId):
    lastPlay = LastPlay.query.get(id)
    lastPlay.userId= userId
    lastPlay.albumId= albumId
    db.session.commit()
    return lastPlay.to_dict()
