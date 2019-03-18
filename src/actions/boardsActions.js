import { types } from '../constants';
import { todoApi } from '../apis';
import { mapBoards, mapBoard } from '../services/mappers';
import { toast } from 'react-toastify';

const getBoardsStart = () => {
  return { type: types.GET_BOARDS_START };
};

const getBoardsSuccess = response => {
  return { type: types.GET_BOARDS_SUCCESS, payload: mapBoards(response.data) };
};

export const getBoards = authToken => async dispatch => {
  dispatch(getBoardsStart());
  todoApi.setJwt(authToken);
  const response = await todoApi.get('/boards');
  dispatch(getBoardsSuccess(response));
};

export const createBoard = (params, authToken, teamId) => async dispatch => {
  todoApi.setJwt(authToken);
  let response = null;
  if (teamId) {
    response = await todoApi.post(`/teams/${teamId}/boards`, params);
    dispatch({ type: types.CREATE_BOARD_FOR_TEAM, payload: mapBoard(response.data) });
  } else {
    response = await todoApi.post('/boards', params);
    dispatch({ type: types.CREATE_BOARD, payload: mapBoard(response.data) });
  }
};

export const updateBoard = (params, id, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  await todoApi.put(`/boards/${id}`, params);
  dispatch({ type: types.UPDATE_BOARD, payload: { id, params } });
};

export const deleteBoard = (id, teamId, authToken) => dispatch => {
  todoApi.setJwt(authToken);
  const path = teamId ? `/teams/${teamId}/boards/${id}` : `/boards/${id}`;
  todoApi
    .delete(path)
    .then(() => {
      toast.success('Board has been successfully deleted!');
      dispatch({ type: types.DELETE_BOARD, payload: id });
    })
    .catch(({ response: { data } }) => {
      toast.error(data.message);
    });
};
