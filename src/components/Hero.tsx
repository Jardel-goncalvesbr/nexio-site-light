export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
      {/* Tag de destaque */}
      <span className="text-purple-600 font-semibold text-sm tracking-wide uppercase mb-3">
        Nexio Digital · Experiências Web
      </span>
      
      {/* Título Principal */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight max-w-3xl leading-tight mb-6">
        Desenvolvimento de Sites Institucionais para Empresas
      </h1>
      
      {/* Subtítulo */}
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
        Sites personalizados, rápidos e profissionais para empresas que querem fortalecer sua presença digital e gerar novas oportunidades.
      </p>
      
      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a href="#contato" className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-colors shadow-lg shadow-purple-600/20">
          Quero meu site institucional ↗
        </a>
        <a href="#portfolio" className="bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium px-6 py-3 rounded-lg border border-gray-200 transition-colors">
          Ver Portfólio ›
        </a>
      </div>
      
      {/* Aviso do WhatsApp */}
      <p className="text-sm text-gray-500 flex items-center gap-2">
        💬 Nossa equipe entra em contato pelo WhatsApp. Você não precisa preencher formulário com respostas.
      </p>
    </section>
  );
}
