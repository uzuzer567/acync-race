import {
  buttonValue,
  categoriesData, categoryValue, getCategoryValue, main
} from "./state";
import { renderGameModeCards } from "./gameModeCards";
import { makeActiveLinks } from "./burger";
import { renderTrainModeCardsBlock } from "./trainModeCards";
import { changeColorCategory } from "./toogleModeButton";
let attributeFromCategoryCard: null | number = null;

export const renderCategoriesBlock = () => {
  main.innerHTML = "";
  categoriesData.map((c: string, i: number) => main.insertAdjacentHTML("beforeend",
    `<div class="category" dataValue=${i}>
      <div class="category_data">
        <div class="category_icon">
          <img src="../src/assets/images/${c}.png" alt="category" class="category_icon_image">
        </div>
        <h3 class="category_description">${c}</h3>
      </div>
    </div>`));
  changeColorCategory();
};
renderCategoriesBlock();

const getAttributeFromCategoryCard = (e: Event) => {
  const target = e.target;
  if ((<Element>target).closest(".category")) {
    attributeFromCategoryCard = +(<Element>target).closest(".category").getAttribute("dataValue");
    getCategoryValue(attributeFromCategoryCard);
  }
};

const chooseGameMode = (e: Event) => {
  const target = e.target;
  if ((<Element>target).closest(".category")) {
    if (buttonValue) {
      renderTrainModeCardsBlock(categoryValue);
    } else {
      renderGameModeCards(categoryValue);
    }
    makeActiveLinks(categoryValue + 1);
  }
};

main.addEventListener("click", getAttributeFromCategoryCard);
main.addEventListener("click", chooseGameMode);
