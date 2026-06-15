import { useTranslation } from "react-i18next";
import InfiniteIcon from "../assets/favicon/infinite_icon";
import Button from "../components/Button";
import { useCalculateExperience } from "../hooks/calculateYearsExperience";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/about.css";

export default function AboutSection() {
  const { t } = useTranslation();
  const [ref, visible] = useScrollReveal();
  const experienceYears = useCalculateExperience("2026-05-22");
  const rv = visible ? "reveal visible" : "reveal";

  return (
    <section id="about" className="about" ref={ref}>
      <div className={`section-header ${rv}`}>
        <div className="section-label">
          <div className="section-label-line" />
          <span>{t("about.label")}</span>
        </div>
        <h2 className="about-title">{t("about.title")}</h2>
      </div>

      <div className={`about-content ${rv}`} style={{ "--reveal-delay": "150ms" }}>
        <div className="about-left">
          <h4 className="about-intro-text">
            {t("about.intro_1")}
            <span className="about-accent">{t("about.intro_accent")}</span>
            {t("about.intro_2")}
          </h4>
        </div>

        <div className="about-right">
          <div className="about-body">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>

          <div className="about-cards">
            <article className="about-card">
              <span className="about-card-stat">{experienceYears}</span>
              <span className="about-card-label">{t("about.yearsBuilding")}</span>
            </article>
            <article className="about-card">
              <span className="about-card-stat">
                <InfiniteIcon style={{ fontSize: "2.5rem" }} />
              </span>
              <span className="about-card-label">{t("about.coffeeCups")}</span>
            </article>
          </div>

          <Button title={t("about.downloadCv")} Icon={<span className="icon">↗</span>} />
        </div>
      </div>
    </section>
  );
}
