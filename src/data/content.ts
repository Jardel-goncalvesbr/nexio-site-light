export const WHATSAPP_URL = "https://wa.me/5519971722551";

export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "FAQ" },
];

export const clientLogos = [
  "FARIAS", "RÁDIO SINTONIA", "PROAÇO", "MADECH", "ROYAL CICLO",
  "HEBEN", "CLICK SOLUÇÕES", "MCA", "SALVIERO",
];

export interface CardItem {
  icon: string;
  title: string;
  text: string;
}

export const servicesCards: CardItem[] = [
  { icon: "globe", title: "Registro de Domínio", text: "Cuidamos da burocracia do seu endereço na web. Você não precisa se preocupar com nada." },
  { icon: "cloud", title: "Hospedagem Premium", text: "Servidores de alta velocidade com 99,9% de uptime e certificado SSL inclusos." },
  { icon: "mail", title: "E-mails Profissionais", text: "Contas personalizadas com o seu domínio para passar mais confiança." },
  { icon: "code", title: "Desenvolvimento & Design", text: "Site exclusivo criado do zero na nossa tecnologia. Nada de templates genéricos." },
  { icon: "wrench", title: "Manutenção Proativa", text: "Atualizações, segurança e performance monitoradas continuamente por nosso time." },
  { icon: "link", title: "Integração com Sistemas Internos", text: "Conectamos seu site a CRM, ERP, logística e outras ferramentas do seu processo." },
];

export const momentsCards: CardItem[] = [
  { icon: "sparkle", title: "Criar o primeiro site da empresa", text: "Sua empresa passa a ter um endereço profissional na internet, com informações claras e a imagem à altura do seu trabalho." },
  { icon: "refresh", title: "Modernizar um site antigo", text: "Reformulamos sites desatualizados: navegação simples, visual atual e boa experiência no celular." },
  { icon: "rocket", title: "Lançar uma nova solução", text: "Uma página focada na sua novidade, pronta para explicar interesse e abrir novas conversas." },
  { icon: "package", title: "Apresentar produtos e serviços", text: "Suas soluções organizadas de forma clara. Fácil de entender e de encontrar por quem procura." },
  { icon: "shield", title: "Fortalecer a credibilidade da marca", text: "Site rápido, seguro e bem apresentado, transmitindo mais confiança antes do primeiro contato comercial." },
  { icon: "chat", title: "Transformar visitas em conversas", text: "Caminhos diretos para contato por WhatsApp, telefone ou formulário, transformando visitas em próximos passos comerciais." },
];

export const techCards: CardItem[] = [
  { icon: "gear", title: "Nexio Stack — Tecnologia Exclusiva", text: "Desenvolvemos nosso próprio framework moderno para criar sites rápidos, organizados e fáceis de evoluir." },
  { icon: "target", title: "Cada Site é Único", text: "Nada de template pronto. Cada projeto é criado do zero conforme a identidade e os objetivos específicos do seu negócio." },
  { icon: "bolt", title: "98% de PageSpeed", text: "Sites extremamente leves e otimizados para o Google. Carregam em menos de 2 segundos." },
  { icon: "puzzle", title: "Painel Nexio Digital", text: "Gerencie seu site com nosso painel exclusivo. Simples, seguro e sem depender de plugins ou atualizações externas." },
];

export const powerfulCards: CardItem[] = [
  { icon: "chart", title: "Meta Pixel", text: "Eventos de conversão rastreados automaticamente no Facebook e Instagram." },
  { icon: "plug", title: "API de Conversão", text: "Dados de conversão server-side para mais precisão nas campanhas." },
  { icon: "tag", title: "Google Tag Manager", text: "Tags centralizadas e organizadas para acelerar o crescimento." },
  { icon: "search", title: "SEO Nativo", text: "Meta tags, schema markup e estrutura pronta para buscadores." },
  { icon: "lock", title: "LGPD Compliance", text: "Banner de cookies, política de privacidade e conformidade com a lei." },
  { icon: "shield", title: "Segurança Avançada", text: "SSL, proteção contra ataques e monitoramento contínuo do servidor." },
  { icon: "bolt", title: "Velocidade Extrema", text: "Score 90+ no PageSpeed. Carregamento instantâneo para não perder conversas." },
  { icon: "mobile", title: "100% Responsivo", text: "Layout adaptado para celular, tablet e desktop, com experiência em qualquer tela." },
];

