import { types } from '../constants';
const initialState = { team: {}, boards: {}, members: {}, userEmails: [], loading: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TEAM_START:
      return { ...state, loading: true };
    case types.GET_TEAM_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    case types.AUTH_SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
