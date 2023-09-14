import { createContext, useEffect, useState } from "react";
import { DIFFICULTY, TURN } from "./data";
import { easyMode, hardMode, addId } from "./functions";

const initialState = {
  memory: [],
  difficulty: DIFFICULTY.easy,
  turn: TURN.player1,
  selectedCards: [],
  score1: 0,
  score2: 0,
  winner: null,
};

export const MemoryContext = createContext(null);

export function MemoryContextProvider({ children }) {
  const [state, setState] = useState(initialState);

  function resetGame() {
    setState(initialState);
  }
  function handleTurn() {
    const newTurn = state.turn === TURN.player1 ? TURN.player2 : TURN.player1;
    setState((prevState) => ({ ...prevState, turn: newTurn }));
  }
  function scores() {
    if (state.turn === TURN.player1) {
      setState((prevState) => ({ ...prevState, score1: state.score1 + 1 }));
    } else {
      setState((prevState) => ({ ...prevState, score2: state.score2 + 1 }));
    }
  }
  function isWinner() {
    const verific = state.memory.every((card) => card.isMatch === true);
    if (!verific || state.memory.length === 0) return;
    if (state.score1 > state.score2) {
      setState((prevState) => ({ ...prevState, winner: TURN.player1 }));
    } else if (state.score1 < state.score2) {
      setState((prevState) => ({ ...prevState, winner: TURN.player2 }));
    } else {
      setState((prevState) => ({ ...prevState, winner: "Empate" }));
    }
  }
  function selectMode(selected) {
    if (selected) {
      setState((prevState) => ({ ...prevState, difficulty: DIFFICULTY.hard }));
    }
  }
  function newGame() {
    if (state.difficulty === DIFFICULTY.easy) {
      const newCards = addId(easyMode());
      setState((prevState) => ({ ...prevState, memory: newCards }));
    } else {
      const newCards = addId(hardMode());
      setState((prevState) => ({ ...prevState, memory: newCards }));
    }
  }
  function addSelectedCards(card) {
    const newSelectedCards = [...state.selectedCards];
    newSelectedCards.push(card);
    setState((prevState) => ({
      ...prevState,
      selectedCards: newSelectedCards,
    }));
  }
  function checkMatch() {
    if (state.selectedCards[0].name === state.selectedCards[1].name) {
      const updateMemory = state.memory.map((card) => {
        if (card.name === state.selectedCards[0].name) {
          return { ...card, isMatch: true };
        }
        return card;
      });
      setState((prevState) => ({ ...prevState, memory: updateMemory }));
      scores();
    } else {
      handleTurn();
    }
  }

  useEffect(() => {
    if (state.selectedCards.length === 2) {
      setTimeout(() => {
        setState((prevState) => ({ ...prevState, selectedCards: [] }));
      }, 1000);
      checkMatch();
    }
    isWinner();
  }, [state.selectedCards]);

  return (
    <MemoryContext.Provider
      value={{
        ...state,
        resetGame,
        selectMode,
        newGame,
        addSelectedCards,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
