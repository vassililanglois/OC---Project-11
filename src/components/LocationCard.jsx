import { Link } from "react-router-dom";

export default function LocationCard({ id, cover, title }) {
  return (
    <Link
      to={`/${id}`}
      className="location-card"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${cover})`,
        display: "block", // pour que le lien occupe toute la zone
        color: "inherit",
        textDecoration: "none",
      }}
      aria-label={`Voir la location ${title}`}
    >
      <h2>{title}</h2>
    </Link>
  );
}
