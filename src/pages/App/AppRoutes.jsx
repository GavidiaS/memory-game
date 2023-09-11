import { useRoutes } from "react-router-dom";
import Home from "../Home";
import Game from "../Game";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", Component: Home },
    { path: "/game", Component: Game },
  ]);
  return routes;
}

export default AppRoutes;
