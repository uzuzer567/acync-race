import { handlerT } from '../pages/types/types';

const removeAddHandler = (element: HTMLElement, event: string, handler: handlerT): void => {
  element.removeEventListener(event, handler);
  element.addEventListener(event, handler);
};

export default removeAddHandler;
