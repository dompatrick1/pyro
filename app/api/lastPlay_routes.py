from flask import Blueprint, jsonify, request, redirect
from app.models import LastPlay, db
from flask_login import login_required, current_user

lastPlay_routes = Blueprint('lastPlays', __name__)


@lastPlay_routes.route('/user/<int:id>')
@login_required
def get_lastPlay(id):
    lastPlay = LastPlay.query.filter(LastPlay.userId == id).first()
    print("lastPlay---------", lastPlay)
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
