// import React, { Component } from 'react';
// import Axios from 'axios';
// import Sounds from 'react-sound';
// import Player from '../components/Player';
//
// class AppContainer extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         track: '',
//
//         playStatus: Sound.status.STOPPED,
//         elapsed: '00:00',
//         total: '00:00',
//         position: 0,
//         playFromPosition: 0,
//         autoCompleteValue: ''
//       };
//     }
//
//     componentDidMount() {
//         this.track();
//     }
//     togglePlay(){
//       if(this.state.playStatus === Sound.status.PLAYING){
//         this.setState({playStatus: Sound.status.PAUSED})
//       } else {
//         this.setState({playStatus: Sound.status.PLAYING})
//       }
//     }
//
//     stop(){
//       this.setState({playStatus: Sound.status.STOPPED});
//    }
//    forward(){
//      this.setState({playFromPosition: this.state.playFromPosition+=1000*10});
//    }
//    backward(){
//     this.setState({playFromPosition: this.state.playFromPosition-=1000*10});
//    }
//    handleSelect(value, item){
//      this.setState({ autoCompleteValue: value, track: item });
//    }
//
//    handleChange(event, value){
//      this.setState({autoCompleteValue: event.target.value});
//       let _this = this;
//
//
//     Axios.get(`http://localhost:5000/playlist`)
//         .then(function (response) {
//             const trackLength = response.data.tracks.length;
//             _this.setState({track: response.data.tracks});
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
//
//       }
//
//     formatMilliseconds(milliseconds) {
//        var hours = Math.floor(milliseconds / 3600000);
//        milliseconds = milliseconds % 3600000;
//        var minutes = Math.floor(milliseconds / 60000);
//        milliseconds = milliseconds % 60000;
//        var seconds = Math.floor(milliseconds / 1000);
//        milliseconds = Math.floor(milliseconds % 1000);
//
//        return (minutes < 10 ? '0' : '') + minutes + ':' +
//           (seconds < 10 ? '0' : '') + seconds;
//     }
//
//     handleSongPlaying(audio){
//        this.setState({  elapsed: this.formatMilliseconds(audio.position),
//                         total: this.formatMilliseconds(audio.duration),
//                         position: audio.position / audio.duration })
//      }
//
//     handleSongFinished () {
//       this.track();
//      }
//
//      track () {
//      let _this = this;
//
//      Axios.get(`http://localhost:5000/playlist/LaNegra.mp3`)
//        .then(function (response) {
//
//          const trackLength = response.data.tracks.length;
//          _this.setState({track: response.data.tracks});
//        })
//        .catch(function (err) {
//
//          console.log(err);
//        });
//     }
//
//     render () {
//         return (
//           <div>
//             <div className='thumper'>
//
//            <Sound
//               url={this.prepareUrl(this.state.track)}
//               playStatus={this.state.playStatus}
//               onPlaying={this.handleSongPlaying.bind(this)}
//               playFromPosition={this.state.playFromPosition}
//               onFinishedPlaying={this.handleSongFinished.bind(this)}/>
//            <Player
//              togglePlay={this.togglePlay.bind(this)}
//              stop={this.stop.bind(this)}
//              playStatus={this.state.playStatus}
//              forward={this.forward.bind(this)}
//              backward={this.backward.bind(this)}
//              random={this.randomTrack.bind(this)}/>
//
//            </div>
//          </div>
//         );
//     }
// }
//
// // Export AppContainer Component
// export default AppContainer
