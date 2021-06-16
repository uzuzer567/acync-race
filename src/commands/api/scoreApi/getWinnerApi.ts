import { winnerT } from '../../../pages/types/types';
import baseUrl from '../baseUrlApi';

const getWinnerApi = async (id: number):Promise<winnerT> => {
  const response: Response = await fetch(`${baseUrl.base}/winners/${id}`, {
    method: 'GET',
  });
  const data: winnerT = await response.json();
  return data;
};

export default getWinnerApi;