export const resultsCards: CardItem[] = [
  { icon: "target", title: "Clareza para sua marca", text: "Uma presença digital organizada para explicar seu negócio com rapidez e transmitir profissionalismo desde o primeiro acesso." },
  { icon: "bolt", title: "Performance como prioridade", text: "Estrutura leve, responsiva e preparada para evoluir com boas práticas de carregamento e experiência em qualquer tela." },
  { icon: "chat", title: "Mais caminhos para conversar", text: "CTAs diretos ao WhatsApp, telefone ou formulário, prontos para transformar interesse em próximos passos comerciais." },
];

export interface PortfolioItem {
  tag: string;
  name: string;
  url: string;
  gradient: string;
}

export const portfolioItems: PortfolioItem[] = [
  { tag: "Transportadora", name: "Ludvig", url: "www.ludvig.com.br", gradient: "from-[#0e0e0e] to-[#1c1c1c]" },
  { tag: "Educação", name: "CFC Motocar", url: "www.cfcmotocar.com.br", gradient: "from-[#111] to-black" },
  { tag: "Indústria", name: "ICAVI", url: "www.icavi.com.br", gradient: "from-[#0d1b1e] to-[#132c30]" },
  { tag: "Serviços", name: "Cunha Tecnologia", url: "www.cunhatecnologia.com.br", gradient: "from-[#0f2027] to-[#203a43]" },
  { tag: "Imobiliário", name: "Conquista Imóveis", url: "www.conquistaimoveis.com.br", gradient: "from-[#2c0b0e] to-[#3d1116]" },
  { tag: "Indústria", name: "Proaço", url: "www.proaco.com.br", gradient: "from-[#0d1b1e] to-[#132c30]" },
  { tag: "Parque", name: "Complexo do Louvor", url: "www.complexodolouvor.com.br", gradient: "from-[#111] to-black" },
  { tag: "Bicicletaria", name: "Royal Ciclo", url: "www.royalciclo.com.br", gradient: "from-[#0c2d1d] to-[#12472e]" },
  { tag: "Serviços", name: "Lucon Instalações Elétricas", url: "www.luconeletrica.com.br", gradient: "from-[#0c1a1c] to-[#12292c]" },
  { tag: "Investimentos", name: "VNT Investimentos", url: "www.vntinvestimentos.com.br", gradient: "from-[#2b1a05] to-[#3d2508]" },
  { tag: "Indústria", name: "DGA CV", url: "www.dgacv.com.br", gradient: "from-[#111] to-black" },
];

export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqs: FaqEntry[] = [
  { question: "Quanto tempo leva para colocar um site no ar?", answer: "O prazo varia conforme o escopo do projeto, mas a maioria dos sites institucionais fica pronta em poucas semanas após o alinhamento do conteúdo e identidade visual." },
  { question: "A Nexio cuida do domínio e da hospedagem?", answer: "Sim. Cuidamos de todo o registro de domínio, hospedagem premium e certificado SSL, sem que você precise lidar com a parte técnica." },
  { question: "O site funciona bem no celular?", answer: "Sim, todos os sites são 100% responsivos, com layout adaptado para celular, tablet e desktop." },
  { question: "Posso atualizar o conteúdo depois?", answer: "Sim, através do Painel Nexio Digital você mesmo atualiza textos e imagens, sem depender de programador." },
  { question: "Como funciona o primeiro contato?", answer: "Você preenche um briefing rápido e nossa equipe entra em contato pelo WhatsApp para entender sua necessidade, sem formulários burocráticos." },
];

export const footerLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#faq", label: "Perguntas frequentes" },
  { href: "#inicio", label: "Voltar ao topo ↗" },
];
