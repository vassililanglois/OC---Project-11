import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPicturesById } from "../data/locations";

function Slideshow() {
  const { id } = useParams();

  const pictures = getPicturesById(id);

  const [index, setIndex] = useState(0);

  if (!pictures || pictures.length === 0)
    return <p>Aucune image disponible.</p>;

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <img src={pictures[index]} alt={`Slide ${index + 1}`} />

      {pictures.length > 1 && (
        <>
          <button onClick={prevSlide}>
            <svg
              className="slideshow-arrow left"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" />
            </svg>
          </button>

          <button onClick={nextSlide}>
            <svg
              className="slideshow-arrow right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z" />
            </svg>
          </button>

          <p className="slideshow-counter">
            {index + 1} / {pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Slideshow;
