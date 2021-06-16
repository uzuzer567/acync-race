import { disableBtn } from '../../../commands/ableDisableButton';
import { driveModeController } from '../../../commands/api/driveModeApi';
import stopEngineApi from '../../../commands/api/stopEngineApi';
import { handlerT, RaceStateKeyT } from '../../types/types';
import { CarsInMove } from '../cars/stateCars';
import RaceState from './raceState';
import toggleRaceBtns from './toggleRaceButton';
import toggleStartBtn from './toggleStartButton';

const stopBtnHandler: handlerT = (e) => {
  const target = e.target as HTMLElement;
  const stopBtn: HTMLElement = document.querySelector(`.car-${target.id}__engine-buttons__stop`);
  const car: HTMLElement = document.querySelector(`.car-${target.id}__car-image`);

  stopEngineApi(Number(target.id)).then((res) => {
    if (res.status === 200) {
      const RaceStateI = (Number(target.id) as unknown) as RaceStateKeyT;
      RaceState[RaceStateI].isCarStoped = true;
      setTimeout(() => { car.style.transform = 'matrix(1.00,0.00,0.00,1.00,0,0)'; }, 100);
      setTimeout(() => { car.style.left = '0'; }, 400);
      driveModeController[Number(target.id)].abort();
      CarsInMove.delete(target.id);
      toggleStartBtn(Number(target.id));
      toggleRaceBtns();
      disableBtn(stopBtn);
    }
  });
};

export default stopBtnHandler;
