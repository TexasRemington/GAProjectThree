import React, {Component} from 'react';
import Sound from 'react-sound';
import Axios from 'axios';

export default class Playlist extends Component {
  render() {
    axios({
      method:'get',
      url:"http://localhost:5000/playlist/LaNegra.mp3",
      responseType:'stream'
    })
      .then(function(response) {
      response.data.pipe(fs.createWriteStream('LaNegra.mp3'))
    });
    return (
      <Audio source={ LaNegra.mp3 } />
    )
  }
}
