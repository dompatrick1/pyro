import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
// import { useParams } from "react-router-dom";
import Player from '../Player/Player'
import {getAlbumsThunk} from "../../store/album"
import {createLastPlayThunk, editLastPlayThunk, getLastPlayThunk} from "../../store/lastPlay"
import {getPlaysThunk, createPlayThunk, editPlayThunk} from "../../store/play"
import {getPlaylistsThunk, deletePlaylistThunk} from "../../store/playlist"
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

    function albumSelect(e, id) {
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
                return dispatch(editPlayThunk(editPayload))
            } else if (i === plays.length - 1 && play.albumId !== id) {
                dispatch(createPlayThunk(pay))
            } else continue

        }

        if (!lastPlayed) {
            const payload = {
                userId: sessionUser.id,
                albumId: id
            }
            dispatch(createLastPlayThunk(payload))
        } else {
            const payload = {
                id: lastPlayed.id,
                userId: sessionUser.id,
                albumId: id
            }
            dispatch(editLastPlayThunk(payload))
        }
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
                    <button  onClick={e => albumSelect(e, album.id)}>
                        <img className="albumImage" src={`${IMAGE_FOLDER}${album.image}`} alt={`${IMAGE_FOLDER}${album.image}`}></img>
                    </button>
                )
            })}
            <div>
                {inner}
            </div>
        </div>
    )
}
export default Main
