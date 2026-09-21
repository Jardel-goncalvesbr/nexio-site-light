// 1. Criamos a lista com os dados dos 6 serviços (copiados do site da Nexio)
const listaServicos = [
  {
    id: 1,
    icone: "🌐",
    titulo: "Registro de Domínio",
    descricao: "Cuidamos da burocracia do seu endereço na web. Você não precisa se preocupar com nada."
  },
  {
    id: 2,
    icone: "☁️",
    titulo: "Hospedagem Premium",
    descricao: "Servidores de alta velocidade com 99,9% de uptime e certificado SSL inclusos."
  },
  {
    id: 3,
    icone: "✉️",
    titulo: "E-mails Profissionais",
    descricao: "Contas personalizadas com o seu domínio para passar mais confiança."
  },
  {
    id: 4,
    icone: "💻",
    titulo: "Desenvolvimento & Design",
    descricao: "Site exclusivo criado do zero na nossa tecnologia. Nada de templates genéricos."
  },
  {
    id: 5,
    icone: "🛠️",
    titulo: "Manutenção Proativa",
    descricao: "Atualizações, segurança e performance monitoradas continuamente por nosso time."
  },
  {
    id: 6,
    icone: "🔗",
    titulo: "Integração com Sistemas Internos",
    descricao: "Conectamos seu site a CRM, ERP, logística e outras ferramentas do seu processo."
  }
];

export default function Services() {
  return (
    <section id="servicos" className="bg-gray-50 py-20 px-6 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm tracking-wide uppercase block mb-2">
            Full Service
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Resolvemos tudo para você
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Da infraestrutura ao design, cuidamos de todo o ecossistema técnico da sua presença digital.
          </p>
        </div>

        {/* Grade de Cards usando o .map() */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaServicos.map((servico) => (
            <div 
              key={servico.id} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Ícone */}
              <div className="text-3xl mb-4 bg-purple-50 w-12 h-12 flex items-center justify-center rounded-lg text-purple-600">
                {servico.icone}
              </div>
              
              {/* Título do Serviço */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {servico.titulo}
              </h3>
              
              {/* Descrição do Serviço */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
