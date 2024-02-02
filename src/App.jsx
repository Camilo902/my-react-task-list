import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Tareas from "../components/Tareas";
import SobreNosotros from "../components/SobreNosotros";
import Menu from "../components/Menu";

function App() {
  return (
    <Router>
      <div>
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
