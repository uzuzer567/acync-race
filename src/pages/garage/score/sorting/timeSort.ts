import createScore from '../createScore';
import delayOfBtn from '../../../../commands/delayButton';
import nowSortedBy from './sortingState';
import { handlerT } from '../../../types/types';

const timeSortBtnHandler: handlerT = () => {
  const idSorcBtn: HTMLElement = document.querySelector('.winners-page__head__id');
  const timeSortBtn: HTMLElement = document.querySelector('.winners-page__head__best-time');
  const winsSortBtn: HTMLElement = document.querySelector('.winners-page__head__wins');
  delayOfBtn(timeSortBtn);
  if (nowSortedBy.time === 0) {
    idSorcBtn.style.color = '#F0F8FF';
    winsSortBtn.style.color = '#F0F8FF';
    timeSortBtn.style.color = '#F0F8FF';
    timeSortBtn.style.textDecoration = 'underline';
    createScore('time', 'ASC');
    nowSortedBy.id = 0;
    nowSortedBy.wins = 0;
    nowSortedBy.time += 1;
  } else if (nowSortedBy.time === 1) {
    timeSortBtn.style.color = '#FF8800';
    createScore('time', 'DESC');
    nowSortedBy.time += 1;
  } else if (nowSortedBy.time === 2) {
    timeSortBtn.style.color = '#F0F8FF';
    createScore();
    nowSortedBy.time = 0;
  }
};

export default timeSortBtnHandler;
