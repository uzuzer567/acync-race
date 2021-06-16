import { startEngineApiDataT } from '../../pages/types/types';
import baseUrl from './baseUrlApi';

const startEngineApi = async (id: number): Promise<startEngineApiDataT> => {
  const response: Response = await fetch(`${baseUrl.base}/engine?id=${id}&status=started`, {
    method: 'GET',
  });
  const data: startEngineApiDataT = await response.json();
  return data;
};

export default startEngineApi;
