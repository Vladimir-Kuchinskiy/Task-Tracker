import { types } from '../constants';
import todoApi from '../apis/todoApi';
import { mapBoards, mapBoard } from '../services/mappers';

export const getBoards = () => async dispatch => {
  const response = await todoApi.get('/boards');
  dispatch({ type: types.GET_BOARDS, payload: mapBoards(response.data) });
};

export const createBoard = params => async dispatch => {
  const response = await todoApi.post('/boards', params);
  dispatch({ type: types.CREATE_BOARD, payload: mapBoard(response.data) });
};

export const updateBoard = (params, id) => async dispatch => {
  await todoApi.put(`/boards/${id}`, params);
  dispatch({ type: types.UPDATE_BOARD, payload: { params, id } });
};
