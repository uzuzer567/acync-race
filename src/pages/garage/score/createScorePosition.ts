import getCarsApi from '../../../commands/api/getCarsApi';

const createScorePosition = (id: number, wins: number, time: number, number: number): void => {
  const winnersBlock: HTMLElement = document.querySelector('.winners-page__winners');
  getCarsApi(1, -1).then((res) => {
    const name: string = res[id - 1]?.name;
    const color: string = res[id - 1]?.color;
    winnersBlock.innerHTML
      += `
    <div class="winners-page__winners__winner winners-page__winners__winner-${id}">
      <p class="winners-page__winners__winner__inner winners-page__winners__winner__number winners-page__winners__winner-${id}__number">${number}</p>
      <div class="winners-page__winners__winner__inner">
<object id="${id}" class="winners-page__winners__winner__image winners-page__winners__winner__image winners-page__winners__winner-${id}__image" height="30px" width="30px" data="../../../assets/car.svg" type="image/svg+xml"></object>
      </div>
      <p class="winners-page__winners__winner__inner winners-page__winners__winner__id winners-page__winners__winner-${id}__id">${id}</p>
      <p class="winners-page__winners__winner__inner winners-page__winners__winner__name winners-page__winners__winner-${id}__name">${name}</p>
      <p class="winners-page__winners__winner__inner winners-page__winners__winner__wins winners-page__winners__winner-${id}__wins">${wins}</p>
      <p class="winners-page__winners__winner__inner winners-page__winners__winner__best-time winners-page__winners__winner-${id}__best-time">${time}</p>
    </div>
  `;

    const carImage: HTMLElement = document.querySelector(`.winners-page__winners__winner-${id}__image`);
    carImage.style.stroke = `${color}`;
  });
};

export default createScorePosition;
