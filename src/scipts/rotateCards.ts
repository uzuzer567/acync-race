export const startRotate = () => {
  const card = document.querySelectorAll(".card");
  const cardFront = document.querySelectorAll(".card_front");
  const cardBack = document.querySelectorAll(".card_back");
  const cardChangeBtnIcon = document.querySelectorAll(".card_flip_button_icon");

  for (let i = 0; i < card.length; i += 1) {
    const rotateCard = () => {
      card[i].classList.toggle("card_rotated");
      cardFront[i].classList.toggle("card_hidden");
      cardBack[i].classList.toggle("card_hidden");
    };

    const rotateCardBack = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget;
      if (card[i].classList.contains("card_rotated") && (<Element>target).classList.contains("card")) {
        rotateCard();
      }
    };

    cardChangeBtnIcon[i].addEventListener("click", rotateCard);
    card[i].addEventListener("mouseleave", rotateCardBack);
  }
};
