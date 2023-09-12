import "./select.css";
import { useNavigate } from "react-router-dom";
import { useMemoryContext } from "../../context/hooks";

function SelectGame() {
  const navigate = useNavigate();
  const { modeHard } = useMemoryContext();
  function selectedMode(difficulty) {
    if (difficulty) {
      modeHard();
    }
    navigate("/game");
  }
  return (
    <aside className="select_aside">
      <section className="select_section">
        <h2>Select Difficulty</h2>
        <div className="select_div">
          <button onClick={() => selectedMode(false)}>Easy Mode</button>
          <button onClick={() => selectedMode(true)}>Hard Mode</button>
        </div>
      </section>
    </aside>
  );
}

export default SelectGame;
