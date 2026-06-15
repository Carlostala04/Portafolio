import { useTranslation } from "react-i18next";
import Perfil from "../../public/perfil.png";
import GmailDark from "../assets/favicon/dark-mode-icon/gmail_icon_dark";
import GmailLight from "../assets/favicon/light-mode-icon/gmail_icon_light";
import LinkedInDark from "../assets/favicon/dark-mode-icon/linkedin_icon_dark";
import LinkedInLight from "../assets/favicon/light-mode-icon/linkedin_icon_light";
import GithubIcon from "../assets/favicon/tecnologies/GitHubIcon";
import "../styles/hero.css";
import "../styles/button.css";

export default function HeroSection({ darkMode }) {
  const { t } = useTranslation();
  const avatarSrc = darkMode
    ? "/avatar/dark-mode-avatar.png"
    : "/avatar/light-mode-avatar.png";

  const GmailIcon = darkMode ? GmailDark : GmailLight;
  const LinkedInIcon = darkMode ? LinkedInDark : LinkedInLight;

  return (
    <section id="contact" className="hero">
      <div className="hero-info reveal-load">
        <h1 className="hero-name">
          Carlos Tala<span className="key-word">vera</span>
        </h1>
        <p className="hero-tagline">
          <span className="comment-mark">//</span>
          {t("hero.tagline")}
        </p>

        <div className="hero-contacts reveal-load" style={{ "--load-delay": "0.3s" }}>
          <a href="mailto:carlostala.dev@gmail.com" className="button-default hero-contact-btn">
            <GmailIcon className="hero-contact-icon" />
            carlostala.dev@gmail.com
          </a>
          <a
            href="https://github.com/Carlostala04"
            target="_blank"
            rel="noopener noreferrer"
            className="button-default hero-contact-btn"
          >
            <GithubIcon className="hero-contact-icon" />
            Carlostala04
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-talavera"
            target="_blank"
            rel="noopener noreferrer"
            className="button-default hero-contact-btn"
          >
            <LinkedInIcon className="hero-contact-icon" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="card-box reveal-load" style={{ "--load-delay": "0.2s" }}>
        <div className="card">
          <div className="card-face">
            <img src={Perfil} alt="Carlos Talavera" />
          </div>
          <div className="card-face card-back">
            <img src={avatarSrc} alt="Avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
