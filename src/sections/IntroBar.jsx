import { useTranslation } from "react-i18next";
import "../styles/introBar.css";

export default function IntroBar() {
  const { t } = useTranslation();

  return (
    <section className="intro-bar">
      <div className="intro-bar-item reveal-load">
        <span className="comment-data">{t("introBar.commentName")}</span>
        <h4 className="data">{t("introBar.role")}</h4>
      </div>
      <div className="intro-bar-item reveal-load" style={{ "--load-delay": "0.1s" }}>
        <span className="comment-data">{t("introBar.commentStatus")}</span>
        <h4 className="data">{t("introBar.status")}</h4>
      </div>
      <div className="intro-bar-item reveal-load" style={{ "--load-delay": "0.2s" }}>
        <span className="comment-data">{t("introBar.commentLocation")}</span>
        <h4 className="data data-flag">{t("introBar.location")}</h4>
      </div>
    </section>
  );
}
