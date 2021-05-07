

const GET_SONGS = "songs/GET_SONGS"
const GET_ALBUM_SONGS = "songs/GET_ALBUM_SONGS"

const getSongs = (songs) => ({
    type: GET_SONGS,
    payload: songs
})

const getAlbumSongs = (songs) => ({
    type: GET_ALBUM_SONGS,
    payload: songs
})

//thunks

export const getSongsThunk = () => async (dispatch) => {
    const response = await fetch('/api/songs')
    if (!response.ok) {
        throw response
      }

      const songs = await response.json();
      dispatch(getSongs(songs))
}

export const getAlbumSongsThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/songs/album/${id}`)
    if (!response.ok) {
        throw response
      }

      const songs = await response.json();
      dispatch(getAlbumSongs(songs))
}

const initialState = {}

const songsReducer = (songs = initialState, action) => {
    let songsPayload;
    let newSongs;
    switch (action.type) {
        case GET_SONGS:
          songsPayload = action.payload
          newSongs = {};
          for (const song of songsPayload.songs) {
            newSongs[song.id] = song
          }
          return newSongs;
        case GET_ALBUM_SONGS:
            songsPayload = action.payload
            newSongs = {};
            for (const song of songsPayload.songs) {
              newSongs[song.id] = song
            }
            return newSongs;
        default:
          return songs;
      }
}

export default songsReducer;
