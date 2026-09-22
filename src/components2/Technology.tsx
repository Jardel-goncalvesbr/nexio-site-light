import SectionHead from "./SectionHead";
import CardGrid from "./CardGrid";
import { techCards } from "../data/content";

export default function Technology() {
  return (
    <section id="tecnologia" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Por que a Nexio Digital?"
          title={
            <>
              Um site que passa <span className="text-purple">confiança</span> — e prova de tecnologia
            </>
          }
          text="Primeiro o que o seu cliente percebe: imagem profissional, navegação simples, boa experiência no celular e velocidade. Por trás disso, uma engenharia própria, leve, segura e 100% sob nosso controle."
        />
        <CardGrid items={techCards} cols={2} />
      </div>
    </section>
  );
}
