import startEngineApi from '../../../commands/api/startEngineApi';
import animateCar from './animateCar';
import { CarsInMove } from '../cars/stateCars';
import toggleRaceBtns from './toggleRaceButton';
import toggleStartBtn from './toggleStartButton';
import { ableBtn } from '../../../commands/ableDisableButton';
import { handlerT } from '../../types/types';

const startBtnsHandler: handlerT = (e) => {
  const target = e.target as HTMLElement;
  const stopBtn: HTMLElement = document.querySelector(`.car-${target.id}__engine-buttons__stop`);
  startEngineApi(Number(target.id)).then((res) => {
    const duration = res.distance / res.velocity;
    animateCar(Number(target.id), duration);
    ableBtn(stopBtn);
  });
  CarsInMove.add(target.id);
  toggleRaceBtns();
  toggleStartBtn(Number(target.id));
};

export default startBtnsHandler;
