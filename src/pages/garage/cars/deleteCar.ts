import createGarage from '../createGarage';
import deleteCarApi from '../../../commands/api/deleteCarApi';
import { handlerT } from '../../types/types';

const deleteCarBtnsHandler: handlerT = (e) => {
  const target = e.target as HTMLElement;
  const carInScore: HTMLElement = document.querySelector(`.winners-page__winners__winner-${target.id}`);
  deleteCarApi(target.id).then(() => {
    createGarage();
    carInScore?.remove();
  });
};
export default deleteCarBtnsHandler;
