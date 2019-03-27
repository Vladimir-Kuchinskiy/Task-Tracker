import { types } from '../constants';

const initialState = {
  profile: { avatarUrl: '', email: '' },
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PROFILE_START:
      return { ...state, loading: true };
    case types.GET_PROFILE_SUCCESS:
      return { ...state, profile: action.payload, loading: false };
    case types.UPDATE_PROFILE:
      return { ...state, profile: { ...state.profile, ...action.payload } };
    case types.AUTH_SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
