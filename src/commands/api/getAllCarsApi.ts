import { carT } from '../../pages/types/types';
import baseUrl from './baseUrlApi';

const getAllCarsApi = async (): Promise<Array<carT>> => {
  const response: Response = await fetch(`${baseUrl.base}/garage`, {
    method: 'GET',
  });
  const data: Array<carT> = await response.json();
  return data;
};

export default getAllCarsApi;
