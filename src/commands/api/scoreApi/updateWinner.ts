import { winnerT } from '../../../pages/types/types';
import baseUrl from '../baseUrlApi';

const updateWinnerApi = async (id: number, wins: number, time: number): Promise<winnerT> => {
  const newWinner = {
    id,
    wins,
    time,
  };
  const response: Response = await fetch(`${baseUrl.base}/winners/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newWinner),
  });
  const data: winnerT = await response.json();
  return data;
};

export default updateWinnerApi;
