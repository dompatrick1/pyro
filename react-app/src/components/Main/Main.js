import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getAlbumsThunk} from "../../store/album"
import {createLastPlayThunk, editLastPlayThunk, getLastPlayThunk} from "../../store/lastPlay"
import {getPlaysThunk, createPlayThunk, editPlayThunk} from "../../store/play"
import {getPlaylistsThunk} from "../../store/playlist"
import {getPlaylistAlbumsThunk, createPlaylistAlbumThunk, deletePlaylistAlbumThunk} from "../../store/playlistAlbum"
import crate from "./crate.png"
import UsersList from "../UsersList"
import User from "../User"
import Playlist from "../Playlist/Playlist"
import DeletePlaylist from "../Playlist/DeletePlaylist"
import SearchAlbums from "../SearchAlbums/SearchAlbums"
import {searchInner} from "../SearchAlbums/SearchAlbums"
// import Inner from "../Inner/Inner"
import {getPlayerAlbum} from "../../store/player"
import "./main.css"


function Main(props) {
    const dispatch = useDispatch()
    const selectAlbumId = useSelector(state => state.player.albumId)
    const sessionUser = useSelector(state => state.session.user)
    const albums = Object.values(useSelector(state => state.albums))
    const lastPlayed = useSelector(state => state.lastPlays.lastPlay)
    const plays = Object.values(useSelector(state => state.plays))
    const playlists = Object.values(useSelector(state => state.playlists))
    const playlistAlbums = Object.values(useSelector(state => state.playlistAlbums))
    const IMAGE_FOLDER = process.env.NODE_ENV === 'production' ? '/static' : ''
    const [searchOn, setSearchOn] = useState(false)
    const [playlistAlbumsDisplay, setPlaylistAlbumsDisplay] = useState(false)
    const [playlistName, setPlaylistName] = useState('')
    let inner;

    useEffect(() => {
        dispatch(getAlbumsThunk())
        setSearchOn(false)
        dispatch(getPlaysThunk(sessionUser.id))
        dispatch(getLastPlayThunk(sessionUser.id))
        dispatch(getPlaylistsThunk(sessionUser.id))
    }, [selectAlbumId])


    if (selectAlbumId > 0) {

        inner = (
            <div className="currentPlayingAlbum">
                {albums[selectAlbumId - 1] ?
                    <div >
                        <img className="playingAlbumImage" src={`${IMAGE_FOLDER}${albums[selectAlbumId - 1].image}`} alt={albums[selectAlbumId - 1].image}></img>
                        <h2>{albums[selectAlbumId - 1].title}</h2>
                        <h3>{albums[selectAlbumId - 1].artist}</h3>
                    </div>
                : null}
            </div>
        )
    } else {
        inner = (<p>Click an album</p>)
    }

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


    const albumSelect = async (e, id) => {
        e.preventDefault()
        dispatch(getPlayerAlbum(id))
        setSearchOn(false)
        setPlaylistAlbumsDisplay(false)

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

    function addToPlaylist(e, playlistId, albumId) {
        e.preventDefault()

        const payload = {
            albumId,
            playlistId
        }
        dispatch(createPlaylistAlbumThunk(payload))
    }

    function displaySearch(e) {
        e.preventDefault()
        setSearchOn(true)
        setPlaylistAlbumsDisplay(false)

    }

    function exitSearch(e) {
        e.preventDefault()
        setSearchOn(false)
    }

    function displayPlaylistAlbums(e, playlistId, name) {
        setPlaylistName(name)
        dispatch(getPlaylistAlbumsThunk(playlistId))
        setPlaylistAlbumsDisplay(true)
        setSearchOn(false)

    }

    const deletePlaylistAlbum = async (e, id) => {
        e.preventDefault()
        let albumId;
        let playlistId;
        playlistAlbums.map(playlistAlbum => {
            if (playlistAlbum.albumId === id) {
                albumId = playlistAlbum.id
                playlistId = playlistAlbum.playlistId
            }
        })
        await dispatch(deletePlaylistAlbumThunk(albumId))
        dispatch(getPlaylistAlbumsThunk(playlistId))
    }

    return (
        <div className="mainContainer">
            <div className="userNameLogout">
                <User />
                <button onClick={(e) => displaySearch(e)}>Search albums and artists</button>
            </div>
            <div className="mainPlayListContainer">
                <div className="mainPlaylistForm">
                    <Playlist />
                </div>
                <div className="mainPlaylistsDisplay">
                    {playlists.map(playlist => (
                            <div className="playlistContainer">
                                <button className="playlistButton" onClick={e => displayPlaylistAlbums(e, playlist.id, playlist.name)}>
                                    <img className="playlistCrateImage" src={crate} alt={crate}></img>
                                    <h3>{playlist.name}</h3>
                                </button>
                                <DeletePlaylist playlist={playlist} playlists={playlists}/>
                            </div>
                    ))}
                </div>
            </div>
            <div className="mainUsersList">
                <UsersList />
            </div>
            <div className="mainInner">
                {searchOn === true ?
                <div>
                    <button onClick={e => exitSearch(e)}>exit search</button>
                    <SearchAlbums selectAlbumId={selectAlbumId} />
                </div>
                : playlistAlbumsDisplay === true && playlistAlbums.length > 0 ?
                    <div className="playlistAlbumsContainer">
                    <h1>{playlistName}</h1>
                    {playlistAlbumsList.map(album => {
                        return (
                            <div>
                                <button className="playlistAlbumButton" onClick={e => albumSelect(e, album.id)}>
                                    <img className="albumImage" src={`${IMAGE_FOLDER}${album.image}`} alt={`${IMAGE_FOLDER}${album.image}`}></img>
                                    <text>{album.title}</text>
                                    <text>{`by ${album.artist}`}</text>
                                </button>
                                <button className="removeFromPlaylist" onClick={e => deletePlaylistAlbum(e, album.id)}>Remove</button>

                            </div>
                        )
                    })}
                    </div>
                : inner}


            </div>
            <div className="mainTopAlbums">
                <p>My Top Albums:</p>
            </div>
        </div>
    )
}
export default Main
