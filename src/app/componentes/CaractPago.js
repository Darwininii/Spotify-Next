import React from "react";
import styles from "./CaractPago.module.css";

const CaractPago = () => (
  <div className="text-white mt-8 max-w-4xl mx-auto">
    <div className={`flex items-center ${styles.featureContainer}`}>
      <h3 className="text-2xl font-bold w-1/2 text-center">
        Todos los planes Premium incluyen lo siguiente:
      </h3>
      <ul className="text-gray-400 space-y-2 w-1/2 ml-8">
        <li>✓ Escucha tu música favorita sin anuncios</li>
        <li>✓ Descarga de canciones para disfrutarlas sin conexión</li>
        <li>✓ Escucha canciones en cualquier orden</li>
        <li>✓ Calidad del audio alta</li>
        <li>✓ Escucha lo que quieras con tus amigos, en tiempo real</li>
        <li>✓ Organiza la cola de reproducción</li>
      </ul>
    </div>
  </div>
);

export default CaractPago;
