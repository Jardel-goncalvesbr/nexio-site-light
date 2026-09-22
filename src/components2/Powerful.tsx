import SectionHead from "./SectionHead";
import CardGrid from "./CardGrid";
import { powerfulCards } from "../data/content";

export default function Powerful() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Tudo Incluso"
          title={
            <>
              Tenha um site <span className="text-purple">poderoso</span>
            </>
          }
          text="Cada projeto da Nexio Digital já vem equipado com tudo que sua empresa precisa para crescer online com segurança e performance."
        />
        <CardGrid items={powerfulCards} cols={4} />
        <div className="mt-8 text-center">
          <a href="#contato" className="text-sm font-semibold text-purple">
            Quero um site poderoso para minha empresa ↗
          </a>
        </div>
      </div>
    </section>
  );
}
