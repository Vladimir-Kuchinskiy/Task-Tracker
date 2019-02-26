import { types } from '../constants';
import todoApi from '../apis/todoApi';
import { mapBoards, mapBoard } from '../services/mappers';

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

export const createBoard = (params, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  const response = await todoApi.post('/boards', params);
  dispatch({ type: types.CREATE_BOARD, payload: mapBoard(response.data) });
};

export const updateBoard = (params, id, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  await todoApi.put(`/boards/${id}`, params);
  dispatch({ type: types.UPDATE_BOARD, payload: { params, id } });
};
