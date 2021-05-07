import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import Player from '../Player/Player'
import {getAlbumsThunk} from "../../store/album"
import SearchAlbums from '../SearchAlbums/SearchAlbums'

function Main() {
    const dispatch = useDispatch()
    const albums = Object.values(useSelector(state => state.albums))
    const [selectAlbumId, setSelectAlbumId] = useState(0)

    useEffect(() => {
        dispatch(getAlbumsThunk())
    }, [dispatch, selectAlbumId])


    function albumSelect(e, id) {
        e.preventDefault()
        setSelectAlbumId(id)

    }

    let inner;

    if (selectAlbumId > 0) {
        inner = (
            <>
                {albums[selectAlbumId - 1] ?
                    <div>
                        <img src={albums[selectAlbumId - 1].image} alt={albums[selectAlbumId - 1].image}></img>
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
            {albums[0] ?
                <button onClick={e => albumSelect(e, albums[0].id)}>
                    <img src={albums[0].image} alt={albums[0].image}></img>
                </button>
            : null}
            <div>
                {inner}
            </div>
            <div>
                <Player selectAlbumId={selectAlbumId}/>
            </div>
        </div>
    )
}
export default Main
