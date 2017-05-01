import { UPDATE_PLAYER_STATE } from './actionTypes'

const updatePlayerState = playerState => {
    return {
        type: UPDATE_PLAYER_STATE,
        playerState
    }
}

export default updatePlayerState
