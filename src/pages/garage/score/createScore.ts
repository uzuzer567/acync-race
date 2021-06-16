import createScorePosition from './createScorePosition';
import getWinnersApi from '../../../commands/api/scoreApi/getWinnersApi';
import { winnerT } from '../../types/types';

const createScore = (sort?: string, order?: string): void => {
  const winnersBlock: HTMLElement = document.querySelector('.winners-page__winners');
  winnersBlock.innerHTML = '';
  getWinnersApi(sort, order).then((res) => {
    let number = 1;
    res.forEach((winner: winnerT) => {
      createScorePosition(winner.id, winner.wins, winner.time, number);
      number += 1;
    });
  });
};

export default createScore;
