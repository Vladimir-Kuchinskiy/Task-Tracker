import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import board from './boardReducer';
import boards from './boardsReducer';

export default combineReducers({ boards, board, form: formReducer });
