import { ableBtn } from '../../../../commands/ableDisableButton';
import PaginationState from '../../../../commands/paginationState';
import { handlerT } from '../../../types/types';
import createWinnersPage from '../createWinnersPage';

const scorePrevBtnHandler: handlerT = () => {
  const pageInfo: HTMLElement = document.querySelector('.winners-page__pagination__pageInfo');
  const nextBtn: HTMLElement = document.querySelector('.winners-page__pagination__button__next');

  ableBtn(nextBtn);
  PaginationState.winnersPage -= 1;
  pageInfo.innerHTML = `page ${PaginationState.winnersPage}`;
  createWinnersPage();
};

export default scorePrevBtnHandler;
