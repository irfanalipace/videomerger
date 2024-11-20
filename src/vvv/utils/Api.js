import axios from "axios";
import { BASE_URL } from './baseURL';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((config) => {
  const accessToken = '1|QuJIj3RIVAXTkoziO6onVkum9NTl9UNQLz4tBCiCaee09d45'
  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

export default api;
