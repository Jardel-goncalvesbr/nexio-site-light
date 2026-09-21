import { useState, FormEvent } from 'react';

export default function ContactForm() {
  // Criamos um estado para guardar todos os campos do formulário de uma vez só
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    mensagem: ''
  });

  const [enviado, setEnviado] = useState(false);

  // Função para disparar quando o usuário clicar no botão de enviar
  const lidarComEnvio = (e: FormEvent) => {
    e.preventDefault(); // Evita que a página recarregue na tela
    
    // Aqui você conectaria com sua API futuramente
    console.log("Dados do Briefing Enviados:", formData);
    
    setEnviado(true);
    
    // Limpa o formulário após enviar
    setFormData({ nome: '', email: '', empresa: '', mensagem: '' });
  };

  return (
    <section id="contato" className="py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        
        {/* Cabeçalho do Formulário */}
        <div className="text-center mb-10">
          <span className="text-purple-600 font-semibold text-sm tracking-wide uppercase block mb-2">Contato</span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Inicie o seu projeto</h2>
          <p className="text-gray-600 mt-2">Preencha os dados abaixo e nosso time entrará em contato para alinhar os detalhes.</p>
        </div>

        {enviado ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center shadow-sm">
            <h3 className="font-bold text-lg mb-1">Briefing recebido com sucesso! 🎉</h3>
            <p className="text-sm">Entraremos em contato com você via WhatsApp nas próximas horas.</p>
          </div>
        ) : (
          <form onSubmit={lidarComEnvio} className="space-y-5">
            {/* Campo Nome */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nome Completo</label>
              <input 
                type="text" 
                required
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-sm transition-all"
                placeholder="Seu nome"
              />
            </div>

            {/* Campo E-mail */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">E-mail Corporativo</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-sm transition-all"
                placeholder="seuemail@empresa.com"
              />
            </div>

            {/* Campo Nome da Empresa */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nome da Empresa</label>
              <input 
                type="text" 
                required
                value={formData.empresa}
                onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-sm transition-all"
                placeholder="Nome da sua marca"
              />
            </div>

            {/* Campo Mensagem */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Fale um pouco sobre o projeto</label>
              <textarea 
                rows={4}
                value={formData.mensagem}
                onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-sm transition-all resize-none"
                placeholder="Gostaria de um site institucional com 5 seções..."
              />
            </div>

            {/* Botão de Enviar */}
            <button 
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition-all shadow-md shadow-purple-600/10"
            >
              Enviar Briefing por E-mail ↗
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
