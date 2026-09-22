import SectionHead from "./SectionHead";
import CardGrid from "./CardGrid";
import { momentsCards } from "../data/content";

export default function Moments() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          eyebrow="Sites Institucionais"
          title={
            <>
              Sites institucionais para <span className="text-purple">diferentes momentos</span> da empresa
            </>
          }
          text="Do primeiro site ao reposicionamento completo: desenvolvemos sites para empresas que precisam ser encontradas, entendidas e escolhidas."
        />
        <CardGrid items={momentsCards} cols={3} />
        <div className="mt-8 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 rounded-xl bg-purple px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(124,58,237,0.28)] transition-all hover:-translate-y-0.5 hover:bg-purple-dark"
          >
            Quero meu site institucional ↗
          </a>
        </div>
      </div>
    </section>
  );
}
