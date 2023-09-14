import "./list.css";
import { useMemoryContext } from "../../context/hooks";
import Card from "../Card";
import { useEffect } from "react";

function CardList() {
  const { memory, parCards, gameMemory } = useMemoryContext();
  const nameClass = memory.length > 20 ? "list_hard" : "list_easy";

  useEffect(() => {
    gameMemory();
  }, [parCards]);

  return (
    <section className={nameClass}>
      {memory?.map((card, index) => (
        <Card key={index} image={card} index={index} />
      ))}
    </section>
  );
}

export default CardList;
