import React, { Component } from 'react';
import ListStations from './ListStations';

class Stations extends Component {
  render() {
    let listStations;
    if(this.props.stations){
      listStations = this.props.stations.map(station => {
        console.log(station);
        return (
          <ListStations key={station.owner} station={station} />
        );
      });
    }
    return (
      <div className="Stations">
        {listStations}
      </div>
    );
  }
}

export default Stations;
