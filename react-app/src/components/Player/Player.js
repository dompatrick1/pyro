
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getAlbumSongsThunk} from "../../store/song"
import "./player.css"

function Player(props) {
    const dispatch = useDispatch()
    let songs = Object.values(useSelector(state => state.songs))

    const [songIndex, setSongIndex] = useState(0)
    const [playing, setPlaying] = useState(true)
    const [needle, setNeedle] = useState(false)

    const audio = document.getElementById("audio")
    const audio1 = document.getElementById("audio1")

    const newAlbum = props.selectAlbumId
    // if songIndex or props changes, play song and change play button to pause
    useEffect(() => {
        if (audio) {
            setPlaying(false)
            audio.play()
        }
    }, [songIndex, props, dispatch])

    // if props changes, start at first song and make needle play
    useEffect(() => {
        const newAlbums = async () => {
            await dispatch(getAlbumSongsThunk(props.selectAlbumId))
            setSongIndex(0)
            setNeedle(false)
        }
        newAlbums()
    }, [newAlbum])

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
        <div>
            <button onClick={e => prevSong(e)}>Previous</button>
            {playing === true ?
                <button onClick={e => playSongs(e)}>Play</button>
            : <button onClick={e => playSongs(e)}>Pause</button>}
            <button onClick={e => nextSong(e)}>Next</button>
            {songs[songIndex] ?
                <h1>{songs[songIndex].songTitle}</h1>
            : null}
                {songs.length ?
                <div>
                <audio id="audio1" src="/Needle.mp3"></audio>

                <audio
                    id="audio"
                    controls
                    src={songs[songIndex].song}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
                </div>
                : null}
        </div>
    )
}

export default Player
