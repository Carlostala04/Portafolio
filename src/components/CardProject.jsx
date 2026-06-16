import { useState } from "react";
import { useTranslation } from "react-i18next";
import LinkIcon from "../assets/favicon/link_icon";
import GithubIcon from "../assets/favicon/tecnologies/GitHubIcon";
import "../styles/cardProject.css";
import "../styles/svg.css";

export default function CardProject({
  images,
  title,
  descriptionKey,
  technologies,
  repository,
  preview,
  onOpen,
}) {
  const { t } = useTranslation();
  const [imgIdx, setImgIdx] = useState(0);
  const wrap = (i, len) => ((i % len) + len) % len;

  return (
    <article className="card-project" onClick={onOpen}>
      <div className="card-project-image">
        <div className="carousel">
          <img src={images[imgIdx]} alt={title} />
          {images.length > 1 && (
            <>
              <button
                className="carousel-btn carousel-btn--prev"
                onClick={(e) => { e.stopPropagation(); setImgIdx(i => wrap(i - 1, images.length)); }}
              >‹</button>
              <button
                className="carousel-btn carousel-btn--next"
                onClick={(e) => { e.stopPropagation(); setImgIdx(i => wrap(i + 1, images.length)); }}
              >›</button>
              <div className="carousel-dots">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`carousel-dot${idx === imgIdx ? " active" : ""}`}
                    onClick={(e) => { e.stopPropagation(); setImgIdx(idx); }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="card-project-description">
        <h4>{title}</h4>
        <p>{t(descriptionKey)}</p>
      </div>

      <div className="card-project-technologies">
        {technologies.map(({ Icon, name }) => (
          <div className="tech" key={name}>
            <Icon />
          </div>
        ))}
      </div>

      <div className="card-project-actions">
        <a
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <GithubIcon />
          {t("projects.repository")}
        </a>
        {preview !== "#" && (
          <a
            href={preview}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <LinkIcon />
            {t("projects.preview")}
          </a>
        )}
      </div>
    </article>
  );
}
