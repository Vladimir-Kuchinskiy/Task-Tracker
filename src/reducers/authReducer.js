import { types } from '../constants';
const initialState = { authToken: localStorage.getItem('authToken'), errors: null, loading: false };

const authStart = state => {
  return { ...state, errors: null, loading: true };
};

const authSuccess = (state, auth_token) => {
  return { ...state, authToken: auth_token, errors: null, loading: false };
};

const authFail = (state, errors) => {
  return { ...state, errors: errors, loading: false };
};

const authLogout = state => {
  return { ...state, authToken: null };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_START:
      return authStart(state);
    case types.AUTH_SUCCESS:
      return authSuccess(state, action.payload);
    case types.AUTH_FAIL:
      return authFail(state, action.payload);
    case types.AUTH_SIGN_OUT:
      return authLogout(state);
    default:
      return state;
  }
};
