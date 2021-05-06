
const GET_ALBUMS = "albums/GET_ALBUMS"
const GET_ONE_ALBUM = "albums/GET_ONE_ALBUM"


const getAlbums = (albums) => ({
    type: GET_ALBUMS,
    payload: albums
})

const getOneAlbum = (album) => ({
    type: GET_ONE_ALBUM,
    payload: album
})

//thunks

export const getAlbumsThunk = () => async (dispatch) => {
    const response = await fetch('/api/albums')
    if (!response.ok) {
      throw response
    }
    const albums = await response.json();
    dispatch(getAlbums(albums))
  }


  export const getOneAlbumThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/albums/${id}`)
    if (!response.ok) {
      throw response
    }
    const album = await response.json();
    dispatch(getOneAlbum(album))
  }

  // reducer
  const initialState = {}
  const albumsReducer = (albums = initialState, action) => {
    switch (action.type) {
      case GET_ALBUMS:
        const albumsPayload = action.payload
        const newAlbums = {};
        for (const album of albumsPayload.farms) {
          newAlbums[album.id] = album
        }
        return newAlbums;
      case GET_ONE_ALBUM:
        const albumPayload = action.payload
        return albumPayload
      default:
        return albums;
    }
  }

  export default albumsReducer;
