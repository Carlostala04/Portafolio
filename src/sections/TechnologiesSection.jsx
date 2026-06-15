import { useTranslation } from "react-i18next";
import CardTechnology from "../components/CardTechnology";
import { useScrollReveal } from "../hooks/useScrollReveal";
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
import MysqlIcon from "../assets/favicon/tecnologies/MySqlIcon";
import PostgreSqlIcon from "../assets/favicon/tecnologies/PostgreSqlIcon";
import "../styles/tecnology.css";

export default function TechnologiesSection() {
  const { t } = useTranslation();
  const [ref, visible] = useScrollReveal();

  return (
    <section id="technologies" className="technologies" ref={ref}>
      <div className={`section-header reveal${visible ? " visible" : ""}`}>
        <div className="section-label">
          <div className="section-label-line" />
          <span>{t("technologies.label")}</span>
        </div>
        <h2 className="technologies-title">{t("technologies.title")}</h2>
      </div>
      <div className="technologies-grid">
        {[
          {
            titleKey: "technologies.frontend",
            icons: [
              { Icon: HtmlIcon, name: "HTML" },
              { Icon: CssIcon, name: "CSS" },
              { Icon: JsIcon, name: "JavaScript" },
              { Icon: ReactIcon, name: "React" },
            ],
          },
          {
            titleKey: "technologies.backend",
            icons: [
              { Icon: JavaIcon, name: "Java" },
              { Icon: NestJsIcon, name: "NestJS" },
              { Icon: ExpressIcon, name: "Express" },
            ],
          },
          {
            titleKey: "technologies.databases",
            icons: [
              { Icon: MysqlIcon, name: "MySQL" },
              { Icon: PostgreSqlIcon, name: "PostgreSQL" },
            ],
          },
          {
            titleKey: "technologies.tools",
            icons: [
              { Icon: SupaBaseIcon, name: "Supabase" },
              { Icon: GithubIcon, name: "GitHub" },
              { Icon: GitIcon, name: "Git" },
              { Icon: ClaudeIcon, name: "Claude" },
            ],
          },
        ].map((group, i) => (
          <div
            key={group.titleKey}
            className={`reveal${visible ? " visible" : ""}`}
            style={{ "--reveal-delay": `${i * 100}ms` }}
          >
            <CardTechnology title={t(group.titleKey)}>
              {group.icons.map(({ Icon, name }) => (
                <Icon key={name} data-tech-name={name} />
              ))}
            </CardTechnology>
          </div>
        ))}
      </div>
    </section>
  );
}
