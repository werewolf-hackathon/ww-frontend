import axios from 'axios';

export const CHECK_SERVER_START = 'CHECK_SERVER_START';
export const CHECK_SERVER_ERROR = 'CHECK_SERVER_ERROR';
export const CHECK_SERVER_SUCCESS = 'CHECK_SERVER_SUCCESS';

export const checkServer = () => dispatch => {
  dispatch({type: CHECK_SERVER_START});

  return axios
    .get('https://ww-backend.herokuapp.com/')
    .then(res => {
      console.log(res);
      dispatch({
        type: CHECK_SERVER_SUCCESS
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: CHECK_SERVER_ERROR,
        payload: 'Server Error'
      });
    });
};

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = creds => dispatch => {
  dispatch({type: LOGIN_START});

  axios
    .post('https://ww-backend.herokuapp.com/', creds)
    .then(res => {
      localStorage.setItem('token', res.data.user.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          message: res.data.message,
          user: {
            ...res.data.user
          }
        }
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_ERROR,
        payload: `${err.response.data.message}`
      });
    });
};

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

export const signUp = creds => dispatch => {
  dispatch({type: SIGN_UP_START});

  return axios
    .post('https://empathy-builder.herokuapp.com/api/auth/register', creds)
    .then(res => {
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.data.payload
      });
    })
    .catch(err => {
      dispatch({
        type: SIGN_UP_ERROR,
        payload: 'Error signing up'
      });
    });
};
