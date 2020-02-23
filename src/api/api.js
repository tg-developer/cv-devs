import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-dev-cv.herokuapp.com/dev',
});

export default api;
