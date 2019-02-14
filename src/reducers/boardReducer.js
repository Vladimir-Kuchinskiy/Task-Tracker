import omit from 'lodash/omit';
import { types } from '../constants';
import { moveList, moveCardInList, moveCardBetweenLists } from '../services/movesService';

const initialState = { board: {}, lists: {}, cards: {}, listsOrder: [] };

export default (state = initialState, action) => {
  let { lists, listsOrder, cards } = state;
  switch (action.type) {
    case types.GET_BOARD:
      return { ...state, ...action.payload };

    case types.CREATE_LIST:
      const newList = action.payload;
      lists = { ...lists, [newList.id]: newList };
      listsOrder = [...listsOrder, newList.id];
      return {
        ...state,
        lists,
        listsOrder
      };

    case types.EDIT_LIST:
      const {
        listId,
        data: { title }
      } = action.payload;
      const editedList = lists[listId];
      editedList.title = title;
      return {
        ...state,
        lists: { ...lists, [editedList.id]: editedList }
      };

    case types.DELETE_LIST:
      return {
        ...state,
        lists: omit(lists, action.payload),
        listsOrder: listsOrder.filter(id => id !== action.payload)
      };

    case types.CREATE_CARD:
      const newCard = action.payload;
      let list = lists[newCard.listId];
      list = { ...list, cardIds: [...list.cardIds, newCard.id] };
      lists = { ...lists, [list.id]: list };
      cards = { ...cards, [newCard.id]: newCard };
      return {
        ...state,
        lists,
        cards
      };

    case types.EDIT_CARD:
      const editedCard = cards[action.payload.cardId];
      editedCard.content = action.payload.data.content;
      return {
        ...state,
        cards: { ...cards, [editedCard.id]: editedCard }
      };

    case types.DELETE_CARD:
      const cardsList = lists[action.payload.listId];
      cardsList.cardIds = cardsList.cardIds.filter(ci => ci !== action.payload.cardId);
      return {
        ...state,
        list: { ...lists, [cardsList.id]: cardsList },
        cards: omit(cards, action.payload.cardId)
      };

    case types.MOVE_LIST:
      return moveList(state, action.payload);

    case types.MOVE_CARD:
      const { destination, source } = action.payload;
      const start = lists[source.droppableId];
      const finish = lists[destination.droppableId];
      return start.id === finish.id
        ? moveCardInList(state, start, action.payload)
        : moveCardBetweenLists(state, start, finish, action.payload);

    default:
      return state;
  }
};
