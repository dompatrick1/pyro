
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getAlbumSongsThunk} from "../../store/song"
import "./player.css"
import needleSound from "./Needle.mp3"

function Player() {
    const dispatch = useDispatch()
    let songs = Object.values(useSelector(state => state.songs))
    const selectAlbumId = useSelector(state => state.player.albumId)

    const [songIndex, setSongIndex] = useState(0)
    const [playing, setPlaying] = useState(true)
    const [needle, setNeedle] = useState(false)

    const audio = document.getElementById("audio")
    const audio1 = document.getElementById("audio1")

    // if albumId changes, start at first song and make needle play
    useEffect(() => {
        const newAlbums = async () => {
            if (selectAlbumId) {
                await dispatch(getAlbumSongsThunk(selectAlbumId))
                setSongIndex(0)
                setNeedle(false)
                setPlaying(false)
                if (audio) audio.play()
            }
        }
        newAlbums()
    }, [selectAlbumId, audio])


    // if songIndex or props changes, play song and change play button to pause
    useEffect(() => {
        if (audio) {
            setPlaying(false)
            audio.play()
        }
    }, [songIndex])


    if (audio1 && songIndex === 0 && needle === false) {
        audio1.play()
        setNeedle(true)
    }


    // If song ends, go to next song
    if (audio) {
        audio.addEventListener('ended', function() {
            if (songIndex < songs.length - 1) {
                setSongIndex(songIndex + 1)
            } else setSongIndex(0)
        })}

    // play and pause button
    function playSongs(e) {
        e.preventDefault()

        if (playing === true) {
            setPlaying(false)
            audio.play()
        } else {
            setPlaying(true)
            audio.pause()
        }
    }
    // next
    function nextSong(e) {
        e.preventDefault()
        if (songIndex < songs.length - 1) {
            setSongIndex(songIndex + 1)
        } else setSongIndex(0)
    }
    //previous
    function prevSong(e) {
        e.preventDefault()
        if (songIndex > 0) {
            setSongIndex(songIndex - 1)
        } else setSongIndex(songs.length - 1)
    }


    return (
        <div className="playContainer">
            {songs.length ?
            <div>
                <div className="playControls">
                    <button className="forwardBackward" onClick={e => prevSong(e)}><i class="fa fa-backward"></i></button>
                    {playing === true ?
                        <button className="playPause" onClick={e => playSongs(e)}><i class="fa fa-play-circle-o"></i></button>
                    : <button className="playPause" onClick={e => playSongs(e)}><i class="fa fa-pause-circle"></i></button>}
                    <button className="forwardBackward" onClick={e => nextSong(e)}><i class="fa fa-forward"></i></button>
                </div>
                    {songs[songIndex] ?
                        <h4 className="playingSongName">{songs[songIndex].songTitle}</h4>
                    : null}
            </div>
            :null}
                {songs.length ?
                <div className="audioContainer">
                    <audio id="audio1" src={needleSound}></audio>

                    <audio
                        id="audio"
                        controls
                        controlsList="nodownload"
                        src={songs[songIndex].song}>
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </div>
                : <audio controls id="audio"></audio>}
        </div>
    )
}

export default Player
