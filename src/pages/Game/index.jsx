import { useEffect } from "react";
import { useMemoryContext } from "../../context/hooks";
import Layout from "../../components/Layout";
import CardList from "../../components/CardList";
import Result from "../../components/Result";

function Game() {
  const { newGame } = useMemoryContext();
  useEffect(() => {
    newGame();
  }, []);
  return (
    <Layout>
      <CardList />
      <Result />
    </Layout>
  );
}

export default Game;
