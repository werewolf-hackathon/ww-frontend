import {
    CHECK_SERVER_START, CHECK_SERVER_ERROR, CHECK_SERVER_SUCCESS
} from '../actions'

const initialState = {
    checkingServer: false,
    serverListening: false,
    message: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHECK_SERVER_START:
            return {
                ...state,
                checkingServer: true,
                message: null,
                error: null
            }
        case CHECK_SERVER_ERROR:
            return {
                ...state,
                checkingServer: false,
                message: null,
                error: action.payload
            }
        case CHECK_SERVER_SUCCESS:
            return {
                ...state,
                checkingServer: false,
                serverListening: true,
                message: null,
                error: null
            }
        default: 
            return state
    }
}

export default reducer