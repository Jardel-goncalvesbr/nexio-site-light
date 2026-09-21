const listaProjetos = [
  { id: 1, categoria: "Transportadora", nome: "Ludvig", link: "://ludvig.com.br", cor: "bg-blue-600" },
  { id: 2, categoria: "Educação", nome: "CFC Motocar", link: "://cfcmotocar.com.br", cor: "bg-red-500" },
  { id: 3, categoria: "Indústria", nome: "ICAVI", link: "://icavi.com.br", cor: "bg-green-600" },
  { id: 4, categoria: "Serviços", nome: "Cunha Tecnologia", link: "://cunhatecnologia.com.br", cor: "bg-slate-700" },
  { id: 5, categoria: "Imobiliário", nome: "Conquista Imóveis", link: "://conquistaimoveis.com.br", cor: "bg-amber-600" },
  { id: 6, categoria: "Indústria", nome: "Proaço", link: "://proaco.com.br", cor: "bg-indigo-600" }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm tracking-wide uppercase block mb-2">Portfólio</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Sites que já desenvolvemos para empresas
          </h2>
          <p className="text-gray-600 mt-3">Projetos reais que transformaram a presença digital de empresas e indústrias.</p>
        </div>

        {/* Grade de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaProjetos.map((projeto) => (
            <div key={projeto.id} className="group border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              {/* "Capa" do site temporária usando cores dinâmicas */}
              <div className={`h-48 ${projeto.cor} flex items-center justify-center text-white font-black text-2xl tracking-widest opacity-90 group-hover:opacity-100 transition-opacity`}>
                {projeto.nome[0]}
              </div>
              {/* Informações */}
              <div className="p-5">
                <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider block mb-1">{projeto.categoria}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{projeto.nome}</h3>
                <p className="text-sm text-gray-500 font-mono hover:text-purple-600 cursor-pointer">{projeto.link}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
