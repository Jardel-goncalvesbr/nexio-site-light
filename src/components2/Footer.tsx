import { WHATSAPP_URL, footerLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-borderc bg-white px-6 pb-7 pt-11">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 pb-7 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#inicio" className="flex items-center gap-2 font-poppins text-lg font-bold text-ink">
              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-gradient-to-br from-purple to-purple-dark text-sm font-extrabold text-white">
                N
              </span>
              Nexio <span className="font-normal text-muted">Digital</span>
            </a>
            <p className="mt-3 max-w-[280px] text-sm text-muted">
              Experiências digitais claras, rápidas e profissionais para marcas que querem avançar.
            </p>
          </div>

          <div>
            <h5 className="mb-3.5 text-xs uppercase tracking-wide text-muted">Contato</h5>
            <ul className="space-y-2.5">
              <li className="text-sm text-body">📞 (47) 3054-6446</li>
              <li className="text-sm text-body">✉️ contato@nexiodigital.com.br</li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-body transition-colors hover:text-purple"
                >
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-3.5 text-xs uppercase tracking-wide text-muted">Institucional</h5>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-body transition-colors hover:text-purple">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 border-t border-borderc pt-5 text-xs text-muted">
          <span>&copy; 2026 Nexio Digital. Todos os direitos reservados.</span>
          <span>Atendimento digital em todo o Brasil</span>
        </div>
      </div>
    </footer>
  );
}
