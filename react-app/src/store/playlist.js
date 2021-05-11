
const GET_PLAYLISTS = "playlists/GET_PLAYLISTS"
const CREATE_PLAYLIST = "playlists/CREATE_PLAYLIST"
const DELETE_PLAYLIST = "playlists/DELETE_PLAYLIST"

const getPlaylists = (playlists) => ({
    type: GET_PLAYLISTS,
    payload: playlists
})

const createPlaylist = (playlist) => ({
    type: CREATE_PLAYLIST,
    payload: playlist
})

const deletePlaylist = () => ({
    type: DELETE_PLAYLIST
})

//thunks

export const getPlaylistsThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/playlists/user/${id}`)
    if (!response.ok) {
        throw response
      }

    const playlists = await response.json()
    console.log("------$$$$$", response)
    dispatch(getPlaylists(playlists))
}

export const createPlaylistThunk = (newPlaylist) => async (dispatch) => {
    const {name, userId} = newPlaylist

    const response = await fetch(`/api/playlists/user/${userId}/playlist/${name}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            userId
        })
    })
    const playlist = await response.json();
    dispatch(createPlaylist(playlist))
    return playlist
}

export const deletePlaylistThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/plalists/${id}`, {method: "DELETE"})
    dispatch(deletePlaylist())
    return null;
}

const initialState = {}

const playlistReducer = (playlists = initialState, action) => {
    let newPlaylists;
    let playlistsPayload;

    switch(action.type) {
        case GET_PLAYLISTS:
            playlistsPayload = action.payload
            newPlaylists = {}
            for (const playlist of playlistsPayload.playlists) {
                newPlaylists[playlist.id] = playlist
            }
            return newPlaylists
        case CREATE_PLAYLIST:
            return {...playlists, [action.payload.id]: action.payload}
        case DELETE_PLAYLIST:
            return playlists
        default:
            return playlists
    }
}
export default playlistReducer;
