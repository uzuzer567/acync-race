import { ableBtn, disableBtn } from '../../../commands/ableDisableButton';
import getCarsApi from '../../../commands/api/getCarsApi';
import createGarage from '../createGarage';
import PaginationState from '../../../commands/paginationState';
import { handlerT } from '../../types/types';

const nextBtnHandler:handlerT = () => {
  const pageInfo: HTMLElement = document.querySelector('.garage-page__pagination__pageInfo');
  const prevBtn: HTMLElement = document.querySelector('.garage-page__pagination__button__prev');
  const nextBtn: HTMLElement = document.querySelector('.garage-page__pagination__button__next');

  ableBtn(prevBtn);

  PaginationState.garagePage += 1;
  getCarsApi().then((res) => {
    if (res.length === 0) {
      disableBtn(nextBtn);
      PaginationState.garagePage -= 1;
    }

    pageInfo.innerHTML = `page ${PaginationState.garagePage}`;
    createGarage();
  });
};

export default nextBtnHandler;
