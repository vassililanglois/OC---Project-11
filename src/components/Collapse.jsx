import { useRef, useState, useEffect } from "react";

function Collapse({ title, text, type }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const content = contentRef.current;
    const container = containerRef.current;

    if (!container || !content) return;

    if (isOpen) {
      container.style.maxHeight = content.scrollHeight + 60 + "px";
    } else {
      container.style.maxHeight = "60px";
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`${type}-collapse collapse ${isOpen ? "open" : ""}`}
      style={{
        overflow: "hidden",
        maxHeight: "60px",
        transition: "max-height 0.3s ease",
      }}
    >
      <div className="collapse-header">
        <h1>{title}</h1>
        <svg
          onClick={toggleCollapse}
          className={`arrow ${isOpen ? "rotated" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,1)"
        >
          <path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
        </svg>
      </div>
      <div ref={contentRef} className="collapse-content">
        <div>{text}</div>
      </div>
    </div>
  );
}

export default Collapse;
