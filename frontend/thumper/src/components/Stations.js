import React, { Component } from 'react';
import ListSongs from './ListSongs';

class Stations extends Component {
  render() {
    let listSongs;
    if(this.props.stations){
      listSongs = this.props.stations.map(station => {
        // console.log(station);
        return (
          <ListSongs key={station.owner} station={station} />
        );
      });
    }
    return (
      <div className="Stations">
        {listSongs}
      </div>
    );
  }
}

export default Stations;
