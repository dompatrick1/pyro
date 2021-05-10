import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import Player from '../Player/Player'
import {getAlbumsThunk} from "../../store/album"
import {createLastPlayThunk, editLastPlayThunk, getLastPlayThunk} from "../../store/lastPlay"
import SearchAlbums from '../SearchAlbums/SearchAlbums'
import User from "../User"
import "./main.css"

function Main() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const lastPlayed = useSelector(state => state.lastPlays.lastPlay)
    const albums = Object.values(useSelector(state => state.albums))
    const [selectAlbumId, setSelectAlbumId] = useState(0)


    useEffect(() => {
        dispatch(getAlbumsThunk())
        dispatch(getLastPlayThunk(sessionUser.id))
    }, [dispatch, selectAlbumId])


    function albumSelect(e, id) {
        e.preventDefault()
        setSelectAlbumId(id)

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

    let inner;

    if (selectAlbumId > 0) {
        inner = (
            <>
                {albums[selectAlbumId - 1] ?
                    <div>
                        <img className="playingAlbumImage" src={albums[selectAlbumId - 1].image} alt={albums[selectAlbumId - 1].image}></img>
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
        <div>
            <div>
                <User />
            </div>
            {albums.map(album => {
                return (
                    <button  onClick={e => albumSelect(e, album.id)}>
                        <img className="albumImage" src={album.image} alt={album.image}></img>
                    </button>
                )
            })}
            <div>
                {inner}
            </div>
            <div>
                <Player selectAlbumId={selectAlbumId} songIndex={0}/>
            </div>
        </div>
    )
}
export default Main
