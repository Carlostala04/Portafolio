import { useState } from "react";
import "./styles/App.cssko";
import Header from "./components/Header";
import Perfil from "../public/perfil.png";
import { useCalculateExperience } from "./hooks/calculateYearsExperience";
function App() {
  const [theme, setTheme] = useState(true);
  const experienceYears = useCalculateExperience("2026-5-22");
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <Header toggleTheme={toggleTheme} darkMode={theme} />
      <section className="introduction-datas">
        <div className="introduction-data">
          <span className="comment-data">// Carlos Talavera</span>
          <h5 className="data">Frontend/React</h5>
        </div>
        <div className="introduction-data">
          <span className="comment-data">// Status</span>
          <h5 className="data">Disponible . Q3 2026</h5>
        </div>
        <div className="introduction-data">
          <span className="comment-data">// Location</span>
          <h5 className="data flag">Nicaragua</h5>
        </div>
      </section>
      <section className="perfil-section">
        <div className="perfil-information">
          <h1 className="perfil-name">
            Carlos Tala<span>vera</span>
          </h1>
          <p className="perfil-description">
            <span className="perfil-bars">//</span>
            Me gusta construir software para el futuro
          </p>
        </div>
        <div className="perfil-photo">
          <div className="card-photo">
            <div className="card-face">
              <img src={Perfil} alt="photo" />
            </div>
            <div className="card-behind">
              <img
                src={
                  theme
                    ? "../public/avatar/dark-mode-avatar.png"
                    : "../public/avatar/light-mode-avatar.png"
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about-me">
        <div className="about-me-introduction">
          <h4>
            Hola, soy Carlos. Frontend developer dandole detalles unicos al
            software del futuro
          </h4>
        </div>
        <div className="about-me-description">
          <p>
            Hace cinco años descubrí que escribir CSS me daba la misma
            satisfacción que armar un mueble: ver cómo las piezas encajan y todo
            se sostiene solo. Desde ahí no he parado.
            <br />
            Hoy trabajo con React,Node y Java construyendo productos web — desde
            dashboards densos hasta landings que tienen que cargar en 1.2s sobre
            3G. Me gusta el lado donde la ingeniería se vuelve diseño.
            <br />
            Cuando no estoy en el editor: café de especialidad, fotografía
            análoga y leer documentación por placer (sí, lo dije).
          </p>
        </div>
        <div className="about-me-cards">
          <article className="about-me-card">
            <h5>
              {experienceYears}
              <span className="sub-title">Desarrollando software</span>
            </h5>
          </article>
          <article className="abou-me-card">
            <h5>
            </h5>
          </article>
        </div>
      </section>
    </>
  );
}

export default App;
