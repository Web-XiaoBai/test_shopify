import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { stringify } from 'qs';

export interface IResponse<T> {
  error: string;
  result: T,
}

export const request = axios.create({
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// 请求拦截器
// request.interceptors.request.use(async (config) => {});

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (err) => err,
);

/* GET请求 */
export const GET = <T>(
  URL: string,
  params?: any,
  config?: AxiosRequestConfig,
): Promise<IResponse<T>> => request.get(params ? `${URL}?${stringify(params)}` : URL, config);
/* POST请求 */
export const POST = <T>(URL: string, params?: any): Promise<IResponse<T>> =>
  request.post(URL, params);