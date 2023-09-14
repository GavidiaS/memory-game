import { cards } from "../data";

const arrayRandomSort = (array) => {
  const newArray = array.sort(() => 0.5 - Math.random());
  return newArray;
};

export const easyMode = (boolean = false) => {
  if (boolean) {
    const newCards = [...cards, ...cards].map((card) => ({
      ...card,
      name: card.name.toUpperCase(),
    }));
    const randomOrder = arrayRandomSort(newCards);
    return randomOrder;
  } else {
    const newCards = [...cards, ...cards];
    const randomOrder = arrayRandomSort(newCards);
    return randomOrder;
  }
};

export const hardMode = () => {
  const cards1 = easyMode();
  const cards2 = easyMode(true);
  const newCards = cards1.concat(cards2);
  return newCards;
};

export const addId = (array) => {
  const newArray = array.map((card, index) => ({ ...card, id: index + 1 }));
  return newArray;
};
