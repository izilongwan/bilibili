import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:5011/api'
  : 'http://bili.hlhs.store/api';

const service = axios.create({
  baseURL,
  timeout: 60 * 1000,
  withCredentials: true
})

export default service;
