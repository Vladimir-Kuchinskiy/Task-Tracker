import { types } from '../constants';
import { todoApi } from '../apis';
import { mapTeams, mapTeam } from '../services/mappers';

export const getTeams = authToken => async dispatch => {
  todoApi.setJwt(authToken);
  const response = await todoApi.get('/teams');
  dispatch({ type: types.GET_TEAMS, payload: mapTeams(response.data) });
};

export const createTeam = (params, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  const response = await todoApi.post('/teams', params);
  dispatch({ type: types.CREATE_TEAM, payload: mapTeam(response.data) });
};

export const updateTeam = (params, id, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  await todoApi.put(`/teams/${id}`, params);
  dispatch({ type: types.UPDATE_TEAM, payload: { params, id } });
};
