import React, { Component } from 'react';



class StationSongs extends Component {
  render() {
    const songs = this.props.songs.map(song => {
      return (<li key={song.title} song={songs}>
        <strong>{song.title} </strong>
      </li>)
    }
  )

    return (
      <ol>
        {songs}
      </ol>
    );
  }
}

export default StationSongs;
