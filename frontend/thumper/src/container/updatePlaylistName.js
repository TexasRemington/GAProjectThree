import { UPDATE_PLAYLIST_NAME } from './actionTypes'

const updatePlaylistName = currentPlaylist => {
    return {
        type: UPDATE_PLAYLIST_NAME,
        currentPlaylist
    }
}

export default updatePlaylistName
