import { combineReducers } from 'redux';

import avatar from './profileAvatarReducer';
import info from './profileInfoReducer';

export default combineReducers({ avatar, info });
