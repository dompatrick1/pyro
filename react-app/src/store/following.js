
const GET_FOLLOWS = "followings/GET_FOLLOWS"
const CREATE_FOLLOWING = "followings/CREATE_FOLLOWING"
const DELETE_FOLLOWING = "followings/DELETE_FOLLOWING"

const getFollows = (follows) => ({
    type: GET_FOLLOWS,
    payload: follows
})

const createFollow = (follow) => ({
    type: CREATE_FOLLOWING,
    payload: follow
})

const deleteFollow = () => ({
    type: DELETE_FOLLOWING
})

//thunks

export const getFollowsThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/following/user/${id}`)
    if (!response.ok) {
        throw response
      }

      const follows = await response.json()
      dispatch(getFollows(follows))
}

export const createFollowingThunk = (newFollow) => async (dispatch) => {
    const {follower_id, followed_id} = newFollow

    const response = await fetch(`/api/following/user/${follower_id}/following/${followed_id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            follower_id,
            followed_id
        })
    })
    const play = await response.json();
    dispatch(createFollow(play))
    return play
}

export const deleteFollowThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/following/${id}`, {method: "DELETE"})

    dispatch(deleteFollow())
    return null;
}

const initialState = {}

const followReducer = (follows = initialState, action) => {
    let newFollows;
    let followsPayload;

    switch(action.type) {
        case GET_FOLLOWS:
            followsPayload = action.payload
            newFollows = {}
            for (const follow of followsPayload.following) {
                newFollows[follow.id] = follow
            }
            return newFollows
        case CREATE_FOLLOWING:
            return {...follows, [action.payload.id]: action.payload}
        case DELETE_FOLLOWING:
            return follows
        default:
            return follows;
    }
}
export default followReducer;
