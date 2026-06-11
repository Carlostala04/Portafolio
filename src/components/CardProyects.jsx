import React from "react";
import LinkIcon from "../assets/favicon/link_icon";
import GitHubIcon from "../assets/favicon/github_icon";
import "../styles/cardProyect.css";
import "../styles/svg.css";

export default function CardProyects({
  imagen,
  titulo,
  descripcion,
  tecnologias,
  repositorio,
  preview,
}) {
  return (
    <article className="card-proyect">
      <div className="card-proyect-image">
        <img src={imagen} alt={titulo} />
      </div>

      <div className="card-proyect-description">
        <h4>{titulo}</h4>
        <p>{descripcion}</p>
      </div>

      <div className="card-proyect-technologies">
        {tecnologias.map(({ Icono }, index) => (
          <div className="tech" key={index}>
            <Icono />
          </div>
        ))}
      </div>

      <div className="card-proyect-actions">
        <a href={repositorio} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
          Repositorio
        </a>
        <a href={preview} target="_blank" rel="noopener noreferrer">
          <LinkIcon />
          Ver preview
        </a>
      </div>
    </article>
  );
}
