import garageUpdateBtnHandler from './updateGarage';
import { selectedCar } from './stateCars';
import { carT, DbCarsArrT, handlerT } from '../../types/types';
import getAllCarsApi from '../../../commands/api/getAllCarsApi';

const selectCarBtnsHandler: handlerT = (e) => {
  getAllCarsApi().then((DbcarsArr: DbCarsArrT) => {
    const updateNameInput: HTMLInputElement = document.querySelector('.garage-page__update__name');
    const updateColorInput: HTMLInputElement = document.querySelector('.garage-page__update__color');
    const garageUpdateBtn: HTMLElement = document.querySelector('.garage-page__update__btn');
    const target = e.target as HTMLElement;

    DbcarsArr.forEach((DbCar: carT) => {
      if (DbCar.id === Number(target.id)) {
        selectedCar.id = Number(target.id);
        updateNameInput.value = DbCar.name;
        updateColorInput.value = DbCar.color;
      }
    });

    selectedCar.name = updateNameInput.value;
    selectedCar.color = updateColorInput.value;

    const nameChangeHandler: handlerT = (ev) => {
      selectedCar.name = (ev.target as HTMLInputElement).value;
    };
    const colorChangeHandler: handlerT = (ev) => {
      selectedCar.color = (ev.target as HTMLInputElement).value;
    };

    updateNameInput.addEventListener('change', nameChangeHandler);
    updateColorInput.addEventListener('change', colorChangeHandler);
    garageUpdateBtn.addEventListener('click', garageUpdateBtnHandler);
  });
};

export default selectCarBtnsHandler;
