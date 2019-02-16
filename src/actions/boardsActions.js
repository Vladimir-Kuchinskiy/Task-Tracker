import { types } from '../constants';
import todoApi from '../apis/todoApi';

export const getBoards = () => async dispatch => {
  const response = await todoApi.get('/boards');
  dispatch({ type: types.GET_BOARDS, payload: response.data });
};

export const createBoard = params => async dispatch => {
  const response = await todoApi.post('/boards', params);
  dispatch({ type: types.CREATE_BOARD, payload: response.data });
};

export const editBoard = (params, id) => async dispatch => {
  await todoApi.put(`/boards/${id}`, params);
  dispatch({ type: types.EDIT_BOARD, payload: { params, id } });
};
