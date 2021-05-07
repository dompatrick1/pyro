import React, { useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import {getAlbumsThunk} from "../../store/album"
import Player from '../Player/Player'


function SearchAlbums() {
    const dispatch = useDispatch()
    const albums = Object.values(useSelector(state => state.albums))

    useEffect(() => {
        dispatch(getAlbumsThunk())
    }, [dispatch])
    console.log(albums)

        return (
            <div>
                {albums.map(album => {
                    return (
                        <div>
                            <img src={album.image} alt={album.image}></img>
                            <h2>{album.title}</h2>
                            <h3>{album.artist}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }



export default SearchAlbums
