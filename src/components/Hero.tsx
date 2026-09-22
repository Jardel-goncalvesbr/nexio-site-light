const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-text">
          <span className="eyebrow">
            Nexio Digital · Experiências Web
          </span>

          <h1>
            Desenvolvimento de{" "}
            <span className="accent">
              Sites Institucionais
            </span>{" "}
            para Empresas
          </h1>

          <p>
            Sites personalizados, rápidos e profissionais
            para empresas que querem fortalecer sua presença
            digital e gerar novas oportunidades.
          </p>

          <div className="hero-ctas">
            <a href="#contato" className="btn-primary">
              Quero meu site institucional ↗
            </a>

            <a href="#portfolio" className="btn-outline">
              Ver Portfólio ›
            </a>
          </div>

          <div className="hero-note">
            💬 Nossa equipe entra em contato pelo WhatsApp.
            Você não precisa preencher formulário com
            respostas.
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-mock">
            <div className="screen"></div>

            <div className="row">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;