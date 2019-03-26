import { types } from '../constants';
import { todoApi } from '../apis';
import { mapProfile } from '../services/mappers';

const getProfileStart = () => {
  return { type: types.GET_PROFILE_START };
};

const getProfileSuccess = response => {
  return { type: types.GET_PROFILE_SUCCESS, payload: mapProfile(response.data) };
};

export const getProfile = authToken => async dispatch => {
  dispatch(getProfileStart());
  todoApi.setJwt(authToken);
  const response = await todoApi.get('/profile');
  dispatch(getProfileSuccess(response));
};

export const updateProfile = (params, authToken) => async dispatch => {
  const formData = new FormData();
  if (params.avatar) formData.append('avatar', params.avatar);
  formData.append('first_name', params.first_name);
  formData.append('last_name', params.last_name);
  formData.append('gender', params.gender);
  todoApi.setJwt(authToken);
  const response = await todoApi.put('/profile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  dispatch({
    type: types.UPDATE_PROFILE,
    payload: mapProfile(response.data)
  });
};
