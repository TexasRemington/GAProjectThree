
import React from 'react';
import { render } from 'react-dom';
import Player from './components/Player';

import store from './store'
import { Provider } from 'react-redux'
import clientSideEvents from './clientSideEvents'

import React, { Component } from 'react';
import Thumps from './components/Thumps';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      thumps: [
        {
          artist: 'Mac DeMarco',
          title: 'Blue Boy',
          genre: 'Indie Pop'
        },
        {
          artist: 'Action Bronson',
          title: 'Actin Crazy',
          genre: 'Rap'
        },
        {
          artist: 'Remmington',
          title: 'Peter is a Platypus',
          genre: 'Classical'
        }
      ]
    }
  }

  const wrapper = document.querySelector('.page-wrapper')

  render() {
    return (
      <div className="App">
        Thumper App | Sync Your Squads Music!

        <Thumps thumps={this.state.thumps} />
      {/*  -playlist- ?
        -station- ?*/}
        <Provider store={store}>
            <Player />
        </Provider>,
        wrapper
      </div>
    );
  }
}


clientSideEvents()
