import { createContext, useState } from "react";
import { cards, DIFFICULTY, TURN } from "./data";

const initialState = {
  memory: [],
  difficulty: DIFFICULTY.easy,
  turn: TURN.player1,
};

export const MemoryContext = createContext(null);

export function MemoryContextProvider({ children }) {
  const [state, setState] = useState(initialState);

  function newGame() {
    if (state.difficulty === DIFFICULTY.easy) {
      setState((prevState) => ({ ...prevState, memory: [...cards] }));
    } else {
      setState((prevState) => ({ ...prevState, memory: [...cards, ...cards] }));
    }
  }

  return (
    <MemoryContext.Provider
      value={{
        ...state,
        newGame,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}
