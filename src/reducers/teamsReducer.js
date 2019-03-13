import { types } from '../constants';
const initialState = { teams: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TEAMS:
      return { ...state, teams: action.payload };
    case types.CREATE_TEAM:
      return {
        ...state,
        teams: { ...state.teams, [action.payload.id]: action.payload }
      };
    case types.UPDATE_TEAM:
      const { id, params } = action.payload;
      return {
        ...state,
        teams: { ...state.teams, [id]: { ...state.teams[id], ...params } }
      };
    case types.MAKE_INVITATION_RESPONSE:
      if (action.payload.desigion)
        return {
          ...state,
          teams: { ...state.teams, [action.payload.team.id]: action.payload.team }
        };
      return state;
    case types.AUTH_SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
