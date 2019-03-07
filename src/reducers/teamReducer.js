import { types } from '../constants';
import { searchUsers } from '../services/searches';

const initialState = {
  team: {},
  boards: {},
  members: {},
  userEmails: [],
  findedUserEmails: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TEAM_START:
      return { ...state, loading: true };
    case types.GET_TEAM_SUCCESS:
      return { ...state, ...action.payload, loading: false };
    case types.CREATE_BOARD_FOR_TEAM:
      return {
        ...state,
        boards: { ...state.boards, [action.payload.id]: action.payload }
      };
    case types.SEARCH_USERS:
      return {
        ...state,
        findedUserEmails: searchUsers(state.userEmails, action.payload)
      };
    case types.AUTH_SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
