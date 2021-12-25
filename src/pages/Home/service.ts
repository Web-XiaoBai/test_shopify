import { GET } from '@/utils/request';
import type { IHomeProps } from './index';

/* 请求产品列表数据 */
export const getProducts = () => GET<IHomeProps>('http://localhost:9547/api/product/queryProduct');
