export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо! Я скоро свяжусь с тобой.');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>Давай знакомиться</h2>
          <p>
            Если тебе интересно сотрудничество, учёба, спорт или просто
            хочешь поболтать о коде — пиши.
          </p>
          <ul className="feature-list">
            <li>• Барнаул, Россия</li>
            <li>• Telegram: @your_nick</li>
            <li>• Email: egor@example.com</li>
          </ul>
        </div>

        <div className="contact-form-card">
          <h3>Оставить сообщение</h3>
          <p className="form-subtitle">Отвечу в ближайшее время</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Как тебя зовут?" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Telegram или email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Пара слов о задаче..." rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-secondary btn-block">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}