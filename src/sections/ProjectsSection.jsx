import CardProject from "../components/CardProject";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <CardProject key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
