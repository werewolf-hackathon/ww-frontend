import axios from 'axios'

export const CHECK_SERVER_START = 'CHECK_SERVER_START'
export const CHECK_SERVER_ERROR = 'CHECK_SERVER_ERROR'
export const CHECK_SERVER_SUCCESS = 'CHECK_SERVER_SUCCESS'

export const checkServer = () => dispatch => {
    dispatch({ type: CHECK_SERVER_START })

    return axios
            .get('https://ww-backend.herokuapp.com/')
            .then(res => {
                console.log(res)
                dispatch({
                    type: CHECK_SERVER_SUCCESS
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: CHECK_SERVER_ERROR,
                    payload: "Server Error"
                })
            })
}