import { UPDATE_TRACKS_DATA } from './actionTypes'

const updateTracksData = tracksData => {
    return {
        type: UPDATE_TRACKS_DATA,
        tracksData
    }
}

export default updateTracksData
