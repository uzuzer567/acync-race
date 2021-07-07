import {
  burgerCategories, buttonValue, categoryValue,
  firstArrayItemIndex, getCategoryValue
} from "./state";
import { renderCategoriesBlock } from "./category";
import { renderTrainModeCardsBlock } from "./trainModeCards";
import { renderGameModeCards } from "./gameModeCards";
import { renderStatisticsBlock } from "./statistics";

const burgerMenuNav = document.querySelector(".menu_nav");
export let attributeFromBurgerItem: null | number = null;

const renderBurgerMenu = () => {
  burgerCategories.map((c: string, i: number) => burgerMenuNav.insertAdjacentHTML("beforeend",
    `<a class="menu_link" dataValue=${i - 1}>
      <img src="../src/assets/images/${c}.png" alt="menu" class="menu_nav_icon">
      <li class="menu_nav_item">${c.toUpperCase()}</li>
    </a>`));
};
renderBurgerMenu();

const burgerMenu = document.querySelector(".menu");
export const burgerMenuLink = document.querySelectorAll(".menu_link");

const toggleModal = (e: Event) => {
  e.preventDefault();
  const target = e.target;
  if ((<Element>target).closest(".menu_link")
    || (<Element>target).closest(".open_menu_button")
    || (<Element>target).closest(".close_menu_button")
    || (<Element>target).classList.contains("menu_overlay")) {
    burgerMenu.classList.toggle("menu_active");
  }
  if (burgerMenu.classList.contains("menu_active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};

const makeActiveFirstLink = () => {
  burgerMenuLink[firstArrayItemIndex].classList.add("menu_link_active");
};

export const makeActiveLinks = (i: number) => {
  for (let j = 0; j < burgerCategories.length; j += 1) {
    burgerMenuLink[j].classList.remove("menu_link_active");
  }
  burgerMenuLink[i].classList.add("menu_link_active");
};
makeActiveFirstLink();

export const chooseCategory = (i: number, e: Event) => {
  const target = e.target;
  if ((<Element>target).closest(".menu_link")
    && !(<Element>target).closest(".open_menu_button")) {
    if (i === 0) {
      renderCategoriesBlock();
    }
    if (i > 0 && i < 9) {
      if (buttonValue) {
        renderTrainModeCardsBlock(categoryValue);
      } else {
        renderGameModeCards(categoryValue);
      }
    }
    if (i === 9) {
      renderStatisticsBlock();
    }
    makeActiveLinks(i);
  }
};

const getAttributeFromBurgerCard = (e: Event) => {
  const target = e.target;
  if ((<Element>target).closest(".menu_link")
    && !(<Element>target).closest(".open_menu_button")) {
    attributeFromBurgerItem = +(<Element>target).closest(".menu_link").getAttribute("dataValue");
    getCategoryValue(attributeFromBurgerItem);
  }
};

const burgerMenuButtonHandler = (e: Event) => {
  chooseCategory(categoryValue + 1, e);
};

burgerMenu.addEventListener("click", getAttributeFromBurgerCard);
burgerMenu.addEventListener("click", burgerMenuButtonHandler);
burgerMenu.addEventListener("click", toggleModal);
