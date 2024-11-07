import styles from "./Planes.module.css";

const Plan = () => {
  return (
    <section className={styles.plan}>
      <h2>Siente la diferencia</h2>
      <p>
        Pásate a Premium y disfruta del control total de lo que escuchas.
        Cancela cuando quieras.
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Qué incluye</th>
            <th>Plan Spotify Free</th>
            <th>Planes Premium de Spotify</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Escucha tu música favorita sin anuncios</td>
            <td>—</td>
            <td>✔</td>
          </tr>
          <tr>
            <td>Descarga de canciones para disfrutarlas sin conexión</td>
            <td>—</td>
            <td>✔</td>
          </tr>
          <tr>
            <td>Escucha canciones en cualquier orden</td>
            <td>—</td>
            <td>✔</td>
          </tr>
          <tr>
            <td>Calidad del audio alta</td>
            <td>—</td>
            <td>✔</td>
          </tr>
          <tr>
            <td>Escucha lo que quieras con tus amigos, en tiempo real</td>
            <td>—</td>
            <td>✔</td>
          </tr>
          <tr>
            <td>Organiza la cola de reproducción</td>
            <td>—</td>
            <td>✔</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Plan;
