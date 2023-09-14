import { createContext, useState } from "react";
import { DIFFICULTY, TURN } from "./data";
import { easyMode, hardMode } from "./functions";

const initialState = {
  memory: [],
  difficulty: DIFFICULTY.easy,
  turn: TURN.player1,
  parCards: [],
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
  function newGame() {
    if (state.difficulty === DIFFICULTY.easy) {
      const newCards = easyMode();
      setState((prevState) => ({ ...prevState, memory: newCards }));
    } else {
      const newCards = hardMode();
      setState((prevState) => ({ ...prevState, memory: newCards }));
    }
  }
  function modeHard() {
    setState((prevState) => ({ ...prevState, difficulty: DIFFICULTY.hard }));
  }
  function handleTurn() {
    const newTurn = state.turn === TURN.player1 ? TURN.player2 : TURN.player1;
    setState((prevState) => ({ ...prevState, turn: newTurn }));
  }
  function handleShow(index) {
    const newRender = [...state.memory];
    if (newRender[index].show) {
      newRender[index].show = false;
    } else {
      newRender[index].show = true;
    }
    setState((prevState) => ({ ...prevState, memory: newRender }));
  }
  function addParCards(index) {
    const newParCards = [...state.parCards];
    newParCards.push({ card: state.memory[index].name, num: index });
    setState((prevState) => ({ ...prevState, parCards: newParCards }));
  }
  function gameMemory() {
    if (state.parCards.length === 2) {
      const verific = state.parCards[0].card === state.parCards[1].card;
      if (verific) {
        if (state.turn === TURN.player1) {
          setState((prevState) => ({
            ...prevState,
            score1: prevState.score1 + 1,
          }));
          setState((prevState) => ({ ...prevState, parCards: [] }));
        } else {
          setState((prevState) => ({
            ...prevState,
            score2: prevState.score2 + 1,
          }));
          setState((prevState) => ({ ...prevState, parCards: [] }));
        }
      } else {
        handleShow(state.parCards[0].num);
        handleShow(state.parCards[1].num);
        setState((prevState) => ({ ...prevState, parCards: [] }));
        handleTurn();
      }
    }
  }
  function isWinner() {
    if (state.score1 > state.score2) {
      setState((prevState) => ({ ...prevState, winner: TURN.player1 }));
    } else if (state.score1 < state.score2) {
      setState((prevState) => ({ ...prevState, winner: TURN.player2 }));
    } else {
      setState((prevState) => ({ ...prevState, winner: "Empate" }));
    }
  }

  return (
    <MemoryContext.Provider
      value={{
        ...state,
        resetGame,
        newGame,
        modeHard,
        isWinner,
        gameMemory,
        handleShow,
        addParCards,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
