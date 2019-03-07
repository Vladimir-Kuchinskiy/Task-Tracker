import axios from 'axios';
import { toast } from 'react-toastify';
import { signOut } from '../actions/authActions';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, error => {
  const isExpectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500 &&
    error.response.status !== 401;
  if (isExpectedError) {
    if (error.response.data.message.includes('expired')) {
      signOut();
      localStorage.setItem('message', 'Your session has been expired');
      window.location = '/auth';
      return Promise.reject(error);
    }
    toast.error(error.response.data.message);
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common['Authorization'] = jwt;
}

const todoApi = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};

export default todoApi;
