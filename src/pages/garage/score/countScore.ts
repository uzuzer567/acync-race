import getWinnersApi from '../../../commands/api/scoreApi/getWinnersApi';
import createWinnerApi from '../../../commands/api/scoreApi/createWinnerApi';
import { newWinner } from '../race/raceState';
import updateWinnerApi from '../../../commands/api/scoreApi/updateWinner';
import createScore from './createScore';
import { winnerT } from '../../types/types';

const countScore = (): void => {
  let noMatches = true;
  getWinnersApi().then((res) => {
    res.forEach((Dbwinner: winnerT) => {
      if (Number(newWinner.id) === Number(Dbwinner.id)) {
        newWinner.wins = Dbwinner.wins + 1;
        if (Dbwinner.time < newWinner.time) {
          updateWinnerApi(Dbwinner.id, newWinner.wins, Dbwinner.time).then(() => {
            createScore();
          });
        } else {
          updateWinnerApi(Dbwinner.id, newWinner.wins, newWinner.time).then(() => {
            createScore();
          });
        }
        noMatches = false;
      }
    });
    if (noMatches === true) {
      createWinnerApi(newWinner.id, 1, newWinner.time).then(() => {
        createScore();
      });
    }
  });
};

export default countScore;
