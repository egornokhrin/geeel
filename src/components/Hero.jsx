export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <span className="badge">Студент • Разработчик • Спортсмен</span>

        <h1 className="hero-title">
          Привет, я Егор Нохрин. Мне 19, и я делаю сайты и учусь на РПО
        </h1>

        <p className="hero-description">
          Живу в Барнауле, учусь на специальности «Разработка программного обеспечения».
          Хожу в зал, люблю чистый код и понятные интерфейсы. Здесь — мои навыки,
          проекты и контакты.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-secondary">
            Мои проекты
          </a>
          <a href="#contact" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
            Написать мне
          </a>
        </div>
      </div>
    </section>
  );
}