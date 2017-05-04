import React, { Component } from 'react';


class ListStations extends Component {

  constructor(props){
    super(props)
    this.state={};
  }

  stationClick(e){
    e.preventDefault();
    var stationowner = this.props.station.owner;
    console.log(this.props.station, " has been clicked");
    this.props.handleStationClicked(this.props.station);
  }


  render() {
    return (
      <li className="Stations" onClick={(e)=>this.stationClick(e)}>
        <strong>{this.props.station.owner}</strong> - {this.props.station.stationName} - {this.props.station.dateCreated}
      </li>
    );
  }
}

export default ListStations;
