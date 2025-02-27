import RegistroForm from "../components/RegistroForm";
import styles from "../styles/Container.module.css";




function RegistroVehiculo() {
  return (
    <div className={styles.container}>
      <h1>Registro de Vehículos</h1>
      <RegistroForm />
    </div>
  );
}

export default RegistroVehiculo;


  