import React, {useState, useEffect} from 'react'
import "./player.css"

function Player() {
    let songs = [
        {name: "Night Moves", url:'https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Night-Moves.mp3'},
        {name: "Come To Poppa", url: "https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Come-To-Poppa.mp3"}]

    const [songIndex, setSongIndex] = useState(0)


    const audio = document.getElementById("audio")

    if (audio) {
        audio.addEventListener('ended', function() {
            if (songIndex < songs.length - 1) {
                setSongIndex(songIndex + 1)
                // audio.play()
            } else setSongIndex(0)
        })}



    function playSongs(e) {
        e.preventDefault()
        audio.play()
    }

    function nextSong(e) {
        e.preventDefault()
        if (songIndex < songs.length - 1) {
            setSongIndex(songIndex + 1)
        } else setSongIndex(0)
    }

    function prevSong(e) {
        if (songIndex > 0) {
            setSongIndex(songIndex - 1)
        } else setSongIndex(songs.length - 1)
    }

    useEffect(() => {
        if (audio) audio.play()
    }, [songIndex])

    return (
        <div>
            <button onClick={e => playSongs(e)}>Play</button>
            <button onClick={e => nextSong(e)}>Next</button>
            <button onClick={e => prevSong(e)}>Previous</button>
            <h1>{songs[songIndex].name}</h1>
                <audio
                    id="audio"
                    // onPlay={e => playSongs(e)}
                    controls
                    src={songs[songIndex].url}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
            {/* </button> */}
        </div>
    )
}

export default Player
