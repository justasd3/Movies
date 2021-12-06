import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.status >= 400 && error.status.code < 500;

  if (!expectedError) {
    // Raven.captureException('logging error', error);
    toast('unexpected error');
  }

  return Promise.reject(error);
});
function setJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt;
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
