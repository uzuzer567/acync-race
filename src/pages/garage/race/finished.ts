import { CarsInMove } from '../cars/stateCars';
import RaceState, { FinishedSet, newWinner } from './raceState';
import countScore from '../score/countScore';
import showTheWinner from './showWinner';
import { RaceStateKeyT } from '../../types/types';

const Finished = (propCar: HTMLElement, id: number): void => {
  const car = propCar;
  CarsInMove.delete(Number(id));
  car.style.transform = 'matrix(1.00,0.00,0.00,1.00,0,0)';
  if (FinishedSet.size === 0) {
    FinishedSet.add(id);
    newWinner.id = Number(id);
    const RaceStateI = (Number(id) as unknown) as RaceStateKeyT;
    const durationInSec = (RaceState[(RaceStateI)].duration / 1000);
    newWinner.time = Number(durationInSec.toString().split('').splice(0, 4).join(''));
    showTheWinner(newWinner.id, newWinner.time);
    countScore();
  } else {
    FinishedSet.add(id);
  }
};

export default Finished;
