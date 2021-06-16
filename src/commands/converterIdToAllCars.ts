import { carT, eItoDbCarsIT } from '../pages/types/types';

const eIdtoDbCarsI: eItoDbCarsIT = (DbCarsArr, id): number => {
  let i = 0;
  let index:number;
  DbCarsArr.forEach((DbCar: carT) => {
    if (id === DbCar.id) {
      index = i;
    }
    i += 1;
  });
  return index;
};

export default eIdtoDbCarsI;
