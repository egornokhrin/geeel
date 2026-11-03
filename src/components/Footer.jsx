export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>© {new Date().getFullYear()} Егор Нохрин</div>
        <div>Барнаул • РПО • React</div>
      </div>
    </footer>
  );
}