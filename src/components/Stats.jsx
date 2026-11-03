export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        <div className="stat-card">
          <div className="stat-number">19 лет</div>
          <div className="stat-label">Возраст</div>
          <p className="stat-text">Живу в Барнауле, учусь и развиваюсь в IT.</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">РПО</div>
          <div className="stat-label">Специальность</div>
          <p className="stat-text">Разработка программного обеспечения — учёба в колледже.</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">Зал</div>
          <div className="stat-label">Спорт</div>
          <p className="stat-text">Регулярные тренировки — дисциплина и энергия для учёбы.</p>
        </div>

        <div className="stat-card">
          <div className="stat-number">React</div>
          <div className="stat-label">Стек</div>
          <p className="stat-text">Изучаю современный фронтенд: React, JS, CSS.</p>
        </div>
      </div>
    </section>
  );
}