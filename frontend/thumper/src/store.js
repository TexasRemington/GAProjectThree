import { createStore } from 'redux'
import reducers from './reducer/reducer'
import initialState from './initialState'

const store = createStore(reducers, initialState, window.devToolsExtension && window.devToolsExtension())
export default store
