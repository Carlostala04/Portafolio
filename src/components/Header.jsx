import { useState } from "react";
import { useTranslation } from "react-i18next";
import Sun from "../assets/favicon/sun_icon";
import Moon from "../assets/favicon/moon_icon";
import "../styles/header.css";

export default function Header({ toggleTheme, darkMode }) {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="name">
        <span className="square" />
        <h4>Carlos Talavera</h4>
      </div>

      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-bar${menuOpen ? " open" : ""}`}>
        <ul className="item-list">
          <li className="item">
            <a className="link" href="#about" onClick={closeMenu}>
              {t("nav.about")}
            </a>
          </li>
          <li className="item">
            <a className="link" href="#projects" onClick={closeMenu}>
              {t("nav.projects")}
            </a>
          </li>
          <li className="item">
            <a className="link" href="#technologies" onClick={closeMenu}>
              {t("nav.stacks")}
            </a>
          </li>
          <li className="item">
            <a className="link" href="#contact" onClick={closeMenu}>
              {t("nav.contact")}
            </a>
          </li>
        </ul>
      </nav>

      <div className="action-buttons">
        <div className="language-buttons">
          <button
            onClick={() => handleLang("en")}
            className={i18n.language === "en" ? "active" : ""}
          >
            EN
          </button>
          <button
            onClick={() => handleLang("es")}
            className={i18n.language === "es" ? "active" : ""}
          >
            ES
          </button>
        </div>
        <div className="theme-button">
          <button onClick={toggleTheme}>
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  );
}
