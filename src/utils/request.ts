import axios from 'axios';
import proxy from '../configs/host';

const env = import.meta.env.MODE || 'development';
const API_HOST = proxy[env].API;

const CODE = {
  LOGIN_TIMEOUT: 1000,
  REQUEST_SUCCESS: 0,
  REQUEST_FORBID: 1001,
};

export const instance = axios.create({
  baseURL: API_HOST,
  timeout: 5000,
  withCredentials: true,
});

// eslint-disable-next-line
// @ts-ignore
// axios的retry ts类型有问题
instance.interceptors.retry = 3;

instance.interceptors.request.use((config) => config);

instance.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (response) => {
    if (response.status === 200) {
      const { data } = response;
      if (data.code === CODE.REQUEST_SUCCESS) {
        return data;
      }
      return Promise.reject(data);
    }
  },
  (err) => {
    const { config } = err;

    if (!config || !config.retry) return Promise.reject(err);

    config.retryCount = config.retryCount || 0;

    if (config.retryCount >= config.retry) {
      return Promise.reject(err);
    }

    config.retryCount += 1;

    const backoff = new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
      }, config.retryDelay || 1);
    });

    return backoff.then(() => instance(config));
  },
);

export default instance;
