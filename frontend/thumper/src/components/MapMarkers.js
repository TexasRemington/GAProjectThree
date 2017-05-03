import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class MapMarkers extends Component {
  render() {
    return (
                <MapMarkerComponent
                  lat={this.props.station.lat}
                  lng={this.props.station.lon}
                  text={this.props.station.stationName}
                />
    );
  }
}

export default MapMarkers;
