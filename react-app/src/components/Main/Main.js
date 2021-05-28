import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {getAlbumsThunk} from "../../store/album"
import {createLastPlayThunk, editLastPlayThunk, getLastPlayThunk} from "../../store/lastPlay"
import {getPlaysThunk, createPlayThunk, editPlayThunk} from "../../store/play"
import {getPlaylistsThunk} from "../../store/playlist"
import {getPlaylistAlbumsThunk, createPlaylistAlbumThunk, deletePlaylistAlbumThunk} from "../../store/playlistAlbum"
import crate from "./crate.png"
import record from "./flame_record.png"
import UsersList from "../UsersList"
import User from "../User"
import Playlist from "../Playlist/Playlist"
import DeletePlaylist from "../Playlist/DeletePlaylist"
import SearchAlbums from "../SearchAlbums/SearchAlbums"
import {getPlayerAlbum} from "../../store/player"
import TopAlbums from "../TopAlbums/TopAlbums"
import "./main.css"


function Main(props) {
    const dispatch = useDispatch()
    const selectAlbumId = useSelector(state => state.player.albumId)
    const sessionUser = useSelector(state => state.session.user)
    const albums = Object.values(useSelector(state => state.albums))
    const lastPlayed = Object.values(useSelector(state => state.lastPlays))
    const plays = Object.values(useSelector(state => state.plays))
    const playlists = Object.values(useSelector(state => state.playlists))
    const playlistAlbums = Object.values(useSelector(state => state.playlistAlbums))
    let songs = Object.values(useSelector(state => state.songs))
    const IMAGE_FOLDER = process.env.NODE_ENV === 'production' ? '/static' : ''
    const [searchOn, setSearchOn] = useState(false)
    const [playlistAlbumsDisplay, setPlaylistAlbumsDisplay] = useState(false)
    const [playlistName, setPlaylistName] = useState('')
    let inner;

    useEffect(() => {
        dispatch(getAlbumsThunk())
        setSearchOn(false)
        dispatch(getPlaysThunk(sessionUser.id))
        dispatch(getLastPlayThunk())
        dispatch(getPlaylistsThunk(sessionUser.id))
    }, [selectAlbumId])


    let lastPlay;
    if (lastPlayed) {
        lastPlayed.forEach(last => {
            if (last.userId === sessionUser.id) {
                lastPlay = last
            }
        })
    }



    if (selectAlbumId > 0) {

        inner = (
            <div className="currentPlayingAlbum">
                {albums[selectAlbumId - 1] ?
                    <div className="alignCurrentPlaying">
                        <div className="imageAndSongs">
                            <img className="playingAlbumImage" src={`${IMAGE_FOLDER}${albums[selectAlbumId - 1].image}`} alt={albums[selectAlbumId - 1].image}></img>
                            <div className="songListTitles">
                                {songs.length ?
                                    songs.map(song => {
                                        return (
                                            <li >{song.songTitle}</li>
                                        )
                                    })
                                : null}
                            </div>
                        </div>
                        <h2>{albums[selectAlbumId - 1].title}</h2>
                        <h3>{albums[selectAlbumId - 1].artist}</h3>
                    </div>
                : null}
                {playlists.length > 0 ?
                    <form >
                        <select className="playingAlbumAddPlaylist" onChange={e => addToPlaylist(e, e.target.value, albums[selectAlbumId - 1].id)}>
                            <option value="" disabled selected hidden>Add To Playlist</option>
                            {playlists.map(playlist => (
                                <option value={playlist.id}>{playlist.name}</option>
                            ))}
                        </select>
                    </form>
                : null}
            </div>
        )
    } else {
        inner = (<p>Click an album to begin playing</p>)
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

        if (!lastPlay) {
            const payload = {
                userId: sessionUser.id,
                albumId: id
            }
            dispatch(createLastPlayThunk(payload))
        } else if (lastPlay){
            const payload = {
                id: lastPlay.id,
                userId: sessionUser.id,
                albumId: id
            }
            await dispatch(editLastPlayThunk(payload))
            dispatch(getLastPlayThunk())
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
            </div>
            <div className="mainSearchCreatePlaylist">
                <h3>PYR<img className="flameRecord" src={record} alt={record}></img></h3>
                <button className="displaySearchButton" onClick={(e) => displaySearch(e)}><i className="searchIcon" class="fa fa-search"></i>{` Search albums and artists`}</button>

                    <Playlist />

            </div>
            <div className="mainPlayListContainer">
                <div className="mainPlaylistsDisplay">
                    {playlists.reverse().map(playlist => (
                            <div className="playlistContainer">
                                <button className="playlistButton" onClick={e => displayPlaylistAlbums(e, playlist.id, playlist.name)}>
                                    <img className="playlistCrateImage" src={crate} alt={crate}></img>
                                    <h3>{playlist.name}</h3>
                                </button>
                                <DeletePlaylist playlist={playlist} playlists={playlists} setPlaylistAlbumsDisplay={setPlaylistAlbumsDisplay}/>
                            </div>
                    ))}
                </div>
            </div>
            <div className="mainUsersList">
                <UsersList />
            </div>
            <div className="mainInner">
                {searchOn === true ?
                <div className="mainSearchFormContainer">
                    <div className="exitSearchButtonDiv">
                        <button onClick={e => exitSearch(e)}><i class="fa fa-arrow-circle-left"></i></button>
                    </div>
                    <SearchAlbums  setSearchOn={setSearchOn} setPlaylistAlbumsDisplay={setPlaylistAlbumsDisplay}/>
                </div>
                : playlistAlbumsDisplay === true && playlistAlbums.length > 0 ?
                    <div className="playlistAlbumsContainer">
                    <h1>{playlistName}</h1>
                    {playlistAlbumsList.map(album => {
                        return (
                            <div>
                                <button className="playlistAlbumButton" onClick={e => albumSelect(e, album.id)}>
                                    <img className="albumImage" src={`${IMAGE_FOLDER}${album.image}`} alt={`${IMAGE_FOLDER}${album.image}`}></img>
                                    <div className="after"><i class="fa fa-play"></i></div>
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
                <h1 className="myTopAlbums">My Top Albums:</h1>
                <TopAlbums albumSelect={albumSelect}/>
            </div>
        </div>
    )
}
export default Main
