import React,{useState} from 'react';
import Song from './components/song';
import Player from './components/player';
import music from './data';
import './style/App.scss';
import Library from './components/Library';

const App = () => {
  // music() returns an array of objects containing song info
  // songs is the array of objects
  const [songs, setSongs] = useState(music()); 
  const [currentSong, setCurrentSong] = useState(songs[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className='container'>
      <Song currentSong={currentSong}/>
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong}/>
    </div>
  )
}

export default App;
