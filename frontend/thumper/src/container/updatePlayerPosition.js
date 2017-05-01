import { UPDATE_PLAYER_POSITION } from './actionTypes'

const updatePlaylerPosition = playerPosition => {
    return {
        type: UPDATE_PLAYER_POSITION,
        playerPosition
    }
}

export default updatePlaylerPosition
