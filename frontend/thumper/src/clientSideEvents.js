// essentials
import store from './store'

// actions
import updateSocketVar from './container/updateSocketVar'
import updatePlayerState from './container/updatePlayerState'
import updateTracksData from './container/updateTracksData'
import updateTrackName from './container/updateTrackName'
import updatePlaylistName from './container/updatePlaylistName'
import updatePlaylists from './container/updatePlaylists'
import updatePlaylerPosition from './container/updatePlayerPosition'
import io from 'socket.io';

const junkPlaylists = ["Music","Videos","Films","Home Videos","TV Programmes","Podcasts","iTunes U","Audiobooks","Books","PDFs","Audiobooks","Recently Added"]

const clientSideEvents = () => {

    const socket = io('http://localhost:5000/playlist/')

    socket.on('connect', () => {

        console.log(`Yuhooo! We're now connected to server`)

        // update socket var in store to make it
        // available for all components
        store.dispatch(updateSocketVar(socket))

        // get playerState
        socket.on('getPlayerState', state => {

            console.log(`Current state: ${state}`)
            // update playerState in store
            store.dispatch(updatePlayerState(state.trim()))
        })

        // get tracks array
        socket.on('getTracksData', data => {

            // update data in store
            store.dispatch(updateTracksData(data))
        })

        // get playlists array
        socket.on('getPlaylists', data => {

            console.log(data)

            // update data in store
            store.dispatch(updatePlaylists(data.filter(p => junkPlaylists.indexOf(p) === -1)))
        })

        // get current track name
        socket.on('getCurrentTrack', name => {

            console.log(`Current track: ${name}`)

            // update data in store
            store.dispatch(updateTrackName(name.trim()))
        })

        // get current playlist name
        socket.on('getCurrentPlaylist', name => {

            console.log(`Current playlist: ${name}`)

            // update data in store
            store.dispatch(updatePlaylistName(name.trim()))
        })

        socket.on('updatePlayerPosition', position => {

            store.dispatch(updatePlaylerPosition(position))
        })

    })

}

export default clientSideEvents
