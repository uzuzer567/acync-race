import { getWinnersApiDataT } from '../../../pages/types/types';
import PaginationState from '../../paginationState';
import baseUrl from '../baseUrlApi';

const getWinnersApi = async (
  sort?: string | null,
  order: string | null = 'ASC',
  page?: number | null,
  limit?: number | null,
): Promise<getWinnersApiDataT> => {
  let pageToGo: number;
  let needLimit: number;
  if (!page) {
    pageToGo = PaginationState.winnersPage;
  } else {
    pageToGo = page;
  }
  if (!limit) {
    needLimit = 10;
  } else {
    needLimit = limit;
  }
  if (!sort) {
    const response: Response = await fetch(`${baseUrl.base}/winners?_page=${pageToGo}&_limit=${needLimit}`, {
      method: 'GET',
    });
    const data: getWinnersApiDataT = await response.json();
    return data;
  }
  const response: Response = await fetch(`${baseUrl.base}/winners?_sort=${sort}&_order=${order}&_page=${pageToGo}&_limit=${needLimit}`, {
    method: 'GET',
  });
  const data: getWinnersApiDataT = await response.json();
  return data;
};

export default getWinnersApi;
