import Perfil from "../../public/perfil.png";
import Button from "../components/Button";
import Talk from "../assets/favicon/talk_icon"
import "../styles/hero.css";
export default function HeroSection({ darkMode }) {
  const avatarSrc = darkMode
    ? "/avatar/dark-mode-avatar.png"
    : "/avatar/light-mode-avatar.png";

  return (
    <section className="hero">
      <div className="hero-info">
        <h1 className="hero-name">
          Carlos Tala<span className="key-word">vera</span>
        </h1>
        <p className="hero-tagline">
          <span className="comment-mark">//</span>
          Me gusta construir software para el futuro
        </p>
      </div>
      <div className="card-box">
        <div className="card">
          <div className="card-face">
            <img src={Perfil} />
          </div>
          <div className="card-face card-back">
            <img src={avatarSrc} />
          </div>
        </div>
        
      </div>
      <Button title={"Hablemos"} Icon={<Talk/>}/>
    </section>
  );
}
