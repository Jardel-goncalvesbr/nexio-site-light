export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-6 pb-16 pt-24"
      style={{
        background:
          "radial-gradient(circle at 15% 20%, rgba(124,58,237,0.08), transparent 45%), radial-gradient(circle at 90% 60%, rgba(124,58,237,0.06), transparent 50%), #fff",
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1fr_0.95fr]">
        <div>
          <span className="mb-4 block text-xs font-bold uppercase tracking-wide text-purple">
            Nexio Digital · Experiências Web
          </span>
          <h1 className="mb-5 font-poppins text-4xl font-extrabold leading-tight text-ink md:text-5xl">
            Desenvolvimento de <span className="text-purple">Sites Institucionais</span> para Empresas
          </h1>
          <p className="mb-7 max-w-md text-body">
            Sites personalizados, rápidos e profissionais para empresas que querem fortalecer sua presença digital e
            gerar novas oportunidades.
          </p>
          <div className="mb-5 flex flex-wrap gap-3.5">
            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 rounded-xl bg-purple px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(124,58,237,0.28)] transition-all hover:-translate-y-0.5 hover:bg-purple-dark"
            >
              Quero meu site institucional ↗
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-1.5 rounded-xl border border-borderc px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-purple hover:bg-purple-light"
            >
              Ver Portfólio ›
            </a>
          </div>
          <div className="flex max-w-sm items-start gap-2 text-xs text-muted">
            💬 Nossa equipe entra em contato pelo WhatsApp. Você não precisa preencher formulário com respostas.
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[20px] bg-[#0B0B0F] p-6 shadow-[0_30px_70px_rgba(20,10,40,0.25)]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(circle at 30% 30%, rgba(124,58,237,0.35), transparent 60%)" }}
          />
          <div className="relative z-10">
            <div className="mb-3.5 h-[170px] rounded-xl border border-white/10 bg-gradient-to-br from-purple/35 to-white/5" />
            <div className="flex gap-2.5">
              <div className="h-20 flex-1 rounded-[10px] border border-white/10 bg-white/5" />
              <div className="h-20 flex-1 rounded-[10px] border border-white/10 bg-white/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
