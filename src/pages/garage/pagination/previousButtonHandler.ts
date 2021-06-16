import { ableBtn } from '../../../commands/ableDisableButton';
import createGarage from '../createGarage';
import PaginationState from '../../../commands/paginationState';
import { handlerT } from '../../types/types';

const prevBtnHandler:handlerT = () => {
  const pageInfo: HTMLElement = document.querySelector('.garage-page__pagination__pageInfo');
  const nextBtn: HTMLElement = document.querySelector('.garage-page__pagination__button__next');

  ableBtn(nextBtn);
  PaginationState.garagePage -= 1;
  pageInfo.innerHTML = `page ${PaginationState.garagePage}`;
  createGarage();
};
export default prevBtnHandler;
