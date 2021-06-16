import { carT, newCarT } from '../../pages/types/types';
import baseUrl from './baseUrlApi';

const updateCarApi = async (car: carT): Promise<Response> => {
  const newCar: newCarT = {
    name: car.name,
    color: car.color,
  };
  const response: Response = await fetch(`${baseUrl.base}/garage/${car.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCar),
  });
  return response;
};

export default updateCarApi;
