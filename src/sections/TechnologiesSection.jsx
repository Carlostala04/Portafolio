import CardTechnology from "../components/CardTechnology";
import HtmlIcon from "../assets/favicon/tecnologies/HtmlIcon";
import CssIcon from "../assets/favicon/tecnologies/CssIcon";
import JsIcon from "../assets/favicon/tecnologies/JsIcon";
import ReactIcon from "../assets/favicon/tecnologies/ReactIcon";
import JavaIcon from "../assets/favicon/tecnologies/JavaIcon";
import NestJsIcon from "../assets/favicon/tecnologies/NestJs";
import ExpressIcon from "../assets/favicon/tecnologies/ExpressIcon";
import SupaBaseIcon from "../assets/favicon/tecnologies/SupaBaseIcon";
import GithubIcon from "../assets/favicon/tecnologies/GitHubIcon";
import GitIcon from "../assets/favicon/tecnologies/GitIcon";
import ClaudeIcon from "../assets/favicon/tecnologies/ClaudeIcon";
import MysqlIcon from "../assets/favicon/tecnologies/MySqlIcon"
import PostgreSqlIcon from "../assets/favicon/tecnologies/PostgreSqlIcon"

export default function TechnologiesSection() {
  return (
    <section className="technologies">
      <h2>Tecnologías y herramientas</h2>
      <div className="technologies-grid">
        <CardTechnology title="Frontend">
          <HtmlIcon data-tech-name="HTML" />
          <CssIcon data-tech-name="CSS" />
          <JsIcon data-tech-name="JavaScript" />
          <ReactIcon data-tech-name="React" />
        </CardTechnology>
        <CardTechnology title="Backend">
          <JavaIcon data-tech-name="Java" />
          <NestJsIcon data-tech-name="NestJS" />
          <ExpressIcon data-tech-name="Express" />
        </CardTechnology>
        <CardTechnology title={"Data Bases"}>
          <MysqlIcon data-tech-name="MySQl"/>
          <PostgreSqlIcon data-tech-name="PostgreSQL"/>
        </CardTechnology>
        <CardTechnology title="Tools">
          <SupaBaseIcon data-tech-name="Supabase" />
          <GithubIcon data-tech-name="GitHub" />
          <GitIcon data-tech-name="Git" />
          <ClaudeIcon data-tech-name="Claude" />
        </CardTechnology>
      </div>
    </section>
  );
}
