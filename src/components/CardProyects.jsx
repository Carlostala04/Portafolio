import React from "react";
import LinkIcon from "../assets/favicon/link_icon";
export default function CardProyects({
  url,
  urlGitHub,
  image,
  title,
  description,
}) {
  return (
    <article className="card-proyect">
      <div className="card-proyect-image">
        <img src={image} alt="Imagen de proyecto" />
      </div>
      <div className="card-proyect-description">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="card-proyect-actions">
        <a href={urlGitHub}>Github</a>
        <a href={url}>
          <LinkIcon />
        </a>
      </div>
    </article>
  );
}
