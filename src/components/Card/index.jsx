import "./card.css";
import { useMemoryContext } from "../../context/hooks";

function Card({ index, image }) {
  const { name, icon, show } = image;

  function handleClick() {
    // Pendiente
    console.log(index);
  }

  return (
    <article onClick={handleClick} className="card_flip">
      <div className={`flip_card-inner ${show ? "card_active" : null}`}>
        <div className="flip_card-front"></div>
        <div className="flip_card-back">
          <img src={icon} alt={`Logo ${name}`} />
        </div>
      </div>
    </article>
  );
}

export default Card;
