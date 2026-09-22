import { useState } from "react";
import { faqs, type FaqEntry } from "../data/content";

interface FaqItemProps extends FaqEntry {
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-borderc">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-[0.95rem] font-semibold text-ink"
      >
        {question}
        <span
          className={`flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full border text-purple transition-transform ${
            isOpen ? "rotate-45 border-purple bg-purple-soft" : "border-borderc"
          }`}
        >
          +
        </span>
      </button>
      <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? "200px" : "0px" }}>
        <p className="max-w-lg pb-5 text-sm text-muted">{answer}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="mb-4 block text-xs font-bold uppercase tracking-wide text-purple">Dúvidas Frequentes</span>
          <h2 className="mb-3 font-poppins text-3xl font-extrabold leading-snug text-ink">
            Perguntas <span className="text-purple">frequentes</span>
          </h2>
          <p className="text-body">Informações objetivas para você decidir o próximo passo com mais segurança.</p>
        </div>
        <div>
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
