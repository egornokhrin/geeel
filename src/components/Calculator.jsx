import { useState } from 'react';

export default function Calculator() {
  const [formData, setFormData] = useState({
    topic: 'Сотрудничество',
    contact: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо!\nТема: ${formData.topic}\nКонтакт: ${formData.contact}`);
  };

  return (
    <section id="feedback" className="calculator-section">
      <div className="container calc-container">
        <div className="calc-info">
          <h2>Хочешь связаться или предложить проект?</h2>
          <p>
            Заполни короткую форму — я отвечу, как только освобожусь после учёбы
            или тренировки.
          </p>
          <ul className="feature-list">
            <li>✔ <b>Быстро:</b> отвечаю в течение дня</li>
            <li>✔ <b>Просто:</b> без лишних формальностей</li>
            <li>✔ <b>По делу:</b> обсуждаем только реальные задачи</li>
          </ul>
        </div>

        <div className="calc-card">
          <h3>Короткая форма</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Тема</label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              >
                <option value="Сотрудничество">Сотрудничество</option>
                <option value="Проект">Заказать проект</option>
                <option value="Вопрос">Просто вопрос</option>
                <option value="Другое">Другое</option>
              </select>
            </div>

            <div className="form-group">
              <label>Контакт (Telegram, email или телефон)</label>
              <input
                type="text"
                placeholder="@username или email"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Сообщение</label>
              <textarea
                rows="3"
                placeholder="Пара слов о задаче..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
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