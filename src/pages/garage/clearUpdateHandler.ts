import { handlerT } from '../types/types';

const clearUpdateBtnHandler:handlerT = () => {
  const garageUpdateInput: HTMLInputElement = document.querySelector('.garage-page__update__name');
  const garageUpdateColorInput: HTMLInputElement = document.querySelector('.garage-page__update__color');

  garageUpdateInput.value = '';
  garageUpdateColorInput.value = '#000000';
};

export default clearUpdateBtnHandler;
