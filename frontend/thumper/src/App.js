import React, { Component } from 'react';
import Stations from './components/Stations';
import Myplayer from './MediaPlayer/Myplayer.js';
// import Sound from './MediaPlayer/Sound.js';
import MediaPlayer2 from './MediaPlayer/MediaPlayer2.js';

// import MediaPlayer from './MediaPlayer/MediaPlayer';

// /* React Router Code --> */
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
//s
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Profile from './components/Profile';
// import Footer from './components/Footer';


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      stations: []
    }
  }

  componentWillMount(){
    this.setState({stations: [
      {
        owner: 'Remmington',
        stationName: 'GA WDI-Hot-Tracks',
        dateCreated: 'May 1, 2017'
      },
      {
        owner: 'Jorge Cano',
        stationName: 'Spring Mix Master 2017',
        dateCreated: 'April 30th, 2017'
      },
      {
        owner: 'Chris Jauregui',
        stationName: 'Peter is a Platypus',
        dateCreated: 'April 29th, 2017'
      },
      {
        owner: 'Peter Weyand',
        stationName: 'Hackers Hot Love Techno Trill',
        dateCreated: 'April 27th, 2017'
      }
    ]});
  }


  render() {
    return (
      <div className="App">
        Thumper App | Sync Your Squads Music!
  <MediaPlayer2 />

        <Myplayer />


      </div>
    );
  }
}





export default App;


        //
        //
        //
        // <Login />
        //
        // <Header />
        //
        // <h1>Thumper | Sync Your Squad</h1>
        // <AddStations />
        //
        // <br />
        //
        // <h3>Latest Stations</h3>
        //
        // <Stations stations={this.state.stations} />
        //
        // <Footer />
