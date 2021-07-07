import { CardItemsDataType, cardsItemsData, main } from "./state";
import { statisticsCards } from "./cardsForStatistics";
import { renderCategoriesBlock } from "./category";
import { makeActiveLinks } from "./burger";

export const renderGameModeCards = (categoryNum: number) => {
  makeActiveLinks(5);
  main.innerHTML = "";
  main.insertAdjacentHTML("beforeend", "<div class=\"game_cards\"><div>");
  const gameCards = document.querySelector(".game_cards");
  gameCards.innerHTML = "";
  cardsItemsData.map((c: string, i: number) => gameCards.insertAdjacentHTML("beforeend",
    `<div class="category_item card">
      <div class="card_image game_card">
        <img src="../src/assets/${cardsItemsData[categoryNum][i].image}" alt="card" class="card_image_item game_card_image">
      </div>
    </div>`));
  main.insertAdjacentHTML("afterbegin", "<div class=\"game_status\"></div>");

  const menuLink = document.querySelector(".menu_link");
  const playButton = document.querySelector(".play_button");
  const playButtonStyle = document.querySelector<HTMLElement>(".play_button");
  const gameStatus = document.querySelector(".game_status");
  const cardsForGameMode = [...statisticsCards];
  let dataForGameMode = cardsForGameMode[categoryNum].filter((d: CardItemsDataType) => ({ ...d }));
  dataForGameMode = dataForGameMode.sort(() => Math.random() - 0.5);
  let mistakeCounter = 0;
  let newGameButtonStatus = false;
  const gameStatusMaxValueChild = 18;

  const playSound = (soundName: string) => {
    const audio = new Audio(`../src/assets/audio/${soundName}`);
    audio.play();
  };

  const deleteFirstItemFromArray = () => {
    dataForGameMode.shift();
  };

  const addStarAnswer = (imgName: string) => {
    if (gameStatus.childElementCount === gameStatusMaxValueChild) {
      gameStatus.removeChild(gameStatus.childNodes[0]);
    }
    gameStatus.insertAdjacentHTML("beforeend",
      `<img src=../src/assets/images/${imgName} class="game_status_image">`);
  };

  const renderButton = () => {
    playButtonStyle.style.backgroundImage = "url('../src/assets/images/play.png')";
  };

  const rerenderButton = () => {
    playButtonStyle.style.backgroundImage = "url('../src/assets/images/sound.png')";
  };

  const countMistake = () => {
    mistakeCounter += 1;
  };

  const finishedGameWithMenu = () => {
    renderGameModeCards(0);
  };

  const finishedGame = () => {
    if (mistakeCounter === 0) {
      playSound("success.mp3");
      main.innerHTML = `<img src='../src/assets/images/failure.png' class="end_message">
      <h2 class="game_description">Congratulations! You ended the game with ${mistakeCounter} mistakes. Keep up the good work!</h2>`;
      mistakeCounter = 0;
    }
    if (mistakeCounter > 0) {
      playSound("failure.mp3");
      main.innerHTML = `<img src='../src/assets/images/failure.png' class="end_message">
        <h2 class="game_description">Oops... You ended the game with ${mistakeCounter} mistakes. You need to learn a little more.<br></h2>`;
      mistakeCounter = 0;
    }
    setTimeout(() => {
      renderCategoriesBlock();
    }, 3000);
    newGameButtonStatus = false;
    renderButton();
  };

  const voiceTheWord = () => {
    if (dataForGameMode.length === 0) {
      finishedGame();
      return;
    }
    const audio = new Audio(`../src/assets/${dataForGameMode[0].audioSrc}`);
    audio.play();
  };

  const startGameInGameMode = (e: Event) => {
    const target = e.target;
    let imgSrc = "";
    if ((<Element>target).classList.contains("game_card_image")) {
      imgSrc = (<Element>target).getAttribute("src").replace("../src/assets/", "");
      if (imgSrc !== dataForGameMode[0].image) {
        dataForGameMode[0].errors += 1;
        playSound("error.mp3");
        addStarAnswer("star.png");
        countMistake();
      }
      if (imgSrc === dataForGameMode[0].image) {
        dataForGameMode[0].correct += 1;
        playSound("correct.mp3");
        deleteFirstItemFromArray();
        setTimeout(() => {
          voiceTheWord();
        }, 1000);
        (<Element>target).parentNode.parentNode.classList.add("disabled_card");
        addStarAnswer("star_empty.png");
      }
    }
  };

  const protection = (e: Event) => {
    const target = e.target;
    if (!(<Element>target).classList.contains("header")) {
      newGameButtonStatus = false;
    }
  };

  const buttonClickHandler = () => {
    voiceTheWord();
    rerenderButton();
    newGameButtonStatus = true;
  };

  const checkGameStatus = (e: Event) => {
    if (!newGameButtonStatus) {
      startGameInGameMode(e);
    }
  };

  playButton.addEventListener("click", buttonClickHandler);
  menuLink.addEventListener("click", finishedGameWithMenu);
  main.addEventListener("click", checkGameStatus);
  const header = document.querySelector("header");
  header.addEventListener("click", protection);
};
