import {
  ableBtn, ableBtns, disableBtn, disableBtns,
} from '../../../commands/ableDisableButton';
import removeAddHandler from '../../../commands/removeAddHandler';
import { handlerT } from '../../types/types';
import { CarsInMove } from '../cars/stateCars';

const toggleRaceBtns = (isReset?: string): void => {
  const resetBtn: HTMLElement = document.querySelector('.garage-page__race-reset-generate__reset');
  const raceBtn: HTMLElement = document.querySelector('.garage-page__race-reset-generate__race');
  const generateBtn: HTMLElement = document.querySelector('.garage-page__race-reset-generate__generate');
  const selectBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.car__buttons__select');
  const removeBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.car__buttons__remove');
  const createBtn: HTMLElement = document.querySelector('.garage-page__create__btn');
  const updateBtn: HTMLElement = document.querySelector('.garage-page__update__btn');
  const garagePagination: HTMLElement = document.querySelector('.garage-page__pagination');
  const winnersPagination: HTMLElement = document.querySelector('.winners-page__pagination');
  const clearBtn: HTMLElement = document.querySelector('.garage-page__clear__btn');

  const resetBtnHandler: handlerT = () => {
    ableBtn(raceBtn);
  };

  if (CarsInMove.size > 0 || isReset === 'resetOn') {
    disableBtns([resetBtn, raceBtn, generateBtn,
      createBtn, updateBtn, garagePagination,
      winnersPagination, clearBtn]);
    selectBtns.forEach((selectBtn) => { disableBtn(selectBtn); });
    removeBtns.forEach((removeBtn) => { disableBtn(removeBtn); });
  } else {
    ableBtns([resetBtn, generateBtn, createBtn,
      updateBtn, garagePagination, winnersPagination,
      clearBtn]);
    selectBtns.forEach((selectBtn) => { ableBtn(selectBtn); });
    removeBtns.forEach((removeBtn) => { ableBtn(removeBtn); });
  }

  removeAddHandler(resetBtn, 'click', resetBtnHandler);
};

export default toggleRaceBtns;
