import {
  CHECK_SERVER_START,
  CHECK_SERVER_ERROR,
  CHECK_SERVER_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR
} from '../actions';

const initialState = {
  checkingServer: false,
  serverListening: false,
  loggingIn: false,
  loggedIn: false,
  signingUp: false,
  signedUp: false,
  message: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_SERVER_START:
      return {
        ...state,
        checkingServer: true,
        message: null,
        error: null
      };
    case CHECK_SERVER_ERROR:
      return {
        ...state,
        checkingServer: false,
        message: null,
        error: action.payload
      };
    case CHECK_SERVER_SUCCESS:
      return {
        ...state,
        checkingServer: false,
        serverListening: true,
        message: null,
        error: null
      };
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        message: '',
        error: ''
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        message: '',
        error: action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: action.payload.user,
        message: action.payload.message,
        error: ''
      };
    case SIGN_UP_START:
      return {
        ...state,
        signingUp: true,
        message: '',
        error: ''
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        signingUp: false,
        message: '',
        error: action.payload
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        signedUp: true,
        message: '',
        error: ''
      };
    default:
      return state;
  }
};

export default reducer;
