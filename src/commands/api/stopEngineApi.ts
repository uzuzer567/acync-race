import baseUrl from './baseUrlApi';

const stopEngineApi = async (id: number): Promise<Response> => {
  const response: Response = await fetch(`${baseUrl.base}/engine?id=${id}&status=stopped`, {
    method: 'GET',
  });
  return response;
};

export default stopEngineApi;
