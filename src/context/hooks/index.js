import { useContext } from "react";
import { MemoryContext } from "..";

export function useMemoryContext() {
  const context = useContext(MemoryContext);
  return context;
}
