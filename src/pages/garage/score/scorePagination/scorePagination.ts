import { ableBtn, disableBtn } from '../../../../commands/ableDisableButton';
import getWinnersApi from '../../../../commands/api/scoreApi/getWinnersApi';
import PaginationState from '../../../../commands/paginationState';
import scoreNextBtnHandler from './scoreNextButtonHandler';
import scorePrevBtnHandler from './scorePreviousButtonHandler';
import removeAddHandler from '../../../../commands/removeAddHandler';
import createWinnersPage from '../createWinnersPage';
import { getWinnersApiDataT } from '../../../types/types';

const ScorePagination = (): void => {
  const pageInfo: HTMLElement = document.querySelector('.winners-page__pagination__pageInfo');
  const prevBtn: HTMLElement = document.querySelector('.winners-page__pagination__button__prev');
  const nextBtn: HTMLElement = document.querySelector('.winners-page__pagination__button__next');

  getWinnersApi().then((res: getWinnersApiDataT) => {
    if (res.length === 0 && PaginationState.winnersPage !== 1) {
      PaginationState.winnersPage -= 1;
      pageInfo.innerHTML = `page ${PaginationState.winnersPage}`;
      createWinnersPage();
    }
  });

  getWinnersApi(null, null, PaginationState.winnersPage + 1).then((res: getWinnersApiDataT) => {
    if (res.length === 0) {
      disableBtn(nextBtn);
    } else {
      ableBtn(nextBtn);
    }
  });

  if (PaginationState.winnersPage === 1) {
    disableBtn(prevBtn);
  } else {
    ableBtn(prevBtn);
  }

  removeAddHandler(prevBtn, 'click', scorePrevBtnHandler);
  removeAddHandler(nextBtn, 'click', scoreNextBtnHandler);
};
export default ScorePagination;
