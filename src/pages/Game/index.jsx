import { useEffect } from "react";
import { useMemoryContext } from "../../context/hooks";
import Layout from "../../components/Layout";
import CardList from "../../components/CardList";
import Result from "../../components/Result";

function Game() {
  const { newGame, turn } = useMemoryContext();
  useEffect(() => {
    newGame();
  }, []);
  return (
    <Layout>
      <div className="game_div">
        <p>{turn} turn</p>
      </div>
      <CardList />
      <Result />
    </Layout>
  );
}

export default Game;
