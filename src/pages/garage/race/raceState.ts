import { RaceStateT, winnerT } from '../../types/types';

const RaceState: RaceStateT = {
  id: {
    id: null,
    isCarStoped: null,
    driveStatus: null,
    duration: null,
  },
};

export const FinishedSet = new Set();

export const newWinner: winnerT = {
  id: null,
  wins: null,
  time: null,
};

export default RaceState;
