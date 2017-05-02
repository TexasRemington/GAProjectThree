import React, { Component } from 'react';


class ListStations extends Component {
  render() {
    return (
      <li className="Stations">
        <strong>{this.props.station.owner}</strong> - {this.props.station.stationName} - {this.props.station.dateCreated}
      </li>
    );
  }
}

export default ListStations;
