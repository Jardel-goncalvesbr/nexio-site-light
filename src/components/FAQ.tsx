import { useState } from 'react';

const perguntasFrequentes = [
  {
    id: 1,
    pergunta: "Quanto tempo leva para colocar um site no ar?",
    resposta: "O prazo varia conforme o escopo do projeto, mas a maioria dos sites institucionais fica pronta em poucas semanas após o alinhamento do conteúdo e identidade visual."
  },
  {
    id: 2,
    pergunta: "A Nexio cuida do domínio e da hospedagem?",
    resposta: "Sim. Cuidamos de todo o registro de domínio, hospedagem premium e certificado SSL, sem que você precise lidar com a parte técnica."
  },
  {
    id: 3,
    pergunta: "O site funciona bem no celular?",
    resposta: "Sim, todos os sites são 100% responsivos, com layout adaptado para celular, tablet e desktop."
  }
];

export default function FAQ() {
  // Estado para controlar qual pergunta está aberta (começa com nenhuma = null)
  const [abertoId, setAbertoId] = useState<number | null>(null);

  const alternarPergunta = (id: number) => {
    // Se clicar na que já está aberta, fecha (muda pra null). Se não, abre a nova clicada.
    setAbertoId(abertoId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-purple-600 font-semibold text-sm tracking-wide uppercase block mb-2">Dúvidas Frequentes</span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Perguntas frequentes</h2>
        </div>

        {/* Lista de perguntas usando .map() combinado com Estado */}
        <div className="space-y-4">
          {perguntasFrequentes.map((item) => {
            const estaAberto = abertoId === item.id;
            
            return (
              <div key={item.id} className="bg-white border border-gray-200/60 rounded-xl overflow-hidden shadow-sm transition-colors">
                {/* Botão da Pergunta */}
                <button 
                  onClick={() => alternarPergunta(item.id)}
                  className="w-full text-left px-6 py-4 font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span>{item.pergunta}</span>
                  <span className={`text-xl text-purple-600 transition-transform duration-200 ${estaAberto ? 'rotate-45' : ''}`}>
                    ➕
                  </span>
                </button>

                {/* Bloco de Resposta (SÓ APARECE SE ESTIVER ABERTO) */}
                {estaAberto && (
                  <div className="px-6 pb-5 text-gray-600 text-sm border-t border-gray-50 pt-3 bg-gray-50/50 leading-relaxed">
                    {item.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
