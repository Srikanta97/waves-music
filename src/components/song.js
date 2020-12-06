import React from 'react';

const Song = ({currentSong}) => {
    return (
        <div className="song">
            <img alt={currentSong.name} src={currentSong.cover} ></img>
            <h3>{currentSong.name}</h3>
            <h4>{currentSong.artist}</h4>
         </div>
     )
}
 
export default Song;