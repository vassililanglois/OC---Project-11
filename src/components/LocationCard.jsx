import { useNavigate } from "react-router-dom";

function LocationCard({ id, cover, title }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}`); // Redirige vers la page avec l'ID
  };
  return (
    <div
      className="location-card"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${cover})`,
      }}
      onClick={handleClick}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default LocationCard;
