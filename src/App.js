import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import RegistroVehiculo from "./pages/registroVehiculo";
import NavBar from "./components/NavBar";



function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registroVehiculo" element={<RegistroVehiculo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

