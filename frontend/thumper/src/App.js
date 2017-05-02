import React, { Component } from 'react';
import Stations from './components/Stations';
import AddStations from './components/AddStations';


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

        <Stations stations={this.state.stations} />

        <AddStations />


      </div>
    );
  }
}

export default App;
