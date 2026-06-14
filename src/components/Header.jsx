import React from "react";
import Sun from "../assets/favicon/sun_icon";
import Moon from "../assets/favicon/moon_icon";
import "../styles/header.css";
export default function Header({ toggleTheme, darkMode }) {
  return (
    <header>
      <div className="name">
        <span className="square"></span>
        <h4>Carlos Talavera</h4>
      </div>

      <nav className="nav-bar">
        <ul className="item-list">
          <li className="item">
            <a className="link" href="">
              Sobre mi
            </a>
          </li>
          <li className="item">
            <a className="link" href="">
              Proyectos
            </a>
          </li>
          <li className="item">
            <a className="link" href="">
              Stacks
            </a>
          </li>
          <li className="item">
            <a className="link" href="">
              Contactame
            </a>
          </li>
        </ul>
      </nav>
      <div className="action-buttons">
        <div className="language-buttons">
          <button>EN</button>
          <button>ES</button>
        </div>
        <div className="theme-button">
          <button onClick={toggleTheme}>{darkMode ? <Sun /> : <Moon />}</button>
        </div>
      </div>
    </header>
  );
}
