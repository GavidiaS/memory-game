import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">Memory Game</Link>
    </header>
  );
}

export default Header;
