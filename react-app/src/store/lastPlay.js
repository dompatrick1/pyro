
const GET_LAST_PLAY = "lastPlays/GET_LAST_PLAY"
const CREATE_LAST_PLAY = "lastPays/CREATE_LAST_PLAY"
const EDIT_LAST_PLAY = "lastPlays/EDIT_LAST_PLAY"

const getLastPlay = (lastPlays) => ({
    type: GET_LAST_PLAY,
    payload: lastPlays
})

const createLastPlay = (lastPlay) => ({
    type: CREATE_LAST_PLAY,
    payload: lastPlay
})

const editLastPlay = (lastPlay) => ({
    type: EDIT_LAST_PLAY,
    payload: lastPlay
})


// Thunks

export const getLastPlayThunk = (userId) => async (dispatch) => {
    const response = await fetch(`/api/lastPlays/user/${userId}`)
    if (!response.ok) {
      throw response
    }

    const lastPlay = await response.json();
    console.log("get last play response", lastPlay)
    dispatch(getLastPlay(lastPlay))
  }


  export const createLastPlayThunk = (lastPlay) => async (dispatch) => {
    const { userId, albumId } = lastPlay

    const response = await fetch(`/api/lastPlays/user/${userId}/album/${albumId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        albumId
      })
    })

    const newLastPlay = await response.json()
    dispatch(createLastPlay(newLastPlay))
    return newLastPlay
  }

  export const editLastPlayThunk = (lastPlay) => async (dispatch) => {
    const {id, userId, albumId } = lastPlay

    const response = await fetch(`/api/lastPlays/user/${userId}/album/${albumId}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        albumId
      })
    })

    const editedLastPlay = await response.json()
    dispatch(editLastPlay(editedLastPlay))
    return editedLastPlay
  }


  const initialState = {}

  const lastPlayReducer = (lastPlays = initialState, action) => {

      switch (action.type) {
          case GET_LAST_PLAY:
              return action.payload;
            case CREATE_LAST_PLAY:
                return {...lastPlays, [action.payload.id]: action.payload}
            case EDIT_LAST_PLAY:
                return {[action.payload.id]: action.payload}
            default:
                return lastPlays
      }
  }

  export default lastPlayReducer;
