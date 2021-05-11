from flask import Blueprint, request, redirect
from app.models import Following, db

following_routes = Blueprint("followings", __name__)

@following_routes.route('/user/<int:id>')
def get_following(id):
    followingList = Following.query.filter(Following.follower_id == id).all()
    return {"following": [following.to_dict() for following in followingList]}


@following_routes.route('/user/<follower_id>/following/<followed_id>', methods=["POST"])
def create_following(follower_id, followed_id):
    follow = Following(follower_id= follower_id, followed_id= followed_id)
    db.session.add(follow)
    db.session.commit()
    return follow.to_dict()

@following_routes.route('/<int:id>', methods=["DELETE"])
def delete_following(id):
    follow = Following.query.get(id)
    db.session.delete(follow)
    db.session.commit()
    return {}
