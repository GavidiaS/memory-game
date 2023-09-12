import { createContext, useState } from "react";
import { DIFFICULTY, TURN } from "./data";
import { easyMode, hardMode } from "./functions";

const initialState = {
  memory: [],
  difficulty: DIFFICULTY.easy,
  turn: TURN.player1,
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

  return (
    <MemoryContext.Provider
      value={{
        ...state,
        resetGame,
        newGame,
        modeHard,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
