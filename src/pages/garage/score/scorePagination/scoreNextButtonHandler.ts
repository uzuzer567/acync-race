import { ableBtn, disableBtn } from '../../../../commands/ableDisableButton';
import getWinnersApi from '../../../../commands/api/scoreApi/getWinnersApi';
import PaginationState from '../../../../commands/paginationState';
import { handlerT } from '../../../types/types';
import createWinnersPage from '../createWinnersPage';

const scoreNextBtnHandler: handlerT = () => {
  const pageInfo: HTMLElement = document.querySelector('.winners-page__pagination__pageInfo');
  const prevBtn: HTMLElement = document.querySelector('.winners-page__pagination__button__prev');
  const nextBtn: HTMLElement = document.querySelector('.winners-page__pagination__button__next');

  ableBtn(prevBtn);

  PaginationState.winnersPage += 1;
  getWinnersApi().then((res) => {
    if (res.length === 0) {
      disableBtn(nextBtn);
      PaginationState.winnersPage -= 1;
    }

    pageInfo.innerHTML = `page ${PaginationState.winnersPage}`;
    createWinnersPage();
  });
};

export default scoreNextBtnHandler;
