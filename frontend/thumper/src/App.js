import React, { Component } from 'react';






import Login from './components/Login';
import AddStations from './components/AddStations';
import Stations from './components/Stations';
 // import StationSongs from './components/StationSongs';
import Header from './components/Header';
import Footer from './components/Footer';
import AddSongs from './components/AddSongs';


// /* React Router Code --> */
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
//
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Profile from './components/Profile';
// import Footer from './components/Footer';


import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stations: [],
      songs: []

  }
}

  componentWillMount(){

    this.setState({
      stations: [
      {
        stationId:456,
        owner: 'Remmington',
        stationName: 'GA WDI-Hot-Tracks',
        dateCreated: 'May 1, 2017',
        songs: [{
            songId: '2343242',
            title: 'Informer',
            artist: 'Snow',
            album: '12 Inches of Snow'
          },
          {
            songId: '0982303',
            title: 'Grown Up',
            artist: 'Danny Brown',
            album: 'Grown up'
          },
          {
            songId: '2098300',
            title: 'Fuck Up Some Commas',
            artist: 'Future',
            album: 'DS2'
         }],
       },
       {
        stationId:345,
        owner: 'Jorge Cano',
        stationName: 'Spring Mix Master 2017',
        dateCreated: 'April 30th, 2017',
        songs: [{
          songId: '4502983',
          title: 'Aeroplane Over The Sea',
          artist: 'Neutral Milk Hotel',
          album: 'In the Aeroplane Over the Sea'
        }]
      },
      {
        stationId:234,
        owner: 'Chris Jauregui',
        stationName: 'Peter is a Platypus',
        dateCreated: 'April 29th, 2017',
        songs: [
          {
            songId: '234234',
            title: 'Daftendirekt',
            artist: 'Daft Punk',
            album: 'Homework'
          }]
        },
      {
        stationId:123,
        owner: 'Peter Weyand',
        stationName: 'Hackers Hot Love Techno Trill',
        dateCreated: 'April 27th, 2017',
        songs: [{
            songId: '2340987',
            title: 'Ambitionz Az a Ridah',
            artist: 'Tupac',
            album: 'All Eyez on Me'
          }]
        }
      ]});
    }


  render() {
    const songs = this.state.songs.map(song => {
      return <p>{song.title}</p>
    })

    return (
      <div className="App">


        <Login />

        <Header />

        <h1>Thumper | Sync Your Squad</h1>
        <AddStations />

        <br />

        <h3>Latest Stations</h3>

        <Stations songs={this.state.songs} stations={this.state.stations} />

        <AddSongs songs={this.state.songs} />

        <Footer />

      </div>
    );
  }


}


export default App;
