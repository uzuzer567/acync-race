import cards from "./cards";

export type CardItemsDataType = {
  word: string
  translation: string
  image: string
  audioSrc: string
}

export const main = document.querySelector(".main");
export const [categoriesData] = cards;
export const cardsItemsData = cards.map((c: string[] | Array<CardItemsDataType>) => ({ ...c }));
cardsItemsData.shift();
export const categoriesAvatarIndex = 6;
export const firstArrayItemIndex = 0;

export const burgerCategories = [...categoriesData];
burgerCategories.unshift("Main Page");
burgerCategories.push("Statistics");

export let categoryValue: null | number = null;
export const getCategoryValue = (value: number) => {
  categoryValue = value;
};

export const toggleButton = document.querySelector(".toggleButton");
export const buttonTrain = document.querySelector(".train_button");
export const buttonGame = document.querySelector(".game_button");

export let buttonValue = true;
export const setButtonValue = (value: boolean) => {
  buttonValue = value;
};
