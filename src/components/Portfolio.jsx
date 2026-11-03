export default function Portfolio() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h2>Мои проекты</h2>
          <p>Учебные и личные работы, которые я делал сам</p>
        </div>

        <div className="comparison-mockup">
          <div className="comparison-half before">
            <span className="comparison-badge">ДО</span>
            <p>Идея на бумаге</p>
          </div>
          <div className="comparison-divider">⟷</div>
          <div className="comparison-half after">
            <span className="comparison-badge">ПОСЛЕ</span>
            <p>Готовый сайт на React</p>
          </div>
        </div>

        <div className="center-action">
          <a href="#contact" className="btn btn-secondary">
            Обсудить проект →
          </a>
        </div>
      </div>
    </section>
  );
}