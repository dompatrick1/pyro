from flask import Blueprint, jsonify, request, redirect
from app.models import followings, db

following_routes = Blueprint("followings", __name__)

@following_routes.route('/user/<int:id>')
def get_following(id):
    followingList = followings.query.filter(followings.follower_id == id)
    return {"following": following.to_dict() for following in followingList}


@following_routes.route('/user/<follower_id>/following/<followed_id>', methods=["POST"])
def create_following(follower_id, followed_id):
    follow = followings(follower_id= follower_id, followed_id= followed_id)
    db.session.add(follow)
    db.session.commit()
    return follow.to_dict()
