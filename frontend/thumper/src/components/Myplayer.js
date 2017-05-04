import React from 'react'
// import song from '../MediaPlayer/bottle.mp3';
import songs from '../MediaPlayer/SongBalancer';
import ReactPlayer from 'react-player'
// components
// import Controls from './Controls/Controls'
// import Display from './Display/Display'
// import Tracklist from './Tracklist/Tracklist'
// import Playlist from './Playlist/Playlist'
// import Overlay from './Overlay'


console.log('songs is: ', songs)

// var songs = [
//   {
//     url: songs.station1['bottle'],
//     cover: 'none',
//     artist: {
//       name: 'Dirk Dunn',
//       song: 'Bottle Popin\''
//     }
//   }
// ];

// <ReactMusicPlayer songs={songs} autoplay />
//<audio controls="true" src={songs.station1['bottle']}></audio>

const Player = () => (
  <section className="section1">
    <p className="p">Thumper Audio</p>
      <table>
        <tbody>
          <div className="player" >
            <ReactPlayer className="rplayer" controls="true" style="reacts" url={songs.station1['songs']} playing  />
          </div>
        </tbody>
      </table>
   </section>
)

export default Player
// <Overlay />
// <Display />
// <Controls />
// <Tracklist />
// <Playlist />
// ../../../../backend/playlist/LaNegra.mp3
