import React from "react";
import {useDispatch, useSelector} from "react-redux"
import "./topAlbums.css"

function TopAlbums({albumSelect}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const topPlays = Object.values(useSelector(state => state.plays))
    const albums = Object.values(useSelector(state => state.albums))
    const IMAGE_FOLDER = process.env.NODE_ENV === 'production' ? '/static' : ''


    function compare(a, b) {
        const albumA = a.playCount
        const albumB = b.playCount

        let comparison = 0;
        if (albumA > albumB) {
            comparison = 1
        } else if (albumA < albumB) {
            comparison = -1
        }
        return comparison
    }

    let orderedList = topPlays.sort(compare).reverse()
    let final = []

        for (let i = 0; i < orderedList.length; i ++) {
            let play = orderedList[i]
            for (let i = 0; i < albums.length; i++) {
                let album = albums[i]
                if (album.id === play.albumId) {
                    final.push(album)
                }
            }

        }

    return (
        <div className="topAlbumsContainer">
            {final[0] ?
                <div className="singleTopAlbumContainer">
                    <button onClick={(e) => albumSelect(e, final[0].id)}>
                        <img className="topImage" src={`${IMAGE_FOLDER}${final[0].image}`} alt={`${IMAGE_FOLDER}${final[0].image}`}></img>
                        <div className="after"><i class="fa fa-play"></i></div>
                    </button>
                </div>
            : null}
            {final[1] ?
                <div className="singleTopAlbumContainer">
                    <button onClick={(e) => albumSelect(e, final[1].id)}>
                        <img className="topImage" src={`${IMAGE_FOLDER}${final[1].image}`} alt={`${IMAGE_FOLDER}${final[1].image}`}></img>
                        <div className="after"><i class="fa fa-play"></i></div>
                    </button>
                </div>
            : null}
            {final[2] ?
                <div className="singleTopAlbumContainer">
                    <button onClick={(e) => albumSelect(e, final[2].id)}>
                        <img className="topImage" src={`${IMAGE_FOLDER}${final[2].image}`} alt={`${IMAGE_FOLDER}${final[2].image}`}></img>
                        <div className="after"><i class="fa fa-play"></i></div>
                    </button>
                </div>
            : null}
            {final.length === 0 ?
                <h3>Start Listening to add to your top albums list!</h3>
            : null}
        </div>
    )
}
export default TopAlbums;
