
const GET_FOLLOWS = "followings/GET_FOLLOWS"
const CREATE_FOLLOWING = "followings/CREATE_FOLLOWING"

const getFollows = (follows) => ({
    type: GET_FOLLOWS,
    payload: follows
})

const createFollow = (follow) => ({
    type: CREATE_FOLLOWING,
    payload: follow
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

    const response = await fetch(`/api/following/user/${follower_id}/following/${followed_id}`)
}
