import { types } from '../../constants';

const initialState = {
  clientToken: null,
  instance: null,
  loading: false,
  subscription: null,
  loadingModal: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SUBSCRIPTION_START:
      return { ...state, loading: true };
    case types.GET_SUBSCRIPTION_SUCCESS:
      return { ...state, subscription: action.payload, loading: false, loadingModal: false };
    case types.GET_CLIENT_TOKEN:
      return { ...state, clientToken: action.payload };
    case types.SET_INSTANCE:
      return { ...state, instance: action.payload };
    case types.BUY_MEMBERSHIP_START:
      return { ...state, loadingModal: true };
    case types.BUY_MEMBERSHIP_LOADING_FINISH:
      return { ...state, loadingModal: false };
    default:
      return state;
  }
};