import CreateNewCar from './newCar';
import createGarage from '../createGarage';
import { handlerT } from '../../types/types';

const generateCarsHandler: handlerT = () => {
  const needCars = 100;
  let promise: Promise<void>;
  for (let i = 0; i < needCars; i += 1) {
    promise = CreateNewCar(true);
  }
  promise.then(() => {
    createGarage();
  });
};

export default generateCarsHandler;
