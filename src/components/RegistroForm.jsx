import { useState } from "react";

const RegistroForm = () => {
  const [formData, setFormData] = useState({
    propietario: "",
    modelo: "",
    placa: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="propietario" placeholder="Propietario" onChange={handleChange} /><br />
      <input type="text" name="modelo" placeholder="Modelo del Vehículo" onChange={handleChange} /><br />
      <input type="text" name="placa" placeholder="Placa" onChange={handleChange} /><br /><br />
      <textarea name="descripcion" placeholder="Descripción del problema" onChange={handleChange} />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistroForm;
