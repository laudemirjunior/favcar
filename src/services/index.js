import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api-test.bhut.com.br:3000/api',
});

export default api;
