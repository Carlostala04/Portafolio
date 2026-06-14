import InfiniteIcon from "../assets/favicon/infinite_icon";
import Button from "../components/Button";
import { useCalculateExperience } from "../hooks/calculateYearsExperience";
import "../styles/about.css";

export default function AboutSection() {
  const experienceYears = useCalculateExperience("2026-5-22");

  return (
    <section className="about">
      <div className="about-header">
        <div className="about-section-label">
          <div className="about-label-line" />
          <span>01 · SOBRE MÍ</span>
        </div>
        <h2 className="about-title">SOBRE MÍ</h2>
      </div>

      <div className="about-content">
        <div className="about-left">
          <h4 className="about-intro-text">
            Hola, soy Carlos. Frontend developer obsesionado con los{" "}
            <span className="about-accent">detalles</span> que nadie pide pero
            todos sienten.
          </h4>
        </div>

        <div className="about-right">
          <div className="about-body">
            <p>
              Hace cinco años descubrí que construir software me daba la misma
              satisfacción que armar un mueble: ver cómo las piezas encajan y
              todo se sostiene solo. Desde ahí no he parado.
            </p>
            <p>
              Hoy trabajo con React, Node y NestJS construyendo productos web —
              desde dashboards densos hasta landings que tienen que cargar en
              1.2s sobre 3G. Me gusta el lado donde la ingeniería se vuelve
              diseño.
            </p>
            <p>
              Cuando no estoy en el editor: café de especialidad. video juegos,
              hardware y leer documentación por placer (sí, lo dije).
            </p>
          </div>

          <div className="about-cards">
            <article className="about-card">
              <span className="about-card-stat">{experienceYears}</span>
              <span className="about-card-label">AÑOS CONSTRUYENDO</span>
            </article>
            
            <article className="about-card">
              <span className="about-card-stat">
                <InfiniteIcon style={{ fontSize: "2.5rem" }} />
              </span>
              <span className="about-card-label">TAZAS DE CAFÉ</span>
            </article>
          </div>

          <Button title="DESCARGAR CV" Icon={<span className="icon">↗</span>} />
        </div>
      </div>
    </section>
  );
}
