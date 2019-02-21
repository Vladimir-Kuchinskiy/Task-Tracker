import { mapBoardContent, mapList, mapCard } from '../services/mappers';
import { parseNumber } from '../services/movesService';
import { types } from '../constants';
import todoApi from '../apis/todoApi';

export const getBoard = id => async dispatch => {
  const response = await todoApi.get(`/boards/${id}`);
  dispatch({ type: types.GET_BOARD, payload: mapBoardContent(response.data) });
};

// List
export const createList = (params, boardId) => async dispatch => {
  const response = await todoApi.post(`/boards/${boardId}/lists`, params);
  dispatch({ type: types.CREATE_LIST, payload: mapList(response.data) });
};

export const updateList = (params, listId) => async dispatch => {
  await todoApi.put(`/lists/${listId}`, params);
  dispatch({ type: types.UPDATE_LIST, payload: { params, listId } });
};

export const deleteList = listId => async dispatch => {
  await todoApi.delete(`/lists/${listId}`);
  dispatch({ type: types.DELETE_LIST, payload: listId });
};

// Card
export const createCard = (params, listId) => async dispatch => {
  const response = await todoApi.post(`/lists/${listId}/cards`, params);
  dispatch({ type: types.CREATE_CARD, payload: mapCard(response.data) });
};

export const updateCard = (params, id) => async dispatch => {
  await todoApi.put(`/cards/${id}`, params);
  dispatch({ type: types.UPDATE_CARD, payload: { params, id } });
};

export const deleteCard = (id, listId) => async dispatch => {
  await todoApi.delete(`/cards/${id}`);
  dispatch({ type: types.DELETE_CARD, payload: { id, listId } });
};

// Moving
export const moveList = args => async dispatch => {
  const { draggableId, destination } = args;
  const listId = parseNumber(draggableId);
  todoApi.post(`/lists/${listId}/move`, {
    destination_position: destination.index
  });
  dispatch({ type: types.MOVE_LIST, payload: args });
};

export const moveCard = args => async dispatch => {
  const { draggableId, destination } = args;
  const cardId = parseNumber(draggableId);
  todoApi.post(`/cards/${cardId}/move`, {
    destination_position: destination.index,
    destination_list_id: destination.droppableId
  });
  dispatch({ type: types.MOVE_CARD, payload: args });
};
