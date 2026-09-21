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
