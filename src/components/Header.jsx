export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">Егор Нохрин</div>

        <nav className="nav-menu">
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>

        <a href="#contact" className="btn btn-secondary btn-sm">
          Связаться
        </a>
      </div>
    </header>
  );
}