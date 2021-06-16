import { ableBtns, disableBtn } from '../../../commands/ableDisableButton';
import { driveModeController } from '../../../commands/api/driveModeApi';
import stopEngineApi from '../../../commands/api/stopEngineApi';
import { CarsStateArr } from '../cars/stateCars';
import toggleStartBtns from './toggleStartButton';
import toggleRaceBtns from './toggleRaceButton';
import { carT, handlerT } from '../../types/types';

const resetBtnHandler:handlerT = () => {
  const raseBtn:HTMLElement = document.querySelector('.garage-page__race-reset-generate__race');
  toggleRaceBtns('resetOn');
  CarsStateArr.forEach((car: carT) => {
    const carEl: HTMLElement = document.querySelector(`.car-${car.id}__car-image`);
    const stopBtn: HTMLElement = document.querySelector(`.car-${car.id}__engine-buttons__stop`);
    stopEngineApi(car.id).then(() => {
      toggleRaceBtns();
      carEl.style.transform = 'matrix(1.00,0.00,0.00,1.00,0,0)';
      carEl.style.left = '0';
      driveModeController[car.id]?.abort();
      toggleStartBtns(car.id);
      disableBtn(stopBtn);
      ableBtns([raseBtn]);
    });
  });
};

export default resetBtnHandler;
