import "./list.css";
import { useMemoryContext } from "../../context/hooks";
import Card from "../Card";

function CardList() {
  const { memory } = useMemoryContext();
  const nameClass = memory.length > 10 ? "list_hard" : "list_easy";

  return (
    <section className={nameClass}>
      {memory?.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
}

export default CardList;
