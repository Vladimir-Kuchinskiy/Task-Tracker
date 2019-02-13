import mapKeys from 'lodash/mapKeys';
import { types } from '../constants';
const initialState = { allBoards: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOARDS:
      return { ...state, allBoards: { ...mapKeys(action.payload, 'board.id') } };
    case types.CREATE_BOARD:
      return {
        ...state,
        allBoards: { ...state.allBoards, [action.payload.board.id]: action.payload }
      };
    case types.EDIT_BOARD:
      return {
        ...state,
        allBoards: { ...state.allBoards, [action.payload.board.id]: action.payload }
      };
    default:
      return state;
  }
};
