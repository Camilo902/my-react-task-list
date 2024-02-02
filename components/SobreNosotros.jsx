import React from "react";
import "../src/SobreNosotros.css";

function SobreNosotros() {
  return (
    <div className="container">
      <h1 className="heading">Acerca de Task List</h1>
      <p>
        Task List es una aplicación diseñada para ayudarte a organizar y gestionar tus tareas diarias de manera eficiente. Algunas de nuestras funcionalidades clave incluyen:
      </p>
      <ul>
        <li>Registro y gestión de tareas diarias.</li>
        <li>Edición y eliminación de tareas según sea necesario.</li>
        <li>Validación de formularios para garantizar información adecuada.</li>
        <li>Orden y filtrado de tareas para una organización personalizada.</li>
        <li>Persistencia de datos utilizando localStorage para recordar tus tareas.</li>
      </ul>
      <p>
        Hemos desarrollado Task List utilizando tecnologías modernas, incluyendo React y React Router para una interfaz de usuario dinámica y una navegación eficiente entre páginas. La gestión del estado y la lógica de la aplicación se realiza con la ayuda de Hooks personalizados para un código limpio y modular.
      </p>
      <p>
        ¡Esperamos que Task List sea la herramienta perfecta para mejorar tu productividad y mantenerte organizado!
      </p>
    </div>
  );
}

export default SobreNosotros;
