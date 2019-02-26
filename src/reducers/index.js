import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import board from './boardReducer';
import boards from './boardsReducer';
import auth from './authReducer';

export default combineReducers({ boards, board, auth, form: formReducer });
