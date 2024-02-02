// Menu.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../src/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/tareas" className="link">
        Tareas
      </Link>
      <Link to="/sobre-nosotros" className="link">
        Sobre Nosotros
      </Link>
    </div>
  );
}

export default Menu;
