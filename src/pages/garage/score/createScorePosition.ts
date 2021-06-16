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
        <svg id="${id}" class="winners-page__winners__winner__image winners-page__winners__winner__image winners-page__winners__winner-${id}__image" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
          <style type="text/css">
            .st0{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
          </style>
          <circle class="st0" cx="7" cy="23" r="3"/>
          <circle class="st0" cx="23" cy="23" r="3"/>
          <line class="st0" x1="28" y1="19" x2="30" y2="19"/>
          <line class="st0" x1="4" y1="16" x2="24" y2="16"/>
          <line class="st0" x1="13" y1="10" x2="10" y2="16"/>
          <path class="st0" d="M26,23h4c0.6,0,1-0.4,1-1v-2c0-2.2-1.8-4-4-4h-3l-3.8-4.6c-0.8-0.9-1.9-1.4-3.1-1.4H9.5c-1.5,0-2.9,0.9-3.6,2.2
            L4,16H3c-1.1,0-2,0.9-2,2v4c0,0.6,0.4,1,1,1h2"/>
          <line class="st0" x1="10" y1="23" x2="20" y2="23"/>
        </svg>
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
