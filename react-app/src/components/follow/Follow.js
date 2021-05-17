import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {createFollowingThunk, deleteFollowThunk, getFollowsThunk} from "../../store/following"

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
          let id;
        followingList.forEach(follow => {
          if (follow.followed_id === userId && follow.follower_id === sessionUser.id) {
            id = follow.id
          }
        })
        await dispatch(deleteFollowThunk(id))
        dispatch(getFollowsThunk(sessionUser.id))
        props.setSearchTerm("")
      }

    return (
        <div>
            {props.user.id !== sessionUser.id ?
                <div key={props.user.id}>
                <p>{props.user.username}</p>
                {!followingIdList.includes(props.user.id) ?
                <button onClick={e => follow(e, props.user.id)}>Follow +</button>
                : <button onClick={e => unfollow(e, props.user.id)}>unfollow</button>}
                </div>
            : null}
        </div>
    )

}
export default Follow
