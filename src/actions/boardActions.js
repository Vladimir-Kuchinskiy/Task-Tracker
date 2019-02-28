import { mapBoardContent, mapList, mapCard } from '../services/mappers';
import { parseNumber } from '../services/movesService';
import { types } from '../constants';
import { todoApi } from '../apis';

const getBoardStart = () => {
  return { type: types.GET_BOARD_START };
};

const getBoardSuccess = response => {
  return { type: types.GET_BOARD_SUCCESS, payload: mapBoardContent(response.data) };
};

export const getBoard = (id, authToken) => async dispatch => {
  dispatch(getBoardStart());
  todoApi.setJwt(authToken);
  const response = await todoApi.get(`/boards/${id}`);
  dispatch(getBoardSuccess(response));
};

// List
export const createList = (params, boardId, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  const response = await todoApi.post(`/boards/${boardId}/lists`, params);
  dispatch({ type: types.CREATE_LIST, payload: mapList(response.data) });
};

export const updateList = (params, listId, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  await todoApi.put(`/lists/${listId}`, params);
  dispatch({ type: types.UPDATE_LIST, payload: { params, listId } });
};

export const deleteList = (listId, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  await todoApi.delete(`/lists/${listId}`);
  dispatch({ type: types.DELETE_LIST, payload: listId });
};

// Card
export const createCard = (params, listId, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  const response = await todoApi.post(`/lists/${listId}/cards`, params);
  dispatch({ type: types.CREATE_CARD, payload: mapCard(response.data) });
};

export const updateCard = (params, id, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  await todoApi.put(`/cards/${id}`, params);
  dispatch({ type: types.UPDATE_CARD, payload: { params, id } });
};

export const deleteCard = (id, listId, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  await todoApi.delete(`/cards/${id}`);
  dispatch({ type: types.DELETE_CARD, payload: { id, listId } });
};

// Moving
export const moveList = (args, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  const { draggableId, destination } = args;
  const listId = parseNumber(draggableId);
  todoApi.post(`/lists/${listId}/move`, {
    destination_position: destination.index
  });
  dispatch({ type: types.MOVE_LIST, payload: args });
};

export const moveCard = (args, authToken) => async dispatch => {
  todoApi.setJwt(authToken);
  const { draggableId, destination } = args;
  const cardId = parseNumber(draggableId);
  todoApi.post(`/cards/${cardId}/move`, {
    destination_position: destination.index,
    destination_list_id: destination.droppableId
  });
  dispatch({ type: types.MOVE_CARD, payload: args });
};
