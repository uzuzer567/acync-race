import CreateNewCar from './newCar';
import createGarage from '../createGarage';

const createNewOneCar = (): void => {
  CreateNewCar().then(() => {
    createGarage();
  });
};

export default createNewOneCar;
