import { newUserT } from '../../../pages/types/types';
import baseUrl from '../baseUrlApi';

const createWinnerApi = async (id: number, wins: number, time: number):Promise<Response> => {
  const newWinner: newUserT = {
    id,
    wins,
    time,
  };
  const response: Response = await fetch(`${baseUrl.base}/winners`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newWinner),
  });
  return response;
};

export default createWinnerApi;
