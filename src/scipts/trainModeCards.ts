import { cardsItemsData, main } from "./state";
import { startRotate } from "./rotateCards";

export const renderTrainModeCardsBlock = (categoryNum: number) => {
  main.innerHTML = "";
  cardsItemsData.map((c: string, i: number) => main.insertAdjacentHTML("beforeend",
    `<div class="category_item card ">
      <div class="card_front ">
        <div class="card_image">
          <img src=../src/assets/${cardsItemsData[categoryNum][i].image} alt="card" class="card_image_item">
        </div>
        <div class="card_info">
          <div class="card_description">${cardsItemsData[categoryNum][i].word}</div>
          <div class="card_flip_button">
            <img src="../src/assets/images/flip.png" alt="icon" class="card_flip_button_icon">
          </div>
          </div>
        </div>
        <div class="card_back card_hidden">
          <div class="card_image">
            <img src=../src/assets/${cardsItemsData[categoryNum][i].image} alt="card" class="card_image_item">
          </div>
        <div class="card_info">
        <div class="card_description">${cardsItemsData[categoryNum][i].translation}</div>
      </div>
    </div>
  </div>`));

  const playSound = (e: Event, i: number) => {
    const target = e.target;
    if (!(<Element>target).classList.contains("card_flip_button_icon") && (<Element>target).closest(".card_front")) {
      const audio = new Audio(`../src/assets/${cardsItemsData[categoryNum][i].audioSrc}`);
      audio.play();
    }
  };

  const addVoiceOfWord = () => {
    const cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i += 1) {
      cards[i].addEventListener("click", (e) => {
        playSound(e, i);
      });
    }
  };

  addVoiceOfWord();
  startRotate();
};
