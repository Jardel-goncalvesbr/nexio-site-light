export default function Footer() {
  const anoAtual = new Date().getFullYear(); // Pega automaticamente o ano correto

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Lado Esquerdo - Marca */}
        <div className="text-center md:text-left">
          <span className="text-white font-bold text-lg tracking-tight block mb-1">
            <span className="text-purple-500">N</span> Nexio Digital
          </span>
          <p className="text-xs text-gray-500">Desenvolvimento de soluções web profissionais de alta performance.</p>
        </div>

        {/* Lado Central/Direito - Links Rápidos */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
          <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
          <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
          <li><a href="#contato" className="hover:text-purple-400 font-medium transition-colors">Solicitar Orçamento</a></li>
        </ul>

      </div>

      {/* Faixa Inferior de Direitos Autorais */}
      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-800/60 text-center text-xs text-gray-600">
        &copy; {anoAtual} Nexio Digital. Todos os direitos reservados. Feito com React + TypeScript.
      </div>
    </footer>
  );
}
