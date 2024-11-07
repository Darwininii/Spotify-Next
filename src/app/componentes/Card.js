import React from "react";
import Boton from "./Boton";

const Card = ({
  title,
  offer,
  benefits,
  buttonText1,
  buttonText2,
  summary,
  colorBorde = "border-blue-500", // Color del borde de la tarjeta
  colorTitulo = "text-white", // Color del título
  colorBoton1 = "bg-blue-500", // Color del primer botón
  colorBoton2 = "bg-gray-700", // Color del segundo botón
  textColorBoton1 = "text-white", // Color del texto del primer botón
  textColorBoton2 = "text-white", // Color del texto del segundo botón
}) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg max-w-sm mx-auto border-4 ${colorBorde}`}
    >
      {/* Título */}
      <h2 className={`text-2xl font-bold mb-2 ${colorTitulo}`}>{title}</h2>
      <p className="text-lg text-gray-400 mb-4">{offer}</p>

      {/* Lista de beneficios */}
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      {/* Botones */}
      <div className="flex flex-col items-center justify-center space-y-2 mb-4">
        {/* Primer botón */}
        <Boton
          text={buttonText1}
          color={colorBoton1}
          link="#"
          textColor={textColorBoton1}
        />

        {/* Segundo botón (solo se renderiza si se pasa buttonText2) */}
        {buttonText2 && (
          <Boton
            text={buttonText2}
            color={colorBoton2}
            link="#"
            textColor={textColorBoton2}
          />
        )}
      </div>

      {/* Resumen de la oferta */}
      <p className="text-sm text-gray-400">{summary}</p>
    </div>
  );
};

export default Card;
