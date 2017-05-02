import { TOGGLE_TRACKLIST_WINDOW } from './actionTypes'

const toggleTracklistWindow = value => {
    return {
        type: TOGGLE_TRACKLIST_WINDOW,
        tracklistWindowVisible: value
    }
}

export default toggleTracklistWindow
