import React, { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {getAlbumsThunk} from "../../store/album"
import {createPlaylistAlbumThunk} from "../../store/playlistAlbum"
import {getPlayerAlbum} from "../../store/player"
import {getPlaylistsThunk} from "../../store/playlist"
import {createLastPlayThunk, editLastPlayThunk, getLastPlayThunk} from "../../store/lastPlay"
import {getPlaysThunk, createPlayThunk, editPlayThunk} from "../../store/play"

export const searchInner = (content) => {
    return content
}

function SearchAlbums(props) {
    const dispatch = useDispatch()
    const albums = Object.values(useSelector(state => state.albums))
    const sessionUser = useSelector(state => state.session.user)
    const lastPlayed = useSelector(state => state.lastPlays.lastPlay)
    const playlists = Object.values(useSelector(state => state.playlists))
    const plays = Object.values(useSelector(state => state.plays))
    const IMAGE_FOLDER = process.env.NODE_ENV === 'production' ? '/static' : ''
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        dispatch(getAlbumsThunk())
        dispatch(getLastPlayThunk(sessionUser.id))
        dispatch(getPlaysThunk(sessionUser.id))
        dispatch(getPlaylistsThunk(sessionUser.id))
    }, [dispatch])


    function addToPlaylist(e, playlistId, albumId) {
        e.preventDefault()

        const payload = {
            albumId,
            playlistId
        }
        dispatch(createPlaylistAlbumThunk(payload))
    }

    // Album Select Actions ----------------------------------------------------------
    const albumSelect = async (e, id) => {
        e.preventDefault()
        dispatch(getPlayerAlbum(id))
        setSearchTerm("")
        const pay ={
            playCount: 1,
            userId: sessionUser.id,
            albumId: id
        }

        if (plays.length === 0) dispatch(createPlayThunk(pay))

        for (let i = 0; i < plays.length; i++) {
            let play = plays[i]
            if (play.albumId === id) {
                const editPayload = {
                    id: play.id,
                    playCount: play.playCount + 1,
                    userId: sessionUser.id,
                    albumId: id
                }
                dispatch(editPlayThunk(editPayload))
                break
            } else if (i === plays.length - 1 && play.albumId !== id) {
                dispatch(createPlayThunk(pay))
                break
            }
        }

        if (!lastPlayed) {
            const payload = {
                userId: sessionUser.id,
                albumId: id
            }
            dispatch(createLastPlayThunk(payload))
        } else if (lastPlayed){
            const payload = {
                id: lastPlayed.id,
                userId: sessionUser.id,
                albumId: id
            }
            await dispatch(editLastPlayThunk(payload))
            dispatch(getLastPlayThunk(sessionUser.id))
        }
    }
// -----------------------------------------------------------------------------------

        return (
            <div>
                <form>
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}/>
                    {searchTerm.length ?
                        albums.filter(album => {
                            if (searchTerm === "") {
                                return album
                            } else if (album.title.toLowerCase().includes(searchTerm.toLowerCase()) || album.artist.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return album
                            }
                        }).map((album, key) => {
                            return (
                                <div>
                                    <button  onClick={e => albumSelect(e, album.id)}>
                                        <img className="albumImage" src={`${IMAGE_FOLDER}${album.image}`} alt={`${IMAGE_FOLDER}${album.image}`}></img>
                                    </button>
                                    {playlists.length > 0 ?
                                        <form>
                                            <select  onChange={e => addToPlaylist(e, e.target.value, album.id)}>
                                                <option value="" disabled selected hidden>Add To Playlist</option>
                                                {playlists.map(playlist => (
                                                    <option value={playlist.id}>{playlist.name}</option>
                                                ))}
                                            </select>
                                        </form>
                                    : null}
                                </div>
                            )
                        })

                    : null}
                </form>
            </div>
        )
    }



export default SearchAlbums
