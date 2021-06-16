import updateCarApi from '../../../commands/api/updateCarApi';
import { selectedCar } from './stateCars';
import createGarage from '../createGarage';
import { handlerT } from '../../types/types';

const garageUpdateBtnHandler:handlerT = () => {
  const updateNameInput: HTMLInputElement = document.querySelector('.garage-page__update__name');
  const updateColorInput: HTMLInputElement = document.querySelector('.garage-page__update__color');

  updateCarApi(selectedCar).then(() => {
    createGarage();
    updateNameInput.value = '';
    updateColorInput.value = '#000';
  });
};

export default garageUpdateBtnHandler;
