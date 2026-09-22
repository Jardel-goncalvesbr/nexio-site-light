import SectionHead from "./SectionHead";
import CardGrid from "./CardGrid";
import { resultsCards } from "../data/content";

export default function Results() {
  return (
    <section id="resultados" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Resultados"
          title={
            <>
              Uma presença digital que <span className="text-purple">trabalha</span> por você
            </>
          }
          text="Cada projeto é organizado para tornar sua marca mais clara, acessível e pronta para gerar novas conversas."
        />
        <CardGrid items={resultsCards} cols={3} />
        <div className="mt-8 text-center">
          <a href="#contato" className="text-sm font-semibold text-purple">
            Conversar sobre meu projeto ↗
          </a>
        </div>
      </div>
    </section>
  );
}
