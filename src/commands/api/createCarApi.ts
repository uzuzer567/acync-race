import { newCarT } from '../../pages/types/types';
import baseUrl from './baseUrlApi';

const createCarApi = async (car: newCarT): Promise<Response> => {
  const response: Response = await fetch(`${baseUrl.base}/garage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });
  return response;
};

export default createCarApi;
