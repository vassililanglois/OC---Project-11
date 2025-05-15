import { useState, useEffect } from "react";

function Banner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="banner">
      <h1>
        Chez vous,
        {isMobile ? <br /> : " "}
        partout et ailleurs
      </h1>
    </div>
  );
}

export default Banner;
