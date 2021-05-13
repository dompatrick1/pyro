
const SET_ALBUM = "player/SET_ALBUM"

export const getPlayerAlbum = (albumId) => ({
    type: SET_ALBUM,
    payload: albumId
})

const initialState = {albumId: null}

const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ALBUM:
            return {...state, albumId: action.payload}
        default:
            return state
    }
}

export default playerReducer
