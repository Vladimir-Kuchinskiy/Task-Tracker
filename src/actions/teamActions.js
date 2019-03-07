import { mapTeamContent } from '../services/mappers';
import { types } from '../constants';
import { todoApi } from '../apis';

const getTeamStart = () => {
  return { type: types.GET_TEAM_START };
};

const getTeamSuccess = response => {
  return { type: types.GET_TEAM_SUCCESS, payload: mapTeamContent(response.data) };
};

export const getTeam = (id, authToken) => async dispatch => {
  dispatch(getTeamStart());
  todoApi.setJwt(authToken);
  const response = await todoApi.get(`/teams/${id}`);
  dispatch(getTeamSuccess(response));
};

export const searchUsers = value => {
  return { type: types.SEARCH_USERS, payload: value };
};
