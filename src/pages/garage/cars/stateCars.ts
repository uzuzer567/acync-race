import { carT } from '../../types/types';

export const CarsStateArr: Array<carT> = [];

export const selectedCar: carT = {
  name: '',
  color: '',
  id: null,
};

export const CarsInMove = new Set();
