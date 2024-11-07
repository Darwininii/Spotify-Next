import React from "react";
import Boton from "./Boton";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} relative`}>
      <div className={styles.container}>
        <div className={`${styles.background} text-left`}>
          <h1 className="text-3xl md:text-4xl font-bold">
            Disfruta de tu contenido favorito sin límites. Prueba Premium
            Individual gratis durante 2 meses.
          </h1>
          <p className="text-md md:text-lg mt-2">
            Después, solo 16.900 COP/mes. Cancela cuando quieras.
          </p>

          <div className="mt-6 flex space-x-4">
            <Boton
              text="Probrar gratis durante 2 meses"
              color="bg-green-500 hover:bg-green-600"
              link="https://accounts.spotify.com/es-ES/login?continue=https%3A%2F%2Fwww.spotify.com%2Fco-es%2Fpurchase%2Foffer%2F2024-q4-latam-intro-trial-2m%2F%3Fcountry%3DCO"
            />
            <Boton text="Ver planes" color="bg-blue-500 hover:bg-blue-600" />
          </div>

          <p className="text-xs mt-4">
            Solo para Premium Individual. Gratis por 2 meses. Después, cuesta
            COP 16 900 al mes. La oferta solo está disponible si aún no probaste
            Premium. Se aplican{" "}
            <a
              href="https://www.spotify.com/co-es/legal/premium-promotions/"
              className="underline hover:text-gray-300"
            >
              Términos y condiciones
            </a>
            . La oferta termina el 10 de noviembre de 2024.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
