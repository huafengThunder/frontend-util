/* eslint-disable prettier/prettier */
import axios from 'axios';
const requests = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 100000, // request timeout
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  // },
  // transformRequest: [
  //   function () {
  //     return qs.stringify(data);
  //   },
  // ],
});

// request interceptor
requests.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

// response interceptor
requests.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.log('err' + error); // for debug
    return Promise.reject(error);
  },
);

export default requests;
