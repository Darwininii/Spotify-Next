import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <Image
            src="/Spotify.svg"
            width={100}
            height={100}
            alt="Imagen de Spotify SVG"
          />
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="#">Premium</Link>
          </li>
          <li>
            <Link href="#">Ayuda</Link>
          </li>
          <li>
            <Link href="#">Descargar</Link>
          </li>
          <li>
            <Link href="#">|</Link>
          </li>
          <li>
            <Link href="#">Registrarse</Link>
          </li>
          <li>
            <Link href="#">Iniciar Sesión</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
