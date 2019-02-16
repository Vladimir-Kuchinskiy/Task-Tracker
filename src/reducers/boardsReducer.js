import mapKeys from 'lodash/mapKeys';
import { types } from '../constants';
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BOARDS:
      return { ...state, ...mapKeys(action.payload, 'id') };
    case types.CREATE_BOARD:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case types.EDIT_BOARD:
      const { id, params } = action.payload;
      return {
        ...state,
        [id]: { ...state[id], ...params }
      };
    default:
      return state;
  }
};
