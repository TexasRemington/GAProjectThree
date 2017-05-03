// essentials
import React from 'react'
import song from '../MediaPlayer/bottle.mp3';
import songs from '../MediaPlayer/SongBalancer';

console.log('songs is: ', songs)

// components
// import Controls from './Controls/Controls'
// import Display from './Display/Display'
// import Tracklist from './Tracklist/Tracklist'
// import Playlist from './Playlist/Playlist'
// import Overlay from './Overlay'

const Player = () => (
    <div className="player" >
    <audio controls="true" src={songs.station1['bottle']}></audio>
    </div>
)

export default Player
// <Overlay />
// <Display />
// <Controls />
// <Tracklist />
// <Playlist />
// ../../../../backend/playlist/LaNegra.mp3
