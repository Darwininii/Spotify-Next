import React from "react";

const Boton = ({ text, color, link, textColor = "text-white" }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button
        className={`${color} ${textColor} font-bold py-2 px-6 rounded-full mx-2 transition-transform transform hover:scale-105`}
      >
        {text}
      </button>
    </a>
  );
};
export default Boton;
