import axios from 'axios'

import { baseURL } from '~/config';

const service = axios.create({
  baseURL,
  timeout: 60 * 1000,
  withCredentials: true
})

export default service;
