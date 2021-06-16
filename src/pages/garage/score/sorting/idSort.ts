import createScore from '../createScore';
import delayOfBtn from '../../../../commands/delayButton';
import nowSortedBy from './sortingState';
import { handlerT } from '../../../types/types';

const idSorcBtnHandler: handlerT = () => {
  const idSorcBtn: HTMLElement = document.querySelector('.winners-page__head__id');
  const timeSortBtn: HTMLElement = document.querySelector('.winners-page__head__best-time');
  const winsSortBtn: HTMLElement = document.querySelector('.winners-page__head__wins');
  delayOfBtn(idSorcBtn);
  if (nowSortedBy.id === 0) {
    idSorcBtn.style.color = '#F0F8FF';
    idSorcBtn.style.textDecoration = 'underline';
    winsSortBtn.style.color = '#F0F8FF';
    timeSortBtn.style.color = '#F0F8FF';
    createScore('id', 'ASC');
    nowSortedBy.id += 1;
    nowSortedBy.wins = 0;
    nowSortedBy.time = 0;
  } else if (nowSortedBy.id === 1) {
    createScore('id', 'DESC');
    nowSortedBy.id += 1;
    idSorcBtn.style.color = '#FF8800';
  } else if (nowSortedBy.id === 2) {
    idSorcBtn.style.color = '#F0F8FF';

    createScore();
    nowSortedBy.id = 0;
  }
};

export default idSorcBtnHandler;
