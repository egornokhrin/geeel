export default function Services() {
  return (
    <section id="skills" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Чем я занимаюсь</h2>
          <p>Учёба, код и спорт — три составляющие моей жизни</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="card-image-placeholder">Frontend</div>
            <div className="card-body">
              <span className="card-tag">Основное</span>
              <h3>Веб-разработка</h3>
              <p>Верстаю лендинги и пишу интерфейсы на React. Разбираюсь в HTML, CSS, JavaScript.</p>
              <div className="card-price">React • JS • CSS</div>
            </div>
          </div>

          <div className="service-card">
            <div className="card-image-placeholder">Учёба</div>
            <div className="card-body">
              <span className="card-tag">Образование</span>
              <h3>Разработка ПО</h3>
              <p>Учусь на РПО: алгоритмы, базы данных, архитектура приложений и командная работа.</p>
              <div className="card-price">Колледж • Барнаул</div>
            </div>
          </div>

          <div className="service-card">
            <div className="card-image-placeholder">Спорт</div>
            <div className="card-body">
              <span className="card-tag">Дисциплина</span>
              <h3>Тренажёрный зал</h3>
              <p>Регулярные тренировки помогают держать форму, концентрацию и хорошее настроение.</p>
              <div class="card-price">Сила • Выносливость</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}