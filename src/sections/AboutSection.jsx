import InfiniteIcon from "../assets/favicon/infinite_icon";
import Button from "../components/Button";
import { useCalculateExperience } from "../hooks/calculateYearsExperience";

export default function AboutSection() {
  const experienceYears = useCalculateExperience("2026-5-22");

  return (
    <section className="about">
      <div className="about-intro">
        <h2>Sobre mi</h2>
        <h4>
          Hola, soy Carlos. Frontend developer dándole detalles únicos al
          software del futuro
        </h4>
      </div>
      <div className="about-body">
        <p>
          Hace cinco años descubrí que escribir CSS me daba la misma
          satisfacción que armar un mueble: ver cómo las piezas encajan y todo
          se sostiene solo. Desde ahí no he parado.
          <br />
          Hoy trabajo con React, Node y Java construyendo productos web — desde
          dashboards densos hasta landings que tienen que cargar en 1.2s sobre
          3G. Me gusta el lado donde la ingeniería se vuelve diseño.
          <br />
          Cuando no estoy en el editor: café de especialidad, fotografía análoga
          y leer documentación por placer (sí, lo dije).
        </p>
      </div>
      <div className="about-cards">
        <article className="about-card">
          <h5>
            {experienceYears}
            <span className="sub-title">Desarrollando software</span>
          </h5>
        </article>
        <article className="about-card">
          <InfiniteIcon />
          <span>Tazas de café</span>
        </article>
      </div>
    </section>
  );
}
