import { cards } from "../data";

const arrayRandomSort = (array) => {
  const newArray = array.sort(() => 0.5 - Math.random());
  return newArray;
};

export const easyMode = () => {
  const cardsPart = cards.slice(0, 5);
  const newCards = [...cardsPart, ...cardsPart];
  const randomCards = arrayRandomSort(newCards);
  return randomCards;
};

export const hardMode = () => {
  const newCards = [...cards, ...cards];
  const randomCards = arrayRandomSort(newCards);
  return randomCards;
};

export const addId = (array) => {
  const newArray = array.map((card, index) => ({ ...card, id: index + 1 }));
  return newArray;
};
