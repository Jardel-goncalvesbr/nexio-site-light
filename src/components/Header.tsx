import { useState } from 'react';

export default function Header() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="container">
        <nav id="mainNav">
          <a href="#inicio" className="logo">
            <span className="logo-mark">N</span> Nexio{" "}
            <span style={{ fontWeight: 400, color: "var(--text-muted)" }}>
              Digital
            </span>
          </a>
          
          {/* Adiciona a classe 'active' se isOpen for verdadeiro */}
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><a href="#servicos" onClick={toggleMenu}>Serviços</a></li>
            <li><a href="#tecnologia" onClick={toggleMenu}>Tecnologia</a></li>
            <li><a href="#portfolio" onClick={toggleMenu}>Portfólio</a></li>
            <li><a href="#resultados" onClick={toggleMenu}>Resultados</a></li>
            <li><a href="#faq" onClick={toggleMenu}>FAQ</a></li>
          </ul>

          <a href="#contato" className="nav-cta">
            Quero meu site institucional ↗
          </a>

          {/* O botão também recebe a classe 'active' para animação do ícone hambúrguer */}
          <button 
            className={`menu-toggle ${isOpen ? 'active' : ''}`} 
            id="menuToggle" 
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
