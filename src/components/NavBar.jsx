import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="/">Inicio</Link>
      <Link className={styles.link} to="/registroVehiculo">Registrar Vehículo</Link>
    </nav>
  );
};

export default Navbar;

