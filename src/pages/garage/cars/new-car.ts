import createCarApi from '../../../commands/api/createCarApi';
import { newCarT } from '../../types/types';
import ColorRandom from './random/colorRandom';
import NameRandom from './random/nameRandom';

const CreateNewCar = (random?: boolean): Promise<void> => {
  const carNameInput: HTMLInputElement = document.querySelector('.garage-page__create__name');
  const carColorInput: HTMLInputElement = document.querySelector('.garage-page__create__color');

  let newCarName: string = carNameInput.value;
  let newCarColor: string = carColorInput.value;

  if (carNameInput.value === '') {
    newCarName = NameRandom();
  }
  if (random === true) {
    newCarColor = ColorRandom();
  }

  const newCar: newCarT = {
    name: newCarName,
    color: newCarColor,
  };

  return createCarApi(newCar).then(() => {
    carNameInput.value = '';
    carColorInput.value = '#000000';
  });
};

export default CreateNewCar;
