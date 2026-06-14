import "../styles/introBar.css";
export default function IntroBar() {
  return (
    <section className="intro-bar">
      <div className="intro-bar-item">
        <span className="comment-data">// Carlos Talavera</span>
        <h4 className="data">Frontend/React</h4>
      </div>
      <div className="intro-bar-item">
        <span className="comment-data">// Status</span>
        <h4 className="data">Disponible · Q3 2026</h4>
      </div>
      <div className="intro-bar-item">
        <span className="comment-data">// Location</span>
        <h4 className="data data-flag">Costa Rica</h4>
      </div>
    </section>
  );
}
