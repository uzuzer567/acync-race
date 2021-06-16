import { ableBtn, disableBtn } from '../../../commands/ableDisableButton';
import getCarsApi from '../../../commands/api/getCarsApi';
import PaginationState from '../../../commands/paginationState';
import removeAddHandler from '../../../commands/removeAddHandler';
import { DbCarsArrT } from '../../types/types';
import createGarage from '../createGarage';
import nextBtnHandler from './nextButtonHandler';
import prevBtnHandler from './previousButtonHandler';

const Pagination = (): void => {
  const pageInfo: HTMLElement = document.querySelector('.garage-page__pagination__pageInfo');
  const prevBtn: HTMLElement = document.querySelector('.garage-page__pagination__button__prev');
  const nextBtn: HTMLElement = document.querySelector('.garage-page__pagination__button__next');

  getCarsApi().then((DbCarsArr: DbCarsArrT) => {
    if (DbCarsArr.length === 0 && PaginationState.garagePage !== 1) {
      PaginationState.garagePage -= 1;
      pageInfo.innerHTML = `page ${PaginationState.garagePage}`;
      createGarage();
    }
  });

  getCarsApi(PaginationState.garagePage + 1).then((DbCarsArr: DbCarsArrT) => {
    if (DbCarsArr.length === 0) {
      disableBtn(nextBtn);
    } else {
      ableBtn(nextBtn);
    }
  });

  if (PaginationState.garagePage === 1) {
    disableBtn(prevBtn);
  } else {
    ableBtn(prevBtn);
  }

  removeAddHandler(prevBtn, 'click', prevBtnHandler);
  removeAddHandler(nextBtn, 'click', nextBtnHandler);
};
export default Pagination;
