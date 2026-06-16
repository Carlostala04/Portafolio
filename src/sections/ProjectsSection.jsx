import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import CardProject from "../components/CardProject";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/projects";
import Code from "../assets/favicon/code_icon";
import GithubIcon from "../assets/favicon/tecnologies/GitHubIcon";
import LinkIcon from "../assets/favicon/link_icon";
import "../styles/project.css";
import "../styles/cardProject.css";

const CLOSE_MS = 220;

function ProjectGallery({ images, imgIdx, setImgIdx }) {
  const wrap = (i, len) => ((i % len) + len) % len;
  return (
    <div className="carousel">
      <img src={images[imgIdx]} alt={`screenshot ${imgIdx + 1}`} />
      {images.length > 1 && (
        <>
          <button
            className="carousel-btn carousel-btn--prev"
            onClick={() => setImgIdx(i => wrap(i - 1, images.length))}
          >‹</button>
          <button
            className="carousel-btn carousel-btn--next"
            onClick={() => setImgIdx(i => wrap(i + 1, images.length))}
          >›</button>
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot${idx === imgIdx ? " active" : ""}`}
                onClick={() => setImgIdx(idx)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [ref, visible] = useScrollReveal();

  const [openProject, setOpenProject] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [modalImgIdx, setModalImgIdx] = useState(0);

  const closeProject = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setOpenProject(null);
      setIsClosing(false);
    }, CLOSE_MS);
  }, [isClosing]);

  const handleOpen = useCallback((project) => {
    setModalImgIdx(0);
    setOpenProject(project);
    document.getElementById("projects")?.scrollIntoView({ block: "nearest" });
  }, []);

  useEffect(() => {
    if (!openProject) return;
    const onKey = (e) => { if (e.key === "Escape") closeProject(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openProject, closeProject]);

  useEffect(() => {
    document.body.style.overflow = openProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openProject]);

  return (
    <section
      id="projects"
      className={`projects${openProject ? " has-modal" : ""}`}
      ref={ref}
    >
      <div className={`section-header reveal${visible ? " visible" : ""}`}>
        <div className="section-label">
          <div className="section-label-line" />
          <span>{t("projects.label")}</span>
        </div>
        <div className="projects-section-title">
          <Code />
          <h2>{t("projects.title")}</h2>
        </div>
      </div>

      <div className="projects-container">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={`reveal${visible ? " visible" : ""}`}
            style={{ "--reveal-delay": `${i * 150}ms` }}
          >
            <CardProject {...project} onOpen={() => handleOpen(project)} />
          </div>
        ))}
      </div>

      {openProject && (
        <div
          className={`section-modal${isClosing ? " closing" : ""}`}
          onClick={closeProject}
        >
          <div
            className={`section-modal__inner${isClosing ? " closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeProject} aria-label="Close">
              ×
            </button>

            <div className="modal-gallery">
              <ProjectGallery
                images={openProject.images}
                imgIdx={modalImgIdx}
                setImgIdx={setModalImgIdx}
              />
            </div>

            <div className="modal-info">
              <h3>{openProject.title}</h3>
              <p className="modal-info__desc">{t(openProject.descriptionKey)}</p>

              <div className="modal-info__context">
                <div className="modal-info__block">
                  <span className="modal-info__label">{t("projects.problematica")}</span>
                  <p>{t(openProject.problematicaKey)}</p>
                </div>
                <div className="modal-info__block">
                  <span className="modal-info__label">{t("projects.solucion")}</span>
                  <p>{t(openProject.solucionKey)}</p>
                </div>
              </div>

              <div className="modal-technologies">
                {openProject.technologies.map(({ Icon, name }) => (
                  <div className="tech" key={name}>
                    <Icon />
                    <span>{name}</span>
                  </div>
                ))}
              </div>

              <div className="modal-actions">
                <a href={openProject.repository} target="_blank" rel="noopener noreferrer">
                  <GithubIcon />
                  {t("projects.repository")}
                </a>
                {openProject.preview !== "#" && (
                  <a href={openProject.preview} target="_blank" rel="noopener noreferrer">
                    <LinkIcon />
                    {t("projects.preview")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
