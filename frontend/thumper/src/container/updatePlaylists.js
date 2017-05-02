import { UPDATE_PLAYLISTS } from './actionTypes'

const updatePlaylists = playlists => {
    return {
        type: UPDATE_PLAYLISTS,
        playlists
    }
}

export default updatePlaylists
