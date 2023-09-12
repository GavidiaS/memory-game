import { cards } from "../data";

const arrayRandomSort = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5);
  return newArray;
};

export const easyMode = () => {
  const randomOrder1 = arrayRandomSort(cards);
  const randomOrder2 = arrayRandomSort(cards);
  const newCards = randomOrder1.concat(randomOrder2);
  return newCards;
};

export const hardMode = () => {
  const cards1 = easyMode();
  const cards2 = easyMode();
  const newCards = cards1.concat(cards2);
  return newCards;
};
