import { toast } from 'react-toastify';

import { types, messages } from '../constants';
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
  Object.keys(params).map(key => formData.append(key, params[key]));
  todoApi.setJwt(authToken);
  const response = await todoApi.put('/profile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  toast.success(messages.profileUpdated);
  dispatch({
    type: types.UPDATE_PROFILE,
    payload: mapProfile(response.data)
  });
};

export const changeAvatar = avatar => {
  return { type: types.CHANGE_AVATAR, payload: { avatar } };
};

export const changeImageFile = imageFile => {
  return { type: types.CHANGE_IMAGE_FILE, payload: imageFile };
};

export const changeCropAndPixelCrop = (crop, pixelCrop) => {
  return { type: types.CHANGE_CROP_AND_PIXEL_CROP, payload: { crop, pixelCrop } };
};

export const changeImage = image => {
  return { type: types.CHANGE_IMAGE, payload: image };
};
