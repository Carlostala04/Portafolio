import LinkIcon from "../assets/favicon/link_icon";
import GithubIcon from "../assets/favicon/tecnologies/GitHubIcon";
import "../styles/cardProject.css";
import "../styles/svg.css";

export default function CardProject({ image, title, description, technologies, repository, preview }) {
  return (
    <article className="card-project">
      <div className="card-project-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-project-description">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div className="card-project-technologies">
        {technologies.map(({ Icon, name }) => (
          <div className="tech" key={name}>
            <Icon />
          </div>
        ))}
      </div>

      <div className="card-project-actions">
        <a href={repository} target="_blank" rel="noopener noreferrer">
          <GithubIcon />
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
