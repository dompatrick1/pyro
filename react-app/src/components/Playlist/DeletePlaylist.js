import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getPlaylistsThunk, deletePlaylistThunk} from "../../store/playlist"
import {deletePlaylistAlbumsThunk, getPlaylistAlbumsThunk} from "../../store/playlistAlbum"
import '../Main/main.css'

function DeletePlaylist(props) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const playlistAlbums = Object.values(useSelector(state => state.playlistAlbums))
    const albums = Object.values(useSelector(state => state.albums))
    const [deleteClicked, setDeleteClicked] = useState(0)


    let playlistAlbumsList = []
    if (playlistAlbums) {
        albums.map(album => {
            playlistAlbums.map(playlistAlbum => {
                if (playlistAlbum.albumId === album.id) {
                    playlistAlbumsList.push(album)
                }
            })
        })
    }

    const setDelete = (e, id) => {
        e.preventDefault()
        setDeleteClicked(id)
    }

    const deletePlaylist = async (e, id) => {
        e.preventDefault()
        setDeleteClicked(0)
        if (playlistAlbumsList.length > 0) {
            await dispatch(deletePlaylistAlbumsThunk(id))
        }

        await (dispatch(deletePlaylistThunk(id)))
        dispatch(getPlaylistsThunk(sessionUser.id))
        dispatch(getPlaylistAlbumsThunk(id))
    }

    return (
        <>
        <button className="deletePlaylist" onClick={e => setDelete(e, props.playlist.id)}>Delete</button>
        {deleteClicked !== 0  ?
            <div className="deletePlaylistConfirmationContainer">
                <p>{`Are you sure you want to delete "${props.playlists.find(playlist => playlist.id === deleteClicked).name}" playlist?`}</p>
                <button onClick={e => deletePlaylist(e, deleteClicked)}>Yes</button>
                <button onClick={() => setDeleteClicked(0) }>No</button>
            </div>
        : null}
        </>
    )
}

export default DeletePlaylist
