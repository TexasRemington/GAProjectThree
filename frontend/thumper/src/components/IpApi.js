import React, { PropTypes, Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import controllable from 'react-controllables';

import "./IpApi.css"
// import Iframe from 'react-iframe';


const MapMarkerComponent = ({text}) => <div className="componentbox"><p>{text}</p></div>;

// @controllable(['hoverKey', 'clickKey'])
class IpApi extends Component {

// static defaultProps = {
//   center: {lat: 59.95, lng: 30.33},
//   zoom: 11
// };
// {lat: 59.95, lng: 30.33}
constructor(props){
  super(props);
  this.state = {
    ipaddress: '',
    lat: '',
    lon: '',
    response: '',
    zoom: 10,
    //defaultcenter:{lat: 59.95, lng: 30.33},
    center:{lat: 30.2672, lng: -97.7431}
  };
}

// static propTypes = {
//   center: PropTypes.array, // @controllable
//   zoom: PropTypes.number, // @controllable
//   hoverKey: PropTypes.string, // @controllable
//   clickKey: PropTypes.string, // @controllable
//   onCenterChange: PropTypes.func, // @controllable generated fn
//   onZoomChange: PropTypes.func, // @controllable generated fn
//   onHoverKeyChange: PropTypes.func, // @controllable generated fn
//
//   greatPlaces: PropTypes.array
// };

//
// _onBoundsChange = (center, zoom /* , bounds, marginBounds */) => {
//   this.props.onCenterChange(center);
//   this.props.onZoomChange(zoom);
// }
//
// _onChildClick = (key, childProps) => {
//   this.props.onCenterChange([childProps.lat, childProps.lng]);
// }
//
// _onChildMouseEnter = (key /*, childProps */) => {
//   this.props.onHoverKeyChange(key);
// }
//
// _onChildMouseLeave = (/* key, childProps */) => {
//   this.props.onHoverKeyChange(null);
// }
//


componentWillMount(){
  this.ipApi()
}


ipApi(){
  var self = this;
  axios.get('http://ip-api.com/json')
  .then(function (response) {
    // console.log("response from axios App.js", response);
    self.setState({
      ipaddress:response.data.query,
      lat: response.data.lat,
      lon: response.data.lon,
      center: {lat:response.data.lat,
               lng:response.data.lon},
    })
  })
  .catch(function (error) {
    console.error("error from axios App.js", error);
  });
}


render() {

  let mapmarker;
  if(this.props.stations){
    mapmarker = this.props.stations.data.map(station => {
      // console.log("station lat: ", station.lat, " station lon: ", station.lon, " stationName ", station.stationName);
      return (
        <MapMarkerComponent lat={station.lat}
                            lng={station.lon}
                            text={station.stationName} />
      );
    });
  }

    return (
      <div className='googleMap' style={{width: "500px", height: "500px", margin: "0 auto"}}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBKSMaMwm7UTigL5sZGHS2VA0JUfghcSI4'
        }}
        center={this.state.center}
        defaultZoom={this.state.zoom}
        >
        {mapmarker}
        </GoogleMapReact>
      </div>
    );
  }
}

export default IpApi;
// defaultCenter={this.state.center}
// constructor(props){
//   super(props);
//   this.state = {
//     ipaddress: '',
//     lat: '',
//     lon: '',
//     response: '',
//     zoom: 10,
//     center: ''
//   }
// }
//
// componentDidMount(){
//   this.ipApi()
// }
//
// ipApi(){
//   var self = this;
//   axios.get('http://ip-api.com/json')
//   .then(function (response) {
//     console.log("response from axios App.js", response);
//     self.setState({
//       ipaddress:response.data.query,
//       lat: response.data.lat,
//       lon: response.data.lon,
//       center: '{lat:'+response.data.lat+', lng:'+response.data.lon+'}',
//       response: 'https://www.google.com/maps/embed/v1/view?key=AIzaSyCy4-4oafCqyZtp9E9SKq986QStTtHGd6M&center='+response.data.lat+','+response.data.lon+'&zoom=10'
//     })
//   })
//   .catch(function (error) {
//     console.error("error from axios App.js", error);
//   });
// }


// google api key
//  AIzaSyCy4-4oafCqyZtp9E9SKq986QStTtHGd6M

// <Iframe
//   width="600"
//   height="450"
//   frameborder="0" style="border:0"
//   src={this.state.response}/>

//
// <iframe
//   width="600"
//   height="450"
//   frameborder="0" style="border:0"
//   src='https://media.giphy.com/media/l1KVb2dUcmuGG4tby/giphy.gif' />
//
// <iframe
//   width="600"
//   height="450"
//   frameBorder="0"
//   src={this.state.response}/>

// <div className="IpApi">
//   <h1>Here is your location data!</h1>
//   <p>your latitude: {this.state.lat}</p>
//   <p>your longitude: {this.state.lon}</p>
//   <p>your ipaddress: {this.state.ipaddress}</p>
//
//
//
//       </div>

//   render() {
//
//     const AnyReactComponent = ({text}) => <div><p>{text}</p></div>;
//
//     return (
//
//       <div className='googleMap'>
//         <GoogleMapReact
//           apiKey={'AIzaSyCy4-4oafCqyZtp9E9SKq986QStTtHGd6M'}
//           defaultCenter={this.state.center}
//           defaultZoom={this.state.zoom}
//         >
//           <AnyReactComponent
//             lat={this.state.lat}
//             lng={this.state.zoom}
//             text={'Kreyser Avrora'}
//           />
//         </GoogleMapReact>
//       </div>
//
//     );
//   }
// }
