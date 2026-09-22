import SectionHead from "./SectionHead";
import CardGrid from "./CardGrid";
import { servicesCards } from "../data/content";

export default function Services() {
  return (
    <section id="servicos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Full Service"
          title={
            <>
              Resolvemos <span className="text-purple">tudo</span> para você
            </>
          }
          text="Da infraestrutura ao design, cuidamos de todo o ecossistema técnico da sua presença digital."
        />
        <CardGrid items={servicesCards} cols={3} />
      </div>
    </section>
  );
}
