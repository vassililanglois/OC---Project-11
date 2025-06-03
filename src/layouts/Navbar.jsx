import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="src/assets/images/logo.png" alt="Logo du site Kasa" />
      </Link>

      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </div>
  );
}

export default Navbar;
