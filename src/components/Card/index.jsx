import "./card.css";
import { useMemoryContext } from "../../context/hooks";
import { useEffect, useState } from "react";

function Card({ card }) {
  const { name, icon, isMatch } = card;
  const { addSelectedCards, selectedCards, winner } = useMemoryContext();
  const [flip, setFlip] = useState(false);

  function handleClick() {
    if (isMatch || winner) return;
    addSelectedCards(card);
  }

  useEffect(() => {
    if (selectedCards[0] === card || selectedCards[1] === card || isMatch) {
      setFlip(true);
    } else {
      setFlip(false);
    }
  }, [selectedCards]);

  return (
    <article onClick={handleClick} className="card_flip">
      <div className={`flip_card-inner ${flip ? "card_active" : null}`}>
        <div className="flip_card-front"></div>
        <div className="flip_card-back">
          <img src={icon} alt={`Logo ${name}`} />
        </div>
      </div>
    </article>
  );
}

export default Card;
