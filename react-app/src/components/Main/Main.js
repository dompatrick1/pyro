import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getAlbumsThunk} from "../../store/album"
import {createLastPlayThunk, editLastPlayThunk, getLastPlayThunk} from "../../store/lastPlay"
import {getPlaysThunk, createPlayThunk, editPlayThunk} from "../../store/play"
import {getPlaylistsThunk} from "../../store/playlist"
import {createPlaylistAlbumThunk} from "../../store/playlistAlbum"
import crate from "./crate.png"
import UsersList from "../UsersList"
import User from "../User"
import Playlist from "../Playlist/Playlist"
import DeletePlaylist from "../Playlist/DeletePlaylist"
import {getPlayerAlbum} from "../../store/player"
import "./main.css"

function Main() {
    const dispatch = useDispatch()
    const selectAlbumId = useSelector(state => state.player.albumId)
    const sessionUser = useSelector(state => state.session.user)
    const lastPlayed = useSelector(state => state.lastPlays.lastPlay)
    const plays = Object.values(useSelector(state => state.plays))
    const albums = Object.values(useSelector(state => state.albums))
    const playlists = Object.values(useSelector(state => state.playlists))
    const IMAGE_FOLDER = process.env.NODE_ENV === 'production' ? '/static' : ''
    let inner;

    useEffect(() => {
        dispatch(getAlbumsThunk())
        dispatch(getLastPlayThunk(sessionUser.id))
        dispatch(getPlaysThunk(sessionUser.id))
    }, [])

    useEffect(() => {
        dispatch(getPlaylistsThunk(sessionUser.id))
    }, [])
// Album Select Actions ----------------------------------------------------------
    const albumSelect = async (e, id) => {
        e.preventDefault()
        dispatch(getPlayerAlbum(id))
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

    function addToPlaylist(e, playlistId, albumId) {
        e.preventDefault()

        const payload = {
            albumId,
            playlistId
        }
        dispatch(createPlaylistAlbumThunk(payload))
    }

    if (selectAlbumId > 0) {
        inner = (
            <>
                {albums[selectAlbumId - 1] ?
                    <div>
                        <img className="playingAlbumImage" src={`${IMAGE_FOLDER}${albums[selectAlbumId - 1].image}`} alt={albums[selectAlbumId - 1].image}></img>
                        <h2>{albums[selectAlbumId - 1].title}</h2>
                        <h3>{albums[selectAlbumId - 1].artist}</h3>
                    </div>
                : null}
            </>
        )
    } else {
        inner = (
            <div>
                Click an album to begin playing
            </div>
        )
    }

    return (
        <div className="mainContainer">
            <div className="userNameLogout">
                <User />
            </div>
            <div>
                <Playlist />
            </div>
            <div>
                {playlists.map(playlist => (
                        <div className="playlistContainer">
                            <button className="playlistButton">
                                <img className="playlistCrateImage" src={crate} alt={crate}></img>
                                <h3>{playlist.name}</h3>
                            </button>
                            <DeletePlaylist playlist={playlist} playlists={playlists}/>
                        </div>
                ))}
            </div>
            <div>
                <UsersList />
            </div>
            {albums.map(album => {
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
            })}
            <div>
                {inner}
            </div>
        </div>
    )
}
export default Main
