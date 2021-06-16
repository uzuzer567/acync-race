import driveModeApi from '../../../commands/api/driveModeApi';
import { CarsInMove } from '../cars/stateCars';
import toggleRaceBtns from './toggleRaceButton';
import RaceState, { FinishedSet } from './raceState';
import stopBtnHandler from './stopButton';
import Finished from './finished';
import { RaceStateKeyT } from '../../types/types';

const animateCar = (id: number, duration: number): void => {
  const car: HTMLElement = document.querySelector(`.car-${id}__car-image`);
  const stopBtn: HTMLElement = document.querySelector(`.car-${id}__engine-buttons__stop`);
  const RaceStateI = (Number(id) as unknown) as RaceStateKeyT;
  RaceState[RaceStateI] = {
    id,
    driveStatus: 0,
    isCarStoped: false,
    duration,
  };
  FinishedSet.clear();
  const start = performance.now();
  driveModeApi(Number(id), 'drive').then((res: Response) => { RaceState[RaceStateI].driveStatus = res.status; });
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    const progress = timeFraction;
    car.style.left = `${progress * 93}%`;
    car.style.transform = 'matrix(0.98,-0.17,0.17,0.98,0,0)';
    if (RaceState[RaceStateI].driveStatus !== 500 && RaceState[RaceStateI].isCarStoped !== true) {
      if (timeFraction < 1) { requestAnimationFrame(animate); }
    } else if (RaceState[RaceStateI].driveStatus === 500) {
      car.style.transform = 'matrix(0.98,0.17,-0.17,0.98,0,0)';
      CarsInMove.delete(id);
    }
    if (RaceState[RaceStateI].isCarStoped === true) {
      CarsInMove.delete(Number(id));
      RaceState[RaceStateI].isCarStoped = false;
    }
    if (timeFraction === 1) { Finished(car, Number(id)); }
    toggleRaceBtns();
  });
  stopBtn.addEventListener('click', stopBtnHandler);
};
export default animateCar;
