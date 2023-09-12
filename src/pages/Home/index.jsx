import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SelectGame from "../../components/SelectGame";
import { useMemoryContext } from "../../context/hooks";

function Home() {
  const { resetGame } = useMemoryContext();
  const [start, setStart] = useState(false);
  function handleGame() {
    setStart(!start);
  }
  useEffect(() => {
    resetGame();
  }, []);
  return (
    <Layout>
      {start ? (
        <SelectGame />
      ) : (
        <aside className="home_aside">
          <button onClick={handleGame}>Start Game</button>
        </aside>
      )}
    </Layout>
  );
}

export default Home;
