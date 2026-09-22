import SectionHead from "./SectionHead";
import { portfolioItems } from "../data/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-y border-borderc bg-sectionBg px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Portfólio"
          title={
            <>
              Sites que já desenvolvemos <span className="text-purple">para empresas</span>
            </>
          }
        />
        <p className="-mt-8 mb-10 text-center text-sm text-muted">
          Projetos reais que transformaram a presença digital de empresas e indústrias · +500 projetos entregues
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-2xl border border-borderc bg-white transition-all hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
            >
              <div className={`h-[130px] bg-gradient-to-br ${item.gradient}`} />
              <div className="px-4 py-3.5">
                <span className="mb-1 block text-[0.68rem] font-bold uppercase tracking-wide text-purple">
                  {item.tag}
                </span>
                <h4 className="text-sm font-semibold text-ink">{item.name}</h4>
                <a href={`https://${item.url}`} target="_blank" rel="noopener noreferrer" className="text-xs text-muted">
                  {item.url}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
