const GET_PLAYS = "plays/GET_PLAYS"
const CREATE_PLAY = "plays/CREATE_PLAY"
const EDIT_PLAY = "plays/EDIT_PLAY"

const getPlays = (plays) => ({
    type: GET_PLAYS,
    payload: plays
})

const createPlay = (play) => ({
    type: CREATE_PLAY,
    payload: play
})

const editPlay = (play) => ({
    type: EDIT_PLAY,
    payload: play
})

//thunks

export const getPlaysThunk = (userId) => async (dispatch) => {
    const response = await fetch(`/api/plays/user/${userId}`)
    if (!response.ok) {
        throw response
      }

      const plays = await response.json();
      dispatch(getPlays(plays))
}

export const createPlayThunk = (newPlay) => async (dispatch) => {
    const {playCount, userId, albumId} = newPlay

    const response = await fetch(`/api/plays/user/${userId}/album/${albumId}/${playCount}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            playCount,
            userId,
            albumId
          })
    })
    const play = await response.json()
    dispatch(createPlay(play))
    return play
}

export const editPlayThunk = (newPlay) => async (dispatch) => {
    const {id, playCount, userId, albumId} = newPlay

    const response = await fetch(`/api/plays/user/${userId}/album/${albumId}/${playCount}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const play = await response.json()
    dispatch(editPlay(play))
    return play
}


const initialState = {}

const playsReducer = (plays = initialState, action) => {
    let newPlays;
    let playsPayload;

    switch (action.type) {
        case GET_PLAYS:
            playsPayload = action.payload
            newPlays = {}
            for (const play of playsPayload.plays) {
                newPlays[play.id] = play
            }
            return newPlays
        case CREATE_PLAY:
            return {...plays, [action.payload.id]: action.payload}
        case EDIT_PLAY:
            return {...plays, [action.payload.id]: action.payload}

        default:
            return plays
    }
}

export default playsReducer
