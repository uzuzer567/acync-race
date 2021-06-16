import getAllCarsApi from '../../../commands/api/getAllCarsApi';
import eIdtoDbCarsI from '../../../commands/converterIdToAllCars';
import removeAddHandler from '../../../commands/removeAddHandler';
import { DbCarsArrT } from '../../types/types';

const showTheWinner = (id: number, durationInSec: number): void => {
  const theWinnerText: HTMLElement = document.querySelector('.garage-page__theWinner__text');
  const theWinnerEl: HTMLElement = document.querySelector('.garage-page__theWinner');

  getAllCarsApi().then((DbCarsArr: DbCarsArrT) => {
    const DbI = eIdtoDbCarsI(DbCarsArr, id);
    theWinnerText.innerHTML = `
        The winner of race is ${DbCarsArr[DbI].name} with time ${durationInSec}.
      `;
    theWinnerEl.style.zIndex = '99';
    theWinnerEl.style.opacity = '1';
  });

  const okBtn: HTMLElement = document.querySelector('.garage-page__theWinner__btn');

  const okBtnHandler = () => {
    theWinnerEl.style.opacity = '0';
    theWinnerEl.style.zIndex = '-1';
  };

  removeAddHandler(okBtn, 'click', okBtnHandler);
};

export default showTheWinner;
