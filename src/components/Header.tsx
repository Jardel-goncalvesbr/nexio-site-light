const Header = () => {
  return (
    <header>
      <div className="container">
        <nav id="mainNav">
          <a href="#inicio" className="logo">
            <span className="logo-mark">N</span>
            {" "}Nexio{" "}
            <span
              style={{
                fontWeight: 400,
                color: "var(--text-muted)",
              }}
            >
              Digital
            </span>
          </a>

          <ul className="nav-links">
            <li>
              <a href="#servicos">Serviços</a>
            </li>
            <li>
              <a href="#tecnologia">Tecnologia</a>
            </li>
            <li>
              <a href="#portfolio">Portfólio</a>
            </li>
            <li>
              <a href="#resultados">Resultados</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>

          <a href="#contato" className="nav-cta">
            Quero meu site institucional ↗
          </a>

          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;