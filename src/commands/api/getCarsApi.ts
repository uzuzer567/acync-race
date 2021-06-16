import { carT } from '../../pages/types/types';
import PaginationState from '../paginationState';
import baseUrl from './baseUrlApi';

const getCarsApi = async (page?: number, limit?: number): Promise<Array<carT>> => {
  let pageToGo: number;
  let needLimit: number;
  if (!page) {
    pageToGo = PaginationState.garagePage;
  } else {
    pageToGo = page;
  }
  if (!limit) {
    needLimit = 7;
  } else {
    needLimit = limit;
  }

  const response: Response = await fetch(`${baseUrl.base}/garage?_page=${pageToGo}&_limit=${needLimit}`, {
    method: 'GET',
  });
  const data: Array<carT> = await response.json();
  return data;
};

export default getCarsApi;
