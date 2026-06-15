import { useTranslation } from "react-i18next";
import CardProject from "../components/CardProject";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/projects";
import Code from "../assets/favicon/code_icon";
import "../styles/project.css";

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [ref, visible] = useScrollReveal();

  return (
    <section id="projects" className="projects" ref={ref}>
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
            <CardProject {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
