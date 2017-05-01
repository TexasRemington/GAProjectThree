import { UPDATE_SOCKET_VAR } from './actionTypes'

const updateSocketVar = socket => {
    return {
        type: UPDATE_SOCKET_VAR,
        socket
    }
}

export default updateSocketVar
