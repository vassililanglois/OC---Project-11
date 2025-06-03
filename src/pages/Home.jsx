import Banner from "../components/Banner";
import LocationCard from "../components/LocationCard";
import { getAllLocations } from "../data/locations";

function Home() {
  const locations = getAllLocations();
  return (
    <div className="home">
      <Banner />
      <div className="locations-container">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            id={location.id}
            cover={location.cover}
            title={location.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
