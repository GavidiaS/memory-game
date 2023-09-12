import "./list.css";
import { useMemoryContext } from "../../context/hooks";
import Card from "../Card";

function CardList() {
  const { memory } = useMemoryContext();
  const nameClass = memory.length > 20 ? "list_hard" : "list_easy";
  return (
    <section className={nameClass}>
      {memory?.map((card) => (
        <Card image={card} key={card.name} />
      ))}
    </section>
  );
}

export default CardList;
