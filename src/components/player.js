import React,{useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    // to display currentTime and duration while song plays
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    });
    // To refer to audio tag in playHandler()
    const audioRef = useRef(null);

    // Pause/Play button onClick event handler
    const playHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }
    // Current time and duration
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const totalDuration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime: current, duration: totalDuration });
    }
    // To drag slider
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    }
    // Time format
    const getTime = (time) => {
        return (Math.floor(time / 60) + ":" + ( "0" + Math.floor(time % 60)).slice(-2));
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                    type="range"
                    min={0}
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon icon={faAngleLeft} size="2x" className="skip-back"/>
                <FontAwesomeIcon onClick={playHandler} icon={isPlaying ?  faPause  :  faPlay } size="2x" className="play" />
                <FontAwesomeIcon icon={faAngleRight} size="2x" className="skip-forward"/>
            </div>
            <audio
                onTimeUpdate={timeUpdateHandler}
                ref={audioRef} src={currentSong.audio}
                onLoadedMetadata={timeUpdateHandler}>
                
            </audio>
        </div>
    )
}

export default Player;