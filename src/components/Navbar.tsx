export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'between',
      alignItems: 'center',
      padding: '1rem 2rem',
      borderBottom: '1px solid #e2e8f0'
    }} className="nav-logo">
      {/* Espaço para o seu Logo */}
      <a href="./" style={{ fontWeight: 'bold', fontSize: '1.25rem', textDecoration: 'none', color: '#1a1a1a' }}>
        Nexio Digital
      </a>

      {/* Links do Menu */}
      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
        <li><a href="#servicos" style={{ textDecoration: 'none', color: '#4a5568' }}>Serviços</a></li>
        <li><a href="#portfolio" style={{ textDecoration: 'none', color: '#4a5568' }}>Portfólio</a></li>
        <li><a href="#faq" style={{ textDecoration: 'none', color: '#4a5568' }}>FAQ</a></li>
      </ul>

      {/* Botão de Ação */}
      <a href="#contato" style={{
        background: '#7c3aed', // Roxo da marca
        color: '#ffffff',
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        textDecoration: 'none'
      }}>
        Quero meu site
      </a>
    </nav>
  );
}
