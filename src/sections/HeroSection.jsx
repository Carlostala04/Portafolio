import Perfil from "../../public/perfil.png";

export default function HeroSection({ darkMode }) {
  const avatarSrc = darkMode
    ? "/avatar/dark-mode-avatar.png"
    : "/avatar/light-mode-avatar.png";

  return (
    <section className="hero">
      <div className="hero-info">
        <h1 className="hero-name">
          Carlos Tala<span>vera</span>
        </h1>
        <p className="hero-tagline">
          <span className="perfil-bars">//</span>
          Me gusta construir software para el futuro
        </p>
      </div>
      <div className="hero-photo">
        <div className="card-photo">
          <div className="card-face">
            <img src={Perfil} alt="Carlos Talavera" />
          </div>
          <div className="card-behind">
            <img src={avatarSrc} alt="avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
