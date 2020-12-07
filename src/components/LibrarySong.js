import React from 'react';

const LibrarySong = ({ song,setCurrentSong,songs }) => {
    const songSelectHandler = () => [

    ]
    return (
        <div
           onClick={songSelectHandler} className="library-song">
            <img alt={song.name} src={song.cover} ></img>
            <h3 style={{paddingLeft:"1rem",fontSize:"1rem"}}>{song.name}</h3>
         </div>
     )
}
 
export default LibrarySong;