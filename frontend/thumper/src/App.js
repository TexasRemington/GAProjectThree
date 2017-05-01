import React from 'react';
import { render } from 'react-dom';
import Player from './components/Player';

import store from './store'
import { Provider } from 'react-redux'
import clientSideEvents from './clientSideEvents'

// import styles from './../scss/main.scss'

const wrapper = document.querySelector('.page-wrapper')

render(
    <Provider store={store}>
        <Player />
    </Provider>,
    wrapper
)

clientSideEvents()
