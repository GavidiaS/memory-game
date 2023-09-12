import "./card.css";

function Card({ image }) {
  const { name, icon, show } = image;
  return (
    <div className="card_div">
      <img src={icon} alt={`Logo ${name}`} />
    </div>
  );
}

export default Card;
