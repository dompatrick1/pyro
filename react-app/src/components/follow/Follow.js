import React, { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {createFollowingThunk, deleteFollowThunk, getFollowsThunk} from "../../store/following"
import "./follow.css"

function Follow(props) {
    const dispatch = useDispatch()
    const followingList = Object.values(useSelector(state => state.follows))
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getFollowsThunk(sessionUser.id))
      }, [dispatch])

    let followingIdList = []

    followingList.forEach(follow => {
        followingIdList.push(follow.followed_id)
    })

    function follow(e, userId) {
        e.preventDefault()
        props.setSearchTerm("")
        const payload = {
          follower_id: sessionUser.id,
          followed_id: userId
        }
        dispatch(createFollowingThunk(payload))
      }

      const unfollow = async (e, userId) => {
        e.preventDefault()
          let id;
        followingList.forEach(follow => {
          if (follow.followed_id === userId && follow.follower_id === sessionUser.id) {
            id = follow.id
          }
        })
        await dispatch(deleteFollowThunk(id))
        dispatch(getFollowsThunk(sessionUser.id))

      }

    return (
        <div>
            {props.user.id !== sessionUser.id ?
                <div key={props.user.id}>
                <p className="followedUserName">{`${props.user.username}`}</p>
                {!followingIdList.includes(props.user.id) ?
                <button className="followButton" onClick={e => follow(e, props.user.id)}>Follow +</button>
                : <button className="followButton" onClick={e => unfollow(e, props.user.id)}>unfollow</button>}
                </div>
            : null}
        </div>
    )

}
export default Follow
