import React, {useState, useEffect} from 'react'
import "./player.css"

function Player() {
    let songs = [
        {name: "", url: "/Needle.mp3"},
        {name: "Rock-n-Roll Never Forgets", url: "https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Rock-n-Roll-Never-Forgets.mp3"},
        {name: "Night Moves", url:'https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Night-Moves.mp3'},
        {name: "The Fire Down Below", url: "https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-The-Fire-Down-Below.mp3"},
        {name: "Sunburst", url: "https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Sunburst.mp3"},
        {name: "Sunspot Baby", url: "https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Sunspot-Baby.mp3"},
        {name: "Main Street", url: "https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Main-Street.mp3"},
        {name: "Come To Poppa", url: "https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Come-To-Poppa.mp3"},
        {name: "Ship of Fools", url: "https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Ship-Of-Fools.mp3"},
        {name: "Mary Lou", url: "https://pyro-songs.s3.us-east-2.amazonaws.com/Bob-Seger-Mary-Lou.mp3"}
        ]

    const [songIndex, setSongIndex] = useState(0)
    const [playing, setPlaying] = useState(true)


    const audio = document.getElementById("audio")

    if (audio) {
        audio.addEventListener('ended', function() {
            if (songIndex < songs.length - 1) {
                setSongIndex(songIndex + 1)
            } else setSongIndex(0)
        })}

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
            {playing === true ?
                <button onClick={e => playSongs(e)}>Play</button>
            : <button onClick={e => playSongs(e)}>Pause</button>}
            <button onClick={e => nextSong(e)}>Next</button>
            <button onClick={e => prevSong(e)}>Previous</button>
            <h1>{songs[songIndex].name}</h1>
                {songIndex === 0 ?
                    <audio id="audio" src="/Needle.mp3"></audio>
                :
                <audio
                    id="audio"
                    controls
                    src={songs[songIndex].url}>
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
                }
        </div>
    )
}

export default Player
