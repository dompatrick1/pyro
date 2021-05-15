import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {createPlaylistThunk, getPlaylistThunk} from "../../store/playlist"

function Playlist() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [playlistName, setPlaylistName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const payload = {
            name: playlistName,
            userId: sessionUser.id
        }
        dispatch(createPlaylistThunk(payload))
        // dispatch(getPlaylistsThunk(sessionUser.id))
        setPlaylistName('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New playlist name..."
                maxlength="20"
                required
                value={playlistName}
                onChange={e => setPlaylistName(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Playlist
