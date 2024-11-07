"use client";

import { useState } from "react";
import "./MensajeBar.css";

const MensajeBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="notificacion-bar">
      <div className="notContainer">
        <a
          href="https://www.spotify.com/co-en/premium/?ref=jam"
          className="notificacion-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Colombia (English)
        </a>
        <button className="close-button" onClick={handleClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default MensajeBar;
