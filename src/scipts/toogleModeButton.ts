import {
  buttonGame, buttonTrain, buttonValue, categoryValue, setButtonValue, toggleButton
} from "./state";
import { makeActiveLinks } from "./burger";
import { renderGameModeCards } from "./gameModeCards";
import { renderTrainModeCardsBlock } from "./trainModeCards";

export const changeColorCategory = () => {
  const category = document.querySelectorAll(".category");
  category.forEach(el => {
    if (!buttonValue) {
      el.classList.add("category_game");
    } else {
      el.classList.remove("category_game");
    }
  });
};

const changeGameMode = (e: Event) => {
  const playButton = document.querySelectorAll<HTMLElement>(".play_button")[0];
  const target = e.target;
  if ((<Element>target).classList.contains("train_button")) {
    playButton.style.pointerEvents = "none";
    playButton.style.backgroundImage = "url('../src/assets/images/play.png')";
    buttonTrain.classList.add("active");
    buttonGame.classList.remove("active");
    setButtonValue(true);
    changeColorCategory();
    if (categoryValue !== null && categoryValue >= 0) {
      renderTrainModeCardsBlock(categoryValue);
    }
  }
  if ((<Element>target).classList.contains("game_button")) {
    playButton.style.pointerEvents = "auto";
    buttonTrain.classList.remove("active");
    buttonGame.classList.add("active");
    setButtonValue(false);
    changeColorCategory();
    if (categoryValue !== null && categoryValue >= 0) {
      renderGameModeCards(categoryValue);
    }
  }
  makeActiveLinks(categoryValue + 1);
};

toggleButton.addEventListener("click", changeGameMode);
