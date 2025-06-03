import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not_found">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound;
