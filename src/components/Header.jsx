import React from "react";
import Sun from "../assets/favicon/sun_icon";
import Moon from "../assets/favicon/moon_icon";
export default function Header({toggleTheme, darkMode}) {
  return (
    <header>
      <h4>Carlos Talavera</h4>
      <ul>
        <li>
          <a href="">Sobre mi</a>
        </li>
        <li>
          <a href="">Stack</a>
        </li>
        <li>
          <a href="">Proyectos</a>
        </li>
        <li>
          <a href="">Experiencia</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
      </ul>
      <div className="language-buttons">
        <button>EN</button>
        <button>ES</button>
      </div>
      <button onClick={toggleTheme}>{darkMode ? <Sun /> : <Moon />}</button>
    </header>
  );
}
