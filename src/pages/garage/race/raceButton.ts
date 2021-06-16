import { CarsStateArr, CarsInMove } from '../cars/stateCars';
import startEngineApi from '../../../commands/api/startEngineApi';
import animateCar from './animateCar';
import toggleRaceBtns from './toggleRaceButton';
import toggleStartBtn from './toggleStartButton';
import { ableBtn } from '../../../commands/ableDisableButton';
import { carT, handlerT, startEngineApiDataT } from '../../types/types';

const startRaceBtnHandler: handlerT = () => {
  CarsStateArr.forEach((car: carT) => {
    const stopBtn: HTMLElement = document.querySelector(`.car-${car.id}__engine-buttons__stop`);
    startEngineApi(car.id).then((res: startEngineApiDataT) => {
      const duration = res.distance / res.velocity;
      animateCar(car.id, duration);
      ableBtn(stopBtn);
    });
    CarsInMove.add(car.id);

    toggleRaceBtns();
    toggleStartBtn(car.id);
  });
};

export default startRaceBtnHandler;
