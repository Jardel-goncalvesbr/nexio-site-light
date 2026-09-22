import { WHATSAPP_URL } from "../data/content";

export default function WhatsFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[200] inline-flex items-center gap-2 rounded-full bg-whats px-4.5 py-3 text-sm font-bold text-[#0B0B0F] shadow-[0_12px_26px_rgba(37,211,102,0.35)] transition-all hover:-translate-y-1 hover:bg-whatsDark"
    >
      💬 Falar no WhatsApp
    </a>
  );
}
