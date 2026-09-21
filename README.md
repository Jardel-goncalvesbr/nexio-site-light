<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nexio Digital — Experiências Web que fazem sua marca avançar</title>
<meta name="description" content="Sites institucionais personalizados, rápidos e profissionais para empresas que querem fortalecer sua presença digital e gerar novas oportunidades.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root{
    --purple:#7C3AED;
    --purple-dark:#6425C9;
    --purple-light:#F3EEFC;
    --purple-soft:#EDE6FB;
    --text-primary:#15131A;
    --text-secondary:#5B5867;
    --text-muted:#918EA0;
    --border:#ECEAF3;
    --bg-section:#FBFAFE;
    --whats:#25D366;
    --whats-dark:#1EBE59;
    --radius:16px;
  }

  *{box-sizing:border-box; margin:0; padding:0;}
  html{scroll-behavior:smooth;}

  body{
    font-family:'Inter', sans-serif;
    background:#fff;
    color:var(--text-secondary);
    line-height:1.6;
    -webkit-font-smoothing:antialiased;
  }

  h1,h2,h3,.logo{
    font-family:'Poppins', sans-serif;
    color:var(--text-primary);
  }

  a{text-decoration:none; color:inherit;}
  ul{list-style:none;}
  img{max-width:100%; display:block;}

  .container{
    width:100%;
    max-width:1180px;
    margin:0 auto;
    padding:0 24px;
  }

  section{padding:90px 0;}

  /* ---------- NAVBAR ---------- */
  header{
    position:sticky;
    top:0;
    z-index:100;
    background:rgba(255,255,255,0.85);
    backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border);
  }
  nav{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:16px 0;
  }
  .logo{
    display:flex;
    align-items:center;
    gap:8px;
    font-size:1.15rem;
    font-weight:700;
  }
  .logo-mark{
    width:30px; height:30px;
    border-radius:8px;
    background:linear-gradient(135deg,var(--purple),var(--purple-dark));
    display:flex;align-items:center;justify-content:center;
    color:#fff;font-size:.85rem;font-weight:800;
  }
  .nav-links{display:flex; gap:32px;}
  .nav-links a{font-size:.9rem; font-weight:500; color:var(--text-secondary); transition:color .3s;}
  .nav-links a:hover{color:var(--purple);}
  .nav-cta{
    display:inline-flex;
    align-items:center;
    gap:6px;
    background:var(--purple);
    color:#fff !important;
    padding:10px 20px;
    border-radius:10px;
    font-weight:600;
    font-size:.85rem;
    transition:background .3s, transform .3s;
  }
  .nav-cta:hover{background:var(--purple-dark); transform:translateY(-2px);}
  .menu-toggle{
    display:none;
    flex-direction:column;
    gap:5px;
    background:none; border:none; cursor:pointer; padding:6px;
  }
  .menu-toggle span{width:24px; height:2px; background:var(--text-primary);}

  /* ---------- HERO ---------- */
  .hero{
    position:relative;
    padding:100px 0 70px;
    overflow:hidden;
    background:
      radial-gradient(circle at 15% 20%, rgba(124,58,237,0.08), transparent 45%),
      radial-gradient(circle at 90% 60%, rgba(124,58,237,0.06), transparent 50%),
      #fff;
  }
  .hero .container{
    display:grid;
    grid-template-columns:1fr 0.95fr;
    gap:56px;
    align-items:center;
  }
  .eyebrow{
    font-size:.75rem;
    font-weight:700;
    letter-spacing:.06em;
    text-transform:uppercase;
    color:var(--purple);
    margin-bottom:18px;
    display:block;
  }
  .hero h1{
    font-size:2.9rem;
    line-height:1.15;
    font-weight:800;
    margin-bottom:20px;
  }
  .hero h1 .accent{color:var(--purple);}
  .hero p{font-size:1.05rem; max-width:460px; margin-bottom:28px; color:var(--text-secondary);}
  .hero-ctas{display:flex; gap:14px; flex-wrap:wrap; margin-bottom:22px;}

  .btn-primary{
    display:inline-flex;
    align-items:center;
    gap:6px;
    background:var(--purple);
    color:#fff;
    padding:14px 26px;
    border-radius:12px;
    font-weight:600;
    font-size:.92rem;
    border:none;
    cursor:pointer;
    transition:background .3s, transform .3s, box-shadow .3s;
    box-shadow:0 10px 24px rgba(124,58,237,0.28);
  }
  .btn-primary:hover{background:var(--purple-dark); transform:translateY(-2px);}

  .btn-outline{
    display:inline-flex;
    align-items:center;
    gap:6px;
    padding:14px 24px;
    border-radius:12px;
    font-weight:600;
    font-size:.92rem;
    border:1px solid var(--border);
    color:var(--text-primary);
    transition:border-color .3s, background .3s;
  }
  .btn-outline:hover{border-color:var(--purple); background:var(--purple-light);}

  .hero-note{
    display:flex; align-items:flex-start; gap:8px;
    font-size:.8rem; color:var(--text-muted); max-width:380px;
  }

  .hero-visual{
    position:relative;
    border-radius:20px;
    background:#0B0B0F;
    padding:26px;
    box-shadow:0 30px 70px rgba(20,10,40,0.25);
    overflow:hidden;
  }
  .hero-visual::before{
    content:"";
    position:absolute; inset:0;
    background:radial-gradient(circle at 30% 30%, rgba(124,58,237,0.35), transparent 60%);
  }
  .hero-mock{position:relative; z-index:1;}
  .hero-mock .screen{
    height:170px;
    border-radius:12px;
    background:linear-gradient(135deg, rgba(124,58,237,0.35), rgba(255,255,255,0.05));
    border:1px solid rgba(255,255,255,0.08);
    margin-bottom:14px;
  }
  .hero-mock .row{display:flex; gap:10px;}
  .hero-mock .row div{
    flex:1; height:80px; border-radius:10px;
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.08);
  }

  /* logos strip */
  .logos-strip{
    background:var(--bg-section);
    border-top:1px solid var(--border);
    border-bottom:1px solid var(--border);
    padding:30px 0;
  }
  .logos-strip p{
    text-align:center;
    font-size:.72rem;
    letter-spacing:.08em;
    text-transform:uppercase;
    color:var(--text-muted);
    margin-bottom:18px;
  }
  .logos-row{
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    gap:18px;
  }
  .logos-row span{
    font-size:.82rem;
    font-weight:700;
    color:var(--text-muted);
    letter-spacing:.03em;
  }

  /* ---------- SECTION HEAD ---------- */
  .section-head{max-width:640px; margin:0 auto 54px; text-align:center;}
  .section-head .eyebrow{text-align:center;}
  .section-head h2{font-size:2.1rem; margin-bottom:12px; line-height:1.25;}
  .section-head p{color:var(--text-muted); font-size:1rem;}

  /* ---------- CARD GRIDS ---------- */
  .cards-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:20px;}
  .card{
    background:var(--bg-section);
    border:1px solid var(--border);
    border-radius:var(--radius);
    padding:26px;
    transition:border-color .3s, transform .3s, box-shadow .3s;
  }
  .card:hover{border-color:var(--purple); transform:translateY(-3px); box-shadow:0 12px 30px rgba(124,58,237,0.1);}
  .card-icon{
    width:42px; height:42px;
    border-radius:10px;
    background:var(--purple-soft);
    color:var(--purple);
    display:flex; align-items:center; justify-content:center;
    margin-bottom:16px;
    font-size:1.1rem;
  }
  .card h3{font-size:1rem; margin-bottom:8px;}
  .card p{color:var(--text-muted); font-size:.88rem;}

  .cards-grid.cols-4{grid-template-columns:repeat(4,1fr);}

  .center-btn{text-align:center; margin-top:32px;}
  .link-arrow{
    color:var(--purple);
    font-weight:600;
    font-size:.9rem;
  }

  /* ---------- PORTFOLIO ---------- */
  .portfolio{background:var(--bg-section); border-top:1px solid var(--border); border-bottom:1px solid var(--border);}
  .portfolio-sub{
    text-align:center;
    font-size:.85rem;
    color:var(--text-muted);
    margin-top:-30px;
    margin-bottom:40px;
  }
  .portfolio-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
  }
  .portfolio-item{
    background:#fff;
    border:1px solid var(--border);
    border-radius:14px;
    overflow:hidden;
    transition:transform .3s, box-shadow .3s;
  }
  .portfolio-item:hover{transform:translateY(-3px); box-shadow:0 14px 30px rgba(0,0,0,0.08);}
  .portfolio-thumb{
    height:130px;
    background:linear-gradient(135deg, #1a1a1a, #0c0c0c);
  }
  .portfolio-thumb.c1{background:linear-gradient(135deg,#0f2027,#203a43);}
  .portfolio-thumb.c2{background:linear-gradient(135deg,#2c0b0e,#3d1116);}
  .portfolio-thumb.c3{background:linear-gradient(135deg,#0d1b1e,#132c30);}
  .portfolio-thumb.c4{background:linear-gradient(135deg,#0e0e0e,#1c1c1c);}
  .portfolio-thumb.c5{background:linear-gradient(135deg,#0c2d1d,#12472e);}
  .portfolio-thumb.c6{background:linear-gradient(135deg,#0c1a1c,#12292c);}
  .portfolio-thumb.c7{background:linear-gradient(135deg,#2b1a05,#3d2508);}
  .portfolio-thumb.c8{background:linear-gradient(135deg,#111,#000);}
  .portfolio-info{padding:14px 16px;}
  .portfolio-info .tag{
    font-size:.68rem; text-transform:uppercase; letter-spacing:.06em;
    color:var(--purple); font-weight:700; display:block; margin-bottom:4px;
  }
  .portfolio-info h4{font-size:.95rem; margin-bottom:2px;}
  .portfolio-info a{
    font-size:.78rem; color:var(--text-muted);
  }

  /* ---------- FAQ ---------- */
  .faq-wrap{
    display:grid;
    grid-template-columns:0.8fr 1.2fr;
    gap:60px;
    align-items:start;
  }
  .faq-wrap .section-head{text-align:left; margin:0;}
  .faq-item{border-bottom:1px solid var(--border);}
  .faq-question{
    width:100%;
    background:none;
    border:none;
    text-align:left;
    padding:20px 0;
    font-family:'Inter';
    font-size:.95rem;
    font-weight:600;
    color:var(--text-primary);
    cursor:pointer;
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:16px;
  }
  .faq-icon{
    flex-shrink:0;
    width:26px; height:26px;
    border-radius:50%;
    border:1px solid var(--border);
    display:flex; align-items:center; justify-content:center;
    color:var(--purple);
    transition:transform .3s;
  }
  .faq-item.open .faq-icon{transform:rotate(45deg); background:var(--purple-soft); border-color:var(--purple);}
  .faq-answer{max-height:0; overflow:hidden; transition:max-height .35s ease;}
  .faq-answer p{padding-bottom:20px; font-size:.88rem; color:var(--text-muted); max-width:560px;}

  /* ---------- CONTACT ---------- */
  .contact{
    background:linear-gradient(180deg, var(--bg-section), var(--purple-light));
    border-top:1px solid var(--border);
  }
  .contact .container{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:50px;
    align-items:center;
  }
  .contact h2{font-size:2.3rem; line-height:1.2; margin-bottom:16px;}
  .contact h2 .accent{color:var(--purple);}
  .contact p{color:var(--text-secondary); max-width:420px; margin-bottom:20px;}
  .contact-whats{
    display:inline-flex; align-items:center; gap:8px;
    font-weight:600; color:var(--purple); font-size:.92rem;
  }

  form.briefing{
    background:#fff;
    border:1px solid var(--border);
    border-radius:18px;
    padding:28px;
    box-shadow:0 20px 50px rgba(20,10,40,0.08);
    display:flex; flex-direction:column; gap:16px;
  }
  .form-row{display:grid; grid-template-columns:1fr 1fr; gap:16px;}
  label{font-size:.8rem; font-weight:600; color:var(--text-primary); margin-bottom:6px; display:block;}
  input, textarea{
    width:100%;
    background:#fbfaff;
    border:1px solid var(--border);
    border-radius:10px;
    padding:12px 14px;
    color:var(--text-primary);
    font-family:'Inter';
    font-size:.9rem;
    transition:border-color .3s, box-shadow .3s;
  }
  input:focus, textarea:focus{
    outline:none;
    border-color:var(--purple);
    box-shadow:0 0 0 3px rgba(124,58,237,0.12);
  }
  textarea{resize:vertical; min-height:90px;}
  .btn-submit{
    background:var(--purple);
    color:#fff;
    border:none;
    padding:14px;
    border-radius:10px;
    font-weight:600;
    font-size:.92rem;
    cursor:pointer;
    display:flex; align-items:center; justify-content:center; gap:8px;
    transition:background .3s, transform .3s;
  }
  .btn-submit:hover{background:var(--purple-dark); transform:translateY(-2px);}
  .form-status{font-size:.82rem;}
  .form-status.success{color:var(--whats);}

  /* ---------- FOOTER ---------- */
  footer{background:#fff; padding:44px 0 26px; border-top:1px solid var(--border);}
  .footer-grid{
    display:grid;
    grid-template-columns:1.4fr 1fr 1fr;
    gap:40px;
    padding-bottom:28px;
  }
  .footer-brand p{font-size:.85rem; color:var(--text-muted); margin-top:12px; max-width:280px;}
  .footer-col h5{font-size:.75rem; text-transform:uppercase; letter-spacing:.06em; color:var(--text-muted); margin-bottom:14px;}
  .footer-col li{margin-bottom:10px; font-size:.85rem;}
  .footer-col a{color:var(--text-secondary); transition:color .3s;}
  .footer-col a:hover{color:var(--purple);}
  .footer-bottom{
    display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px;
    padding-top:20px; border-top:1px solid var(--border);
    font-size:.78rem; color:var(--text-muted);
  }

  /* WhatsApp floating */
  .whats-float{
    position:fixed; bottom:24px; right:24px; z-index:200;
    display:inline-flex; align-items:center; gap:8px;
    background:var(--whats); color:#0B0B0F; font-weight:700; font-size:.85rem;
    padding:12px 18px; border-radius:30px;
    box-shadow:0 12px 26px rgba(37,211,102,0.35);
    transition:transform .3s, background .3s;
  }
  .whats-float:hover{transform:translateY(-3px); background:var(--whats-dark);}

  /* ---------- RESPONSIVE ---------- */
  @media (max-width:980px){
    .hero .container{grid-template-columns:1fr;}
    .hero-visual{order:-1;}
    .cards-grid, .cards-grid.cols-4{grid-template-columns:1fr 1fr;}
    .portfolio-grid{grid-template-columns:1fr 1fr;}
    .faq-wrap{grid-template-columns:1fr; gap:30px;}
    .contact .container{grid-template-columns:1fr;}
    .footer-grid{grid-template-columns:1fr 1fr;}
  }
  @media (max-width:720px){
    section{padding:60px 0;}
    .nav-links, .nav-cta{display:none;}
    .menu-toggle{display:flex;}
    nav.open .nav-links{
      display:flex; flex-direction:column;
      position:absolute; top:60px; left:0; right:0;
      background:#fff; padding:22px; border-bottom:1px solid var(--border); gap:16px;
    }
    nav.open .nav-cta{display:inline-flex; margin:0 22px 22px;}
    .hero h1{font-size:2.1rem;}
    .cards-grid, .cards-grid.cols-4{grid-template-columns:1fr;}
    .portfolio-grid{grid-template-columns:1fr;}
    .form-row{grid-template-columns:1fr;}
    .footer-grid{grid-template-columns:1fr;}
    .logos-row{justify-content:center;}
  }
  @media (prefers-reduced-motion: reduce){*{transition:none !important;}}
  a:focus-visible, button:focus-visible{outline:2px solid var(--purple); outline-offset:2px;}
</style>
</head>
<body>

<header>
  <div class="container">
    <nav id="mainNav">
      <a href="#inicio" class="logo">
        <span class="logo-mark">N</span>
        Nexio <span style="font-weight:400;color:var(--text-muted)">Digital</span>
      </a>
      <ul class="nav-links">
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#tecnologia">Tecnologia</a></li>
        <li><a href="#portfolio">Portfólio</a></li>
        <li><a href="#resultados">Resultados</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <a href="#contato" class="nav-cta">Quero meu site institucional ↗</a>
      <button class="menu-toggle" id="menuToggle" aria-label="Abrir menu"><span></span><span></span><span></span></button>
    </nav>
  </div>
</header>

<section class="hero" id="inicio">
  <div class="container">
    <div class="hero-text">
      <span class="eyebrow">Nexio Digital · Experiências Web</span>
      <h1>Desenvolvimento de <span class="accent">Sites Institucionais</span> para Empresas</h1>
      <p>Sites personalizados, rápidos e profissionais para empresas que querem fortalecer sua presença digital e gerar novas oportunidades.</p>
      <div class="hero-ctas">
        <a href="#contato" class="btn-primary">Quero meu site institucional ↗</a>
        <a href="#portfolio" class="btn-outline">Ver Portfólio ›</a>
      </div>
      <div class="hero-note">
        💬 Nossa equipe entra em contato pelo WhatsApp. Você não precisa preencher formulário com respostas.
      </div>
    </div>
    <div class="hero-visual">
      <div class="hero-mock">
        <div class="screen"></div>
        <div class="row"><div></div><div></div></div>
      </div>
    </div>
  </div>
</section>

<div class="logos-strip">
  <div class="container">
    <p>Empresas que confiam na Nexio Digital</p>
    <div class="logos-row">
      <span>FARIAS</span><span>RÁDIO SINTONIA</span><span>PROAÇO</span><span>MADECH</span>
      <span>ROYAL CICLO</span><span>HEBEN</span><span>CLICK SOLUÇÕES</span><span>MCA</span><span>SALVIERO</span>
    </div>
  </div>
</div>

<section id="servicos">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Full Service</span>
      <h2>Resolvemos <span style="color:var(--purple)">tudo</span> para você</h2>
      <p>Da infraestrutura ao design, cuidamos de todo o ecossistema técnico da sua presença digital.</p>
    </div>
    <div class="cards-grid">
      <div class="card">
        <div class="card-icon">🌐</div>
        <h3>Registro de Domínio</h3>
        <p>Cuidamos da burocracia do seu endereço na web. Você não precisa se preocupar com nada.</p>
      </div>
      <div class="card">
        <div class="card-icon">☁️</div>
        <h3>Hospedagem Premium</h3>
        <p>Servidores de alta velocidade com 99,9% de uptime e certificado SSL inclusos.</p>
      </div>
      <div class="card">
        <div class="card-icon">✉️</div>
        <h3>E-mails Profissionais</h3>
        <p>Contas personalizadas com o seu domínio para passar mais confiança.</p>
      </div>
      <div class="card">
        <div class="card-icon">💻</div>
        <h3>Desenvolvimento & Design</h3>
        <p>Site exclusivo criado do zero na nossa tecnologia. Nada de templates genéricos.</p>
      </div>
      <div class="card">
        <div class="card-icon">🛠️</div>
        <h3>Manutenção Proativa</h3>
        <p>Atualizações, segurança e performance monitoradas continuamente por nosso time.</p>
      </div>
      <div class="card">
        <div class="card-icon">🔗</div>
        <h3>Integração com Sistemas Internos</h3>
        <p>Conectamos seu site a CRM, ERP, logística e outras ferramentas do seu processo.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Sites Institucionais</span>
      <h2>Sites institucionais para <span style="color:var(--purple)">diferentes momentos</span> da empresa</h2>
      <p>Do primeiro site ao reposicionamento completo: desenvolvemos sites para empresas que precisam ser encontradas, entendidas e escolhidas.</p>
    </div>
    <div class="cards-grid">
      <div class="card">
        <div class="card-icon">✨</div>
        <h3>Criar o primeiro site da empresa</h3>
        <p>Sua empresa passa a ter um endereço profissional na internet, com informações claras e a imagem à altura do seu trabalho.</p>
      </div>
      <div class="card">
        <div class="card-icon">🔄</div>
        <h3>Modernizar um site antigo</h3>
        <p>Reformulamos sites desatualizados: navegação simples, visual atual e boa experiência no celular.</p>
      </div>
      <div class="card">
        <div class="card-icon">🚀</div>
        <h3>Lançar uma nova solução</h3>
        <p>Uma página focada na sua novidade, pronta para explicar interesse e abrir novas conversas.</p>
      </div>
      <div class="card">
        <div class="card-icon">📦</div>
        <h3>Apresentar produtos e serviços</h3>
        <p>Suas soluções organizadas de forma clara. Fácil de entender e de encontrar por quem procura.</p>
      </div>
      <div class="card">
        <div class="card-icon">🛡️</div>
        <h3>Fortalecer a credibilidade da marca</h3>
        <p>Site rápido, seguro e bem apresentado, transmitindo mais confiança antes do primeiro contato comercial.</p>
      </div>
      <div class="card">
        <div class="card-icon">💬</div>
        <h3>Transformar visitas em conversas</h3>
        <p>Caminhos diretos para contato por WhatsApp, telefone ou formulário, transformando visitas em próximos passos comerciais.</p>
      </div>
    </div>
    <div class="center-btn"><a href="#contato" class="btn-primary">Quero meu site institucional ↗</a></div>
  </div>
</section>

<section id="tecnologia">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Por que a Nexio Digital?</span>
      <h2>Um site que passa <span style="color:var(--purple)">confiança</span> — e prova de tecnologia</h2>
      <p>Primeiro o que o seu cliente percebe: imagem profissional, navegação simples, boa experiência no celular e velocidade. Por trás disso, uma engenharia própria, leve, segura e 100% sob nosso controle.</p>
    </div>
    <div class="cards-grid cols-4">
      <div class="card">
        <div class="card-icon">⚙️</div>
        <h3>Nexio Stack — Tecnologia Exclusiva</h3>
        <p>Desenvolvemos nosso próprio framework moderno para criar sites rápidos, organizados e fáceis de evoluir.</p>
      </div>
      <div class="card">
        <div class="card-icon">🎯</div>
        <h3>Cada Site é Único</h3>
        <p>Nada de template pronto. Cada projeto é criado do zero conforme a identidade e os objetivos específicos do seu negócio.</p>
      </div>
      <div class="card">
        <div class="card-icon">⚡</div>
        <h3>98% de PageSpeed</h3>
        <p>Sites extremamente leves e otimizados para o Google. Carregam em menos de 2 segundos.</p>
      </div>
      <div class="card">
        <div class="card-icon">🧩</div>
        <h3>Painel Nexio Digital</h3>
        <p>Gerencie seu site com nosso painel exclusivo. Simples, seguro e sem depender de plugins ou atualizações externas.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Tudo Incluso</span>
      <h2>Tenha um site <span style="color:var(--purple)">poderoso</span></h2>
      <p>Cada projeto da Nexio Digital já vem equipado com tudo que sua empresa precisa para crescer online com segurança e performance.</p>
    </div>
    <div class="cards-grid cols-4">
      <div class="card"><div class="card-icon">📊</div><h3>Meta Pixel</h3><p>Eventos de conversão rastreados automaticamente no Facebook e Instagram.</p></div>
      <div class="card"><div class="card-icon">🔌</div><h3>API de Conversão</h3><p>Dados de conversão server-side para mais precisão nas campanhas.</p></div>
      <div class="card"><div class="card-icon">🏷️</div><h3>Google Tag Manager</h3><p>Tags centralizadas e organizadas para acelerar o crescimento.</p></div>
      <div class="card"><div class="card-icon">🔍</div><h3>SEO Nativo</h3><p>Meta tags, schema markup e estrutura pronta para buscadores.</p></div>
      <div class="card"><div class="card-icon">🔐</div><h3>LGPD Compliance</h3><p>Banner de cookies, política de privacidade e conformidade com a lei.</p></div>
      <div class="card"><div class="card-icon">🛡️</div><h3>Segurança Avançada</h3><p>SSL, proteção contra ataques e monitoramento contínuo do servidor.</p></div>
      <div class="card"><div class="card-icon">⚡</div><h3>Velocidade Extrema</h3><p>Score 90+ no PageSpeed. Carregamento instantâneo para não perder conversas.</p></div>
      <div class="card"><div class="card-icon">📱</div><h3>100% Responsivo</h3><p>Layout adaptado para celular, tablet e desktop, com experiência em qualquer tela.</p></div>
    </div>
    <div class="center-btn"><a href="#contato" class="link-arrow">Quero um site poderoso para minha empresa ↗</a></div>
  </div>
</section>

<section class="portfolio" id="portfolio">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Portfólio</span>
      <h2>Sites que já desenvolvemos <span style="color:var(--purple)">para empresas</span></h2>
    </div>
    <p class="portfolio-sub">Projetos reais que transformaram a presença digital de empresas e indústrias · +500 projetos entregues</p>
    <div class="portfolio-grid">
      <div class="portfolio-item"><div class="portfolio-thumb c4"></div><div class="portfolio-info"><span class="tag">Transportadora</span><h4>Ludvig</h4><a href="#">www.ludvig.com.br</a></div></div>
      <div class="portfolio-item"><div class="portfolio-thumb c8"></div><div class="portfolio-info"><span class="tag">Educação</span><h4>CFC Motocar</h4><a href="#">www.cfcmotocar.com.br</a></div></div>
      <div class="portfolio-item"><div class="portfolio-thumb c3"></div><div class="portfolio-info"><span class="tag">Indústria</span><h4>ICAVI</h4><a href="#">www.icavi.com.br</a></div></div>
      <div class="portfolio-item"><div class="portfolio-thumb c1"></div><div class="portfolio-info"><span class="tag">Serviços</span><h4>Cunha Tecnologia</h4><a href="#">www.cunhatecnologia.com.br</a></div></div>
      <div class="portfolio-item"><div class="portfolio-thumb c2"></div><div class="portfolio-info"><span class="tag">Imobiliário</span><h4>Conquista Imóveis</h4><a href="#">www.conquistaimoveis.com.br</a></div></div>
      <div class="portfolio-item"><div class="portfolio-thumb c3"></div><div class="portfolio-info"><span class="tag">Indústria</span><h4>Proaço</h4><a href="#">www.proaco.com.br</a></div></div>
      <div class="portfolio-item"><div class="portfolio-thumb c8"></div><div class="portfolio-info"><span class="tag">Parque</span><h4>Complexo do Louvor</h4><a href="#">www.complexodolouvor.com.br</a></div></div>
      <div class="portfolio-item"><div class="portfolio-thumb c5"></div><div class="portfolio-info"><span class="tag">Bicicletaria</span><h4>Royal Ciclo</h4><a href="#">www.royalciclo.com.br</a></div></div>
      <div class="portfolio-item"><div class="portfolio-thumb c6"></div><div class="portfolio-info"><span class="tag">Serviços</span><h4>Lucon Instalações Elétricas</h4><a href="#">www.luconeletrica.com.br</a></div></div>
      <div class="portfolio-item"><div class="portfolio-thumb c7"></div><div class="portfolio-info"><span class="tag">Investimentos</span><h4>VNT Investimentos</h4><a href="#">www.vntinvestimentos.com.br</a></div></div>
      <div class="portfolio-item"><div class="portfolio-thumb c8"></div><div class="portfolio-info"><span class="tag">Indústria</span><h4>DGA CV</h4><a href="#">www.dgacv.com.br</a></div></div>
    </div>
  </div>
</section>

<section id="resultados">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Resultados</span>
      <h2>Uma presença digital que <span style="color:var(--purple)">trabalha</span> por você</h2>
      <p>Cada projeto é organizado para tornar sua marca mais clara, acessível e pronta para gerar novas conversas.</p>
    </div>
    <div class="cards-grid">
      <div class="card">
        <div class="card-icon">🎯</div>
        <h3>Clareza para sua marca</h3>
        <p>Uma presença digital organizada para explicar seu negócio com rapidez e transmitir profissionalismo desde o primeiro acesso.</p>
      </div>
      <div class="card">
        <div class="card-icon">⚡</div>
        <h3>Performance como prioridade</h3>
        <p>Estrutura leve, responsiva e preparada para evoluir com boas práticas de carregamento e experiência em qualquer tela.</p>
      </div>
      <div class="card">
        <div class="card-icon">💬</div>
        <h3>Mais caminhos para conversar</h3>
        <p>CTAs diretos ao WhatsApp, telefone ou formulário, prontos para transformar interesse em próximos passos comerciais.</p>
      </div>
    </div>
    <div class="center-btn"><a href="#contato" class="link-arrow">Conversar sobre meu projeto ↗</a></div>
  </div>
</section>

<section id="faq">
  <div class="container">
    <div class="faq-wrap">
      <div class="section-head">
        <span class="eyebrow">Dúvidas Frequentes</span>
        <h2>Perguntas <span style="color:var(--purple)">frequentes</span></h2>
        <p>Informações objetivas para você decidir o próximo passo com mais segurança.</p>
      </div>
      <div class="faq-list">
        <div class="faq-item">
          <button class="faq-question">Quanto tempo leva para colocar um site no ar?<span class="faq-icon">+</span></button>
          <div class="faq-answer"><p>O prazo varia conforme o escopo do projeto, mas a maioria dos sites institucionais fica pronta em poucas semanas após o alinhamento do conteúdo e identidade visual.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-question">A Nexio cuida do domínio e da hospedagem?<span class="faq-icon">+</span></button>
          <div class="faq-answer"><p>Sim. Cuidamos de todo o registro de domínio, hospedagem premium e certificado SSL, sem que você precise lidar com a parte técnica.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-question">O site funciona bem no celular?<span class="faq-icon">+</span></button>
          <div class="faq-answer"><p>Sim, todos os sites são 100% responsivos, com layout adaptado para celular, tablet e desktop.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-question">Posso atualizar o conteúdo depois?<span class="faq-icon">+</span></button>
          <div class="faq-answer"><p>Sim, através do Painel Nexio Digital você mesmo atualiza textos e imagens, sem depender de programador.</p></div>
        </div>
        <div class="faq-item">
          <button class="faq-question">Como funciona o primeiro contato?<span class="faq-icon">+</span></button>
          <div class="faq-answer"><p>Você preenche um briefing rápido e nossa equipe entra em contato pelo WhatsApp para entender sua necessidade, sem formulários burocráticos.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="contact" id="contato">
  <div class="container">
    <div class="contact-info">
      <span class="eyebrow">Pronto para o próximo passo?</span>
      <h2>Seu próximo site <span class="accent">começa com uma boa conversa.</span></h2>
      <p>Conte um pouco sobre sua empresa. A gente responde com clareza, sem compromisso e sem linguagem complicada.</p>
      <a href="https://wa.me/5519971722551" target="_blank" rel="noopener" class="contact-whats">💬 Falar com a Nexio Digital pelo WhatsApp</a>
    </div>
    <form class="briefing" id="briefingForm">
      <div class="form-row">
        <div>
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Como podemos chamar você" required>
        </div>
        <div>
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="voce@empresa.com" required>
        </div>
      </div>
      <div>
        <label for="empresa">Empresa</label>
        <input type="text" id="empresa" name="empresa" placeholder="Nome da sua empresa">
      </div>
      <div>
        <label for="mensagem">Como podemos ajudar?</label>
        <textarea id="mensagem" name="mensagem" placeholder="Conte brevemente sobre seu projeto..."></textarea>
      </div>
      <button type="submit" class="btn-submit">✈️ Enviar briefing</button>
      <p class="form-status" id="formStatus"></p>
    </form>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="#inicio" class="logo"><span class="logo-mark">N</span> Nexio <span style="font-weight:400;color:var(--text-muted)">Digital</span></a>
        <p>Experiências digitais claras, rápidas e profissionais para marcas que querem avançar.</p>
      </div>
      <div class="footer-col">
        <h5>Contato</h5>
        <ul>
          <li>📞 (47) 3054-6446</li>
          <li>✉️ contato@nexiodigital.com.br</li>
          <li><a href="https://wa.me/5519971722551" target="_blank" rel="noopener">💬 WhatsApp</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Institucional</h5>
        <ul>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#faq">Perguntas frequentes</a></li>
          <li><a href="#inicio">Voltar ao topo ↗</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 Nexio Digital. Todos os direitos reservados.</span>
      <span>Atendimento digital em todo o Brasil</span>
    </div>
  </div>
</footer>

<a href="https://wa.me/5519971722551" target="_blank" rel="noopener" class="whats-float">💬 Falar no WhatsApp</a>

<script>
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  document.getElementById('briefingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formStatus').textContent = 'Briefing enviado! Em breve entraremos em contato pelo WhatsApp.';
    document.getElementById('formStatus').classList.add('success');
    e.target.reset();
  });
</script>

</body>
</html>




meu-projeto/
├── .vscode/                     # Configurações do VS Code para o time
│   └── settings.json            # Força o Prettier a formatar ao salvar
├── node_modules/                # Pastas instaladas pelo Node (não mexer)
├── public/                      # Arquivos estáticos puros (não otimizados)
│   ├── favicon.ico              # Ícone da aba do navegador
│   └── robots.txt               # Instruções para o Google Indexar o site
├── src/                         # ONDE TODO O SEU CÓDIGO VIVE
│   ├── assets/                  # Imagens, logos e ícones locais
│   │   ├── logos/               # Logos dos clientes (Proaço, Royal Ciclo, etc.)
│   │   └── icons/               # Ícones dos cards (desenho do servidor, segurança)
│   │
│   ├── components/              # COMPONENTES REUTILIZÁVEIS E SEÇÕES
│   │   ├── ContactForm.tsx      # Seção do formulário de Briefing
│   │   ├── FAQ.tsx              # Sanfona de perguntas e respostas
│   │   ├── Features.tsx         # Seção "Por que a Nexio Digital? / Tudo Incluso"
│   │   ├── Footer.tsx           # Rodapé com links e copyright
│   │   ├── Hero.tsx             # Banner principal (Desenvolvimento de Sites...)
│   │   ├── Navbar.tsx           # Menu de navegação superior
│   │   ├── Partners.tsx         # Faixa com logos das empresas parceiras
│   │   ├── Portfolio.tsx        # Grade com os projetos desenvolvidos
│   │   ├── Services.tsx         # Grade de serviços ("Resolvemos tudo para você")
│   │   └── UseCases.tsx         # Seção "Sites para diferentes momentos"
│   │
│   ├── styles/                  # Organização dos estilos (se não usar Tailwind)
│   │   └── index.css            # CSS Global (fontes, resets e variáveis de cores)
│   │
│   ├── types/                   # Definições de tipos do TypeScript
│   │   └── index.ts             # Tipagem de um Projeto do Portfólio ou de um FAQ
│   │
│   ├── App.tsx                  # Componente Raiz (onde junta todas as seções)
│   ├── main.tsx                 # Ponto de entrada que inicializa o React
│   └── vite-env.d.ts            # Arquivo automático de ambiente do Vite
│
├── .eslintconfig.js             # Configurações de regras do ESLint
├── .gitignore                   # Diz ao Git para ignorar a node_modules
├── index.html                   # O arquivo HTML único onde o React se injeta
├── package.json                 # Lista de dependências e scripts do projeto
├── tsconfig.json                # Configurações de comportamento do TypeScript
└── vite.config.ts               # Configurações do motor do Vite
