import { useEffect } from "react";
import { useMemoryContext } from "../../context/hooks";
import Layout from "../../components/Layout";
import CardList from "../../components/CardList";

function Game() {
  const { newGame } = useMemoryContext();
  useEffect(() => {
    newGame();
  }, []);
  return (
    <Layout>
      <CardList />
    </Layout>
  );
}

export default Game;
