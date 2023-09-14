import "./result.css";
import { useMemoryContext } from "../../context/hooks";
import { Link } from "react-router-dom";

function Result() {
  const { winner } = useMemoryContext();
  if (!winner) return null;
  return (
    <aside className="result_aside">
      {winner === "Empate" && <h2>They were tied</h2>}
      {winner.includes("Player") && <h2>The winner is {winner}</h2>}
      <Link to="/">Reselect difficulty</Link>
    </aside>
  );
}

export default Result;
