/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {AxiosRequestConfig} from 'axios';

export const http = {
  get: async function get<Response = unknown>(url: string, options: AxiosRequestConfig = {}) {
    const res = await axios.get<Response>(url, options);
    return res.data;
  },
  post: async function post<Request = any, Response = unknown>(url: string, data?: Request) {
    const res = await axios.post<Response>(url, {...data});
    return res.data;
  },
  put: async function put<Request = any, Response = unknown>(url: string, data?: Request) {
    const res = await axios.put<Response>(url, {...data});
    return res.data;
  },
};
