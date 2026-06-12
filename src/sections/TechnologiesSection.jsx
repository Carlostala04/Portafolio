import CardTechnology from "../components/CardTechnology";
import HtmlIcon from "../assets/favicon/tecnologies/HtmlIcon";
import CssIcon from "../assets/favicon/tecnologies/CssIcon";
import JsIcon from "../assets/favicon/tecnologies/JsIcon";
import ReactIcon from "../assets/favicon/tecnologies/ReactIcon";
import JavaIcon from "../assets/favicon/tecnologies/JavaIcon";
import NestJsIcon from "../assets/favicon/tecnologies/NestJs";
import ExpressIcon from "../assets/favicon/tecnologies/ExpressIcon";
import SupaBaseIcon from "../assets/favicon/tecnologies/SupaBaseIcon";
import GithubIcon from "../assets/favicon/github_icon";
import GitIcon from "../assets/favicon/tecnologies/GitIcon";
import ClaudeIcon from "../assets/favicon/tecnologies/ClaudeIcon";

export default function TechnologiesSection() {
  return (
    <section className="technologies">
      <h2>Tecnologías y herramientas</h2>
      <div className="technologies-grid">
        <CardTechnology title="Frontend">
          <HtmlIcon />
          <CssIcon />
          <JsIcon />
          <ReactIcon />
        </CardTechnology>
        <CardTechnology title="Backend">
          <JavaIcon />
          <NestJsIcon />
          <ExpressIcon />
        </CardTechnology>
        <CardTechnology title="Tools">
          <SupaBaseIcon />
          <GithubIcon />
          <GitIcon />
          <ClaudeIcon />
        </CardTechnology>
      </div>
    </section>
  );
}
