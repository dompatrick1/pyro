const GET_PLAYLIST_ALBUMS = "playlists/GET_PLAYLIST_ALBUMS"
const CREATE_PLAYLIST_ALBUM = "playlists/CREATE_PLAYLIST_ALBUM"
const DELETE_PLAYLIST_ALBUM = "playlists/DELETE_PLAYLIST_ALBUM"
const DELETE_PLAYLIST_ALBUMS = "playlists/DELETE_PLAYLIST_ALBUMS"

const getPlaylistAlbums = (albums) => ({
    type: GET_PLAYLIST_ALBUMS,
    payload: albums
})

const createPlaylistAlbum = (album) => ({
    type: CREATE_PLAYLIST_ALBUM,
    payload: album
})

const deletePlaylistAlbum = () => ({
    type: DELETE_PLAYLIST_ALBUM
})

const deletePlaylistAlbums = (playlistId) => ({
    type: DELETE_PLAYLIST_ALBUMS
})

//thunks

export const getPlaylistAlbumsThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/playlistAlbums/playlist/${id}`)
    if (!response.ok) {
        throw response
      }

      const playlistAlbums = await response.json()
      dispatch(getPlaylistAlbums(playlistAlbums))
}

export const createPlaylistAlbumThunk = (newPlaylistAlbum) => async (dispatch) => {
    const {albumId, playlistId} = newPlaylistAlbum

    const response = await fetch(`/api/playlistAlbums/playlist/${playlistId}/album/${albumId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            albumId,
            playlistId
        })
    })
    const playlistAlbum = await response.json()
    dispatch(createPlaylistAlbum(playlistAlbum))
    return playlistAlbum
}

export const deletePlaylistAlbumThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/playlistAlbums/${id}`, {method: "DELETE"})
    dispatch(deletePlaylistAlbum())
    return null
}

export const deletePlaylistAlbumsThunk = (playlistId) => async (dispatch) => {

    const response = await fetch(`/api/playlistAlbums/delete/playlist/${playlistId}`, {method: "DELETE"})

    dispatch(deletePlaylistAlbums())
    return null
}


const initialState = {}

const playlistAlbumsReducer = (playlistAlbums = initialState, action) => {
    let newPlaylistAlbums;
    let playlistAlbumsPayload;

    switch (action.type) {
        case GET_PLAYLIST_ALBUMS:
            playlistAlbumsPayload = action.payload
            newPlaylistAlbums = {}
            for (const playlistAlbum of playlistAlbumsPayload.playlistAlbums) {
                newPlaylistAlbums[playlistAlbum.id] = playlistAlbum
            }
            return newPlaylistAlbums
        case CREATE_PLAYLIST_ALBUM:
            return {...playlistAlbums, [action.payload.id]: action.payload}
        case DELETE_PLAYLIST_ALBUM:
            return playlistAlbums
        case DELETE_PLAYLIST_ALBUMS:
            return playlistAlbums
        default:
            return playlistAlbums
    }
}
export default playlistAlbumsReducer
