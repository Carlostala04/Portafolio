import { useTranslation } from "react-i18next";
import "../styles/footer.css";

const QUOTE = {
  text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  author: "Martin Fowler",
};

export default function FooterSection() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-content">
        <blockquote className="footer-quote">
          <p className="footer-quote-text">"{QUOTE.text}"</p>
          <cite className="footer-quote-author">— {QUOTE.author}</cite>
        </blockquote>
        <p className="footer-rights">{t("footer.rights")}</p>
      </div>
    </footer>
  );
}
