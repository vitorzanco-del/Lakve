"use strict";

/* ============================================================
   CATEGORIAS (classes completas do Tailwind para cada cor)
   ============================================================ */
const CATEGORIES = {
  cnc:   { label: "Torno CNC",          icon: "fa-gear",  text: "text-cyan-400",  bar: "border-l-cyan-400",  soft: "bg-cyan-400/10" },
  web:   { label: "Frontend & Backend", icon: "fa-code",  text: "text-blue-400",  bar: "border-l-blue-400",  soft: "bg-blue-400/10" },
  senai: { label: "Projeto SENAI",      icon: "fa-video", text: "text-amber-400", bar: "border-l-amber-400", soft: "bg-amber-400/10" }
};

/* ============================================================
   BASE DE CONHECIMENTO
   ============================================================ */
const DATA = [
  /* ---------- Torno CNC ---------- */
  {
    id: "cnc-o-que-e",
    cat: "cnc",
    title: "O que é um torno CNC?",
    summary: "Máquina que faz a peça girar e a molda com uma ferramenta de corte comandada por computador.",
    details: `
      <p>O torno é uma máquina-ferramenta que prende uma peça (o material bruto) e a faz girar em alta rotação, enquanto uma ferramenta de corte remove material até se obter a forma desejada.</p>
      <p>Com o comando numérico computadorizado (CNC), esses movimentos deixam de ser manuais e passam a ser executados por um programa. É a máquina indicada para peças cilíndricas ou de revolução: eixos, buchas, pinos, roscas e polias.</p>`,
    tags: ["torno cnc", "usinagem", "pecas cilindricas", "comando numerico"]
  },
  {
    id: "cnc-automacao",
    cat: "cnc",
    title: "Como funciona a automação computadorizada?",
    summary: "Um programa define cada movimento e o comando da máquina executa-o com precisão.",
    details: `
      <p>CNC significa Comando Numérico Computadorizado. O operador (ou um software CAM) escreve um programa, normalmente em código G, com as posições, velocidades e avanços da ferramenta. O comando lê cada linha e aciona os motores da máquina.</p>
      <ul>
        <li><strong>Repetibilidade:</strong> a milésima peça sai igual à primeira.</li>
        <li><strong>Precisão:</strong> tolerâncias na ordem dos centésimos de milímetro.</li>
        <li><strong>Segurança:</strong> o operador acompanha o processo atrás da proteção da máquina.</li>
      </ul>`,
    tags: ["automacao", "codigo g", "programa", "precisao"]
  },
  {
    id: "cnc-eixos",
    cat: "cnc",
    title: "Eixos X e Z: como a ferramenta se move",
    summary: "O eixo X controla o diâmetro da peça e o eixo Z controla o comprimento.",
    details: `
      <p>O torno trabalha com dois eixos principais:</p>
      <ul>
        <li><strong>Eixo X (diâmetro):</strong> movimento transversal da ferramenta, que se aproxima ou se afasta do centro da peça. Define o diâmetro final.</li>
        <li><strong>Eixo Z (comprimento):</strong> movimento ao longo da peça, paralelo ao eixo da árvore. Define o comprimento e a posição dos cortes.</li>
      </ul>
      <p>Um desbaste combina os dois: o eixo X ajusta a profundidade de corte e o eixo Z percorre o comprimento da peça.</p>`,
    tags: ["eixo x", "eixo z", "diametro", "comprimento"]
  },
  {
    id: "cnc-ihm",
    cat: "cnc",
    title: "O que é a IHM?",
    summary: "Interface Homem-Máquina: o painel onde o operador comanda o torno.",
    details: `
      <p>A IHM é o painel com ecrã e teclado através do qual o operador conversa com o torno. Normalmente permite:</p>
      <ul>
        <li>Carregar, editar e simular programas</li>
        <li>Definir o zero da peça e corrigir as ferramentas</li>
        <li>Acompanhar as coordenadas dos eixos X e Z em tempo real</li>
        <li>Ler alarmes e parar a máquina em caso de problema</li>
      </ul>`,
    tags: ["ihm", "painel", "operador"]
  },
  {
    id: "cnc-materiais",
    cat: "cnc",
    title: "Que materiais são usinados?",
    summary: "Metais e plásticos técnicos, cada um com os seus parâmetros de corte.",
    details: `
      <p>Os materiais mais comuns num torno são:</p>
      <ul>
        <li>Aços carbono e aço inoxidável</li>
        <li>Alumínio, latão, cobre e bronze</li>
        <li>Plásticos técnicos, como nylon, PTFE e acetal</li>
      </ul>
      <p>Cada material exige velocidade de corte, ferramenta e fluido de corte adequados. Os metais produzem cavacos quentes e cortantes, o que justifica as proteções da máquina.</p>`,
    tags: ["materiais", "aco", "aluminio", "latao", "plastico", "cavacos"]
  },

  /* ---------- Frontend & Backend ---------- */
  {
    id: "web-frontend",
    cat: "web",
    title: "O que é o Frontend?",
    summary: "A interface gráfica que o utilizador vê, executada no navegador.",
    details: `
      <p>O frontend é tudo o que o utilizador vê e toca. É executado no navegador do próprio utilizador e é construído com:</p>
      <ul>
        <li><strong>HTML:</strong> a estrutura da página.</li>
        <li><strong>CSS:</strong> a aparência, as cores, o espaçamento e a responsividade.</li>
        <li><strong>JavaScript:</strong> a interação e o comportamento.</li>
        <li><strong>React:</strong> biblioteca JavaScript para montar interfaces em componentes reutilizáveis.</li>
      </ul>`,
    tags: ["frontend", "html", "css", "javascript", "react", "navegador", "interface"]
  },
  {
    id: "web-backend",
    cat: "web",
    title: "O que é o Backend?",
    summary: "O servidor que aplica as regras de negócio e guarda os dados.",
    details: `
      <p>O backend corre no servidor, longe dos olhos do utilizador. Aplica as regras de negócio, valida os dados recebidos e guarda a informação.</p>
      <ul>
        <li><strong>Bases de dados:</strong> MySQL e PostgreSQL.</li>
        <li><strong>Linguagens e plataformas:</strong> Node.js, Python e Java.</li>
      </ul>
      <p>O utilizador nunca fala diretamente com a base de dados: é o backend que decide o que pode ser lido ou gravado.</p>`,
    tags: ["backend", "servidor", "regras de negocio", "mysql", "postgresql", "nodejs", "python", "java"]
  },
  {
    id: "web-comunicacao",
    cat: "web",
    title: "Como o Frontend e o Backend se comunicam?",
    summary: "O frontend faz pedidos a uma API e o backend responde com dados.",
    details: `
      <p>O frontend envia pedidos HTTP a uma API e o backend responde, normalmente em formato JSON. O frontend usa essa resposta para atualizar o ecrã sem recarregar a página.</p>
      <p>Exemplo: o navegador pede a lista de tópicos, o servidor consulta a base de dados e devolve a resposta.</p>`,
    tags: ["frontend x backend", "api", "http", "json", "integracao"]
  },

  /* ---------- Projeto SENAI ---------- */
  {
    id: "senai-objetivo",
    cat: "senai",
    title: "Qual é o objetivo do projeto?",
    summary: "Ver a usinagem num monitor remoto, sem ir até à máquina.",
    details: `
      <p>Permitir que o professor veja a usinagem num monitor remoto, sem ter de se deslocar até à máquina. A imagem também pode ser transmitida para a turma através de um projetor, para que todos acompanhem o corte.</p>`,
    tags: ["objetivo", "visualizacao remota", "monitor", "projetor", "professor", "turma"]
  },
  {
    id: "senai-camera",
    cat: "senai",
    title: "Como é protegida a câmara?",
    summary: "Uma caixa com vidro acrílico protege a câmara de cavacos, calor e fluido de corte.",
    details: `
      <p>A câmara fica dentro de uma caixa de proteção com vidro acrílico. O vidro permite filmar e protege o equipamento contra:</p>
      <ul>
        <li>Cavacos quentes de metal projetados pelo corte</li>
        <li>Temperaturas elevadas na zona de usinagem</li>
        <li>Fluido de corte pulverizado</li>
      </ul>`,
    tags: ["camera", "acrilico", "protecao", "cavacos", "fluido de corte"]
  },
  {
    id: "senai-lakave",
    cat: "senai",
    title: "Equipa Lakave",
    summary: "Documentação do projeto para o GitHub.",
    details: `
      <p>Responsável pela documentação do projeto, que é organizada e publicada no GitHub.</p>
      <ul>
        <li>Documentação de todas as equipas</li>
        <li>Organização da documentação de cada equipa</li>
        <li>Site para conhecer melhor o projeto</li>
        <li>Envio da documentação para um repositório no GitHub (veja a aba Documentações de equipa)</li>
      </ul>`,
    tags: ["equipas", "lakave", "documentacao", "github", "repositorio", "site", "git"]
  },
  {
    id: "senai-comunic",
    cat: "senai",
    title: "Equipa ComunicCNC",
    summary: "Servidor, integração frontend x backend e ligação Bluetooth/rede.",
    details: `
      <p>Responsável pela parte de software que liga tudo:</p>
      <ul>
        <li>Servidor</li>
        <li>Integração entre frontend e backend</li>
        <li>Ligação por Bluetooth e por rede</li>
        <li>Documentação do sistema ConecTorno (veja a aba Documentações de equipa)</li>
      </ul>`,
    tags: ["equipas", "comuniccnc", "conectorno", "documentacao", "servidor", "bluetooth", "rede", "backend", "frontend x backend"]
  },
  {
    id: "senai-thirteentech",
    cat: "senai",
    title: "Equipa ThirteenTech",
    summary: "Entrevistas com o professor, medições físicas e organização no Trello.",
    details: `
      <p>Responsável pelo levantamento de requisitos e pela organização do trabalho:</p>
      <ul>
        <li>Entrevistas com o professor</li>
        <li>Medições físicas</li>
        <li>Organização das tarefas no Trello</li>
        <li>Documentação da entrevista (veja a aba Documentações de equipa)</li>
      </ul>`,
    tags: ["equipas", "thirteentech", "entrevistas", "medicoes", "trello", "documentacao", "prancheta"]
  },
  {
    id: "senai-axion",
    cat: "senai",
    title: "Equipa Axión",
    summary: "Impressão 3D da caixa do Raspberry Pi, sistema operativo e suporte VESA.",
    details: `
      <p>Responsável pela parte física do equipamento:</p>
      <ul>
        <li>Impressão 3D da caixa do Raspberry Pi</li>
        <li>Instalação do sistema operativo (operacional) no Raspberry Pi</li>
        <li>Montagem do suporte VESA no monitor</li>
        <li>Documentação técnica do projeto (veja a aba Documentações de equipa)</li>
      </ul>`,
    tags: ["equipas", "axion", "impressao 3d", "raspberry pi", "sistema operacional", "vesa", "documentacao", "wifi", "hotspot", "ssh"]
  },
  {
    id: "senai-neonix",
    cat: "senai",
    title: "Equipa Neonix",
    summary: "Protótipo do site e roteiro do vídeo de apresentação.",
    details: `
      <p>Responsável pela comunicação do projeto:</p>
      <ul>
        <li>Protótipo do site</li>
        <li>Roteiro do vídeo de apresentação</li>
        <li>Relatório de atividades (veja a aba Documentações de equipa)</li>
      </ul>`,
    tags: ["equipas", "neonix", "prototipo", "site", "video", "roteiro", "figma", "trello", "relatorio", "documentacao"]
  },
  {
    id: "senai-materiais",
    cat: "senai",
    title: "Lista de materiais",
    summary: "Nove itens, do Raspberry Pi ao filtro de linha.",
    details: `
      <ul>
        <li>Raspberry Pi</li>
        <li>Cartão microSD de 32 GB</li>
        <li>Fonte oficial</li>
        <li>Monitor VESA</li>
        <li>Suporte VESA</li>
        <li>Cabo HDMI</li>
        <li>Caixa com vidro acrílico</li>
        <li>Filtro de linha</li>
        <li>Botões grandes com jumpers</li>
      </ul>`,
    tags: ["materiais", "raspberry pi", "microsd", "vesa", "hdmi", "filtro de linha", "botoes", "jumpers", "acrilico"]
  }
];

/* ============================================================
   ESTADO E ELEMENTOS
   ============================================================ */
const state = { cat: "all", query: "", open: new Set() };

const els = {
  grid:    document.querySelector("#grid"),
  search:  document.querySelector("#search"),
  clear:   document.querySelector("#clear"),
  status:  document.querySelector("#status"),
  empty:   document.querySelector("#empty"),
  reset:   document.querySelector("#reset"),
  filters: document.querySelector("#filters")
};

// Estilo do texto expandido (listas, parágrafos, negrito)
const DETAIL_CLASSES =
  "mx-4 border-t border-slate-700/60 pb-1 pt-4 text-slate-300 " +
  "[&_p]:mb-3 [&_p]:max-w-[68ch] [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 " +
  "[&_li]:my-1 [&_li]:max-w-[68ch] [&_strong]:font-semibold [&_strong]:text-white";

/* ============================================================
   PESQUISA
   ============================================================ */
// Minúsculas e sem acentos: "acrílico" e "acrilico" são equivalentes.
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const stripHTML = (s) => s.replace(/<[^>]*>/g, " ");
const escapeRegex = (s) => s.replace(/[.*+?^${}()[\]\\]/g, "\\$&");

// Texto pesquisável de cada item: título, resumo, detalhes e tags.
DATA.forEach((item) => {
  item.haystack = norm([item.title, item.summary, stripHTML(item.details), item.tags.join(" ")].join(" "));
});

// Cada palavra pesquisada tem de aparecer no início de alguma palavra do texto.
function buildMatchers(query) {
  return norm(query)
    .replace(/#/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => new RegExp("(^|[^a-z0-9])" + escapeRegex(word)));
}

/* ============================================================
   RENDERIZAÇÃO
   ============================================================ */
function cardHTML(item) {
  const c = CATEGORIES[item.cat];
  const open = state.open.has(item.id);
  const tags = item.tags
    .map((t) => `<button type="button" data-tag="${t}" class="tag rounded-md border border-slate-700/60 px-2 py-0.5 font-mono text-xs text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/10">#${t}</button>`)
    .join("");

  return `
    <article class="card rounded-xl border border-l-4 border-slate-700/60 ${c.bar} bg-[#101a2e]" data-id="${item.id}">
      <button type="button" class="card-head flex w-full items-start gap-4 p-4 text-left" aria-expanded="${open}" aria-controls="body-${item.id}">
        <span class="grid h-10 w-10 flex-none place-items-center rounded-lg ${c.soft} ${c.text}" aria-hidden="true"><i class="fa-solid ${c.icon}"></i></span>
        <span class="min-w-0 flex-1">
          <span class="block text-sm font-medium ${c.text}">${c.label}</span>
          <span class="mt-0.5 block font-['Barlow_Semi_Condensed',sans-serif] text-xl font-semibold leading-snug text-white">${item.title}</span>
          <span class="mt-1.5 block text-[0.95rem] text-slate-400">${item.summary}</span>
        </span>
        <i class="chev fa-solid fa-chevron-down mt-2 flex-none text-slate-400 transition-transform duration-300 ${open ? "rotate-180" : ""}" aria-hidden="true"></i>
      </button>
      <div id="body-${item.id}" class="card-body grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}">
        <div class="min-h-0 overflow-hidden"><div class="${DETAIL_CLASSES}">${item.details}</div></div>
      </div>
      <div class="tags flex flex-wrap gap-1.5 p-4 pt-3">${tags}</div>
    </article>`;
}

function render() {
  const matchers = buildMatchers(state.query);
  const list = DATA.filter((item) =>
    (state.cat === "all" || item.cat === state.cat) &&
    matchers.every((re) => re.test(item.haystack))
  );

  els.grid.innerHTML = list.map(cardHTML).join("");
  els.empty.hidden = list.length > 0;
  els.clear.hidden = state.query === "";
  els.status.textContent = `${list.length} de ${DATA.length} tópicos`;
}

function updateFilterButtons() {
  els.filters.querySelectorAll("[data-cat]").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.cat === state.cat));
  });
}

function fillCounts() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const c = el.dataset.count;
    el.textContent = c === "all" ? DATA.length : DATA.filter((i) => i.cat === c).length;
  });
}

/* ============================================================
   AÇÕES
   ============================================================ */
function toggleCard(card) {
  const id = card.dataset.id;
  const open = !state.open.has(id);
  if (open) state.open.add(id); else state.open.delete(id);

  card.querySelector(".card-head").setAttribute("aria-expanded", String(open));
  const body = card.querySelector(".card-body");
  body.classList.toggle("grid-rows-[1fr]", open);
  body.classList.toggle("grid-rows-[0fr]", !open);
  card.querySelector(".chev").classList.toggle("rotate-180", open);
}

function setQuery(value) {
  state.query = value;
  els.search.value = value;
  render();
}

function applyTag(tag) {
  state.cat = "all";
  updateFilterButtons();
  setQuery(tag);
  els.search.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetAll() {
  state.cat = "all";
  updateFilterButtons();
  setQuery("");
  els.search.focus();
}

/* ============================================================
   EVENTOS
   ============================================================ */
els.search.addEventListener("input", (e) => {
  state.query = e.target.value;
  render();
});

els.search.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setQuery("");
});

els.clear.addEventListener("click", () => {
  setQuery("");
  els.search.focus();
});

els.reset.addEventListener("click", resetAll);

els.filters.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  state.cat = btn.dataset.cat;
  updateFilterButtons();
  render();
});

// Delegação: hashtags pesquisam; o resto do card abre e fecha.
els.grid.addEventListener("click", (e) => {
  const tag = e.target.closest(".tag");
  if (tag) {
    applyTag(tag.dataset.tag);
    return;
  }
  if (e.target.closest(".card-body") || e.target.closest(".tags")) return;
  const card = e.target.closest(".card");
  if (card) toggleCard(card);
});

/* ============================================================
   INÍCIO
   ============================================================ */
fillCounts();
render();

/* ============================================================
   DOCUMENTAÇÕES DE EQUIPA
   Para acrescentar o documento de outra equipa, crie uma entrada
   em DOCS com o id da equipa: lakave, comunic, thirteentech,
   axion ou neonix.
   Blocos: p, h3, ul, ol, table, note, code, qa (perguntas e respostas). Use `código` e **negrito**.
   ============================================================ */
const DOCS = {
  comunic: {
    kicker: "Documentação do sistema",
    title: "ConecTorno",
    subtitle: "Site de comunicação e acompanhamento de monitores para uso com o servidor existente no Raspberry Pi.",
    meta: [
      ["Objetivo", "Explicar o funcionamento do site, seus recursos, a comunicação com a API e os cuidados de instalação."],
      ["Versão documentada", "Pacote somente do site (frontend), sem servidor próprio, porque o Raspberry já possui um servidor."]
    ],
    source: "Documento técnico, versão frontend. Baseado no pacote ConecTorno_Raspberry_Somente_Site_Sem_Servidor.zip e no arquivo API_COMPATIBILIDADE.md incluído nele.",
    sections: [
      { title: "1. Visão geral", blocks: [
        { p: "O ConecTorno é uma interface web para o professor publicar materiais e acompanhar até seis monitores. O professor acessa um painel protegido por login; cada monitor abre uma tela pública específica, identificada por um número na URL." },
        { note: ["Importante:", "o pacote documentado contém somente os arquivos do site: HTML, CSS, JavaScript, imagem e biblioteca PDF.js. Ele não inclui o servidor Python/Flask, banco de dados, autenticação do backend nem serviço para iniciar a aplicação. Portanto, o funcionamento depende do servidor que já está instalado no Raspberry Pi."] },
        { h3: "Objetivos principais" },
        { ul: [
          "Publicar um PDF ou uma imagem para exibição nos monitores.",
          "Acompanhar o estado dos monitores pelo painel do professor.",
          "Abrir a tela de um monitor específico por um endereço próprio.",
          "Adicionar observações relacionadas a um monitor e removê-las quando necessário.",
          "Gerenciar o acesso do professor por cadastro inicial, login, alteração e recuperação de senha."
        ] }
      ] },
      { title: "2. Componentes do sistema", blocks: [
        { table: { head: ["Componente", "Função"], rows: [
          ["HTML: `static/index.html`", "Estrutura das telas de login, painel do professor e visualização dos monitores."],
          ["CSS: `static/style.css`", "Aparência, organização dos elementos e adaptação visual."],
          ["JavaScript: `static/app.js`", "Controla as ações da interface e envia requisições HTTP para a API do servidor."],
          ["PDF.js: `static/pdfjs/`", "Biblioteca usada para apresentar documentos PDF no navegador."],
          ["Servidor já instalado no Raspberry Pi", "Entrega os arquivos do site, executa a API, valida sessões e processa operações e arquivos enviados."]
        ] } }
      ] },
      { title: "3. Como o sistema funciona", blocks: [
        { h3: "3.1 Primeiro acesso do professor" },
        { p: "Ao abrir o endereço do Raspberry, o site consulta `/api/auth/status` para saber se existe uma configuração de acesso e se há uma sessão válida. No primeiro uso, o professor pode criar usuário e senha; depois disso, normalmente entra com suas credenciais." },
        { h3: "3.2 Painel do professor" },
        { p: "Depois do login, a interface consulta `/api/state` e apresenta o estado disponível no servidor. Pelo painel, o professor pode enviar um PDF ou uma imagem, publicar ou remover um projeto geral, selecionar monitores, limpar a publicação de um monitor e registrar ou apagar observações." },
        { h3: "3.3 Tela de cada monitor" },
        { p: "Cada monitor usa o mesmo site, mas com um identificador na URL. O JavaScript lê esse número e consulta `/api/monitor/<n>/display` para buscar o conteúdo que deve aparecer. Também envia periodicamente uma chamada de presença (heartbeat) para `/api/monitor/<n>/heartbeat`, permitindo ao servidor acompanhar a atividade do monitor." },
        { p: "Exemplos de endereço:" },
        { code: ["http://ENDERECO-DO-RASPBERRY:PORTA/?monitor=1", "http://ENDERECO-DO-RASPBERRY:PORTA/?monitor=2", "… até monitor=6"] },
        { p: "Substitua ENDERECO-DO-RASPBERRY e PORTA pelos valores reais usados atualmente na rede. Não abra o arquivo `index.html` diretamente e não use o Live Server do VS Code para a operação real: o site precisa ser servido pela mesma origem que disponibiliza a API." },
        { h3: "3.4 Envio de arquivos" },
        { p: "O professor escolhe um PDF ou uma imagem no formulário de publicação. O navegador envia o arquivo para `/api/upload`. O servidor precisa armazená-lo e disponibilizar o arquivo por um caminho acessível, normalmente sob `/uploads/...`. A tela de monitor usa os dados retornados pela API para apresentar o material." },
        { h3: "3.5 Senhas e sessão" },
        { p: "A interface possui formulários para criar o acesso inicial, entrar, sair, alterar a senha e solicitar recuperação com código mestre que está com a equipe que o criou. A segurança real depende do backend: validação das credenciais, armazenamento seguro das senhas, proteção da sessão e validação CSRF nas operações administrativas." }
      ] },
      { title: "4. Rotas da API necessárias", blocks: [
        { p: "O JavaScript usa caminhos relativos que começam com `/api/`. O servidor existente precisa implementar rotas equivalentes, aceitar os métodos corretos e devolver JSON no formato esperado pelo frontend." },
        { table: { head: ["Método e rota", "Finalidade"], rows: [
          ["`GET /api/auth/status`", "Verificar configuração de acesso e estado da sessão."],
          ["`POST /api/setup`", "Criar o usuário do primeiro acesso."],
          ["`POST /api/login` e `/api/logout`", "Iniciar e encerrar a sessão do professor."],
          ["`POST /api/change-password`", "Alterar a senha do professor autenticado."],
          ["`POST /api/password/recover`", "Recuperar o acesso com o código mestre."],
          ["`GET /api/state`", "Carregar o estado do painel, projetos e observações."],
          ["`POST /api/upload`", "Receber PDF ou imagem para publicação."],
          ["`POST /api/project/delete`", "Remover a publicação geral."],
          ["`POST /api/monitor/<1-6>/project/reset`", "Limpar a publicação específica de um monitor."],
          ["`POST /api/monitor/<1-6>/note`", "Criar uma observação para um monitor."],
          ["`DELETE /api/monitor/<1-6>/note/<id>`", "Apagar uma observação identificada pelo ID."],
          ["`POST /api/monitor/<1-6>/heartbeat`", "Informar a presença/atividade do monitor."],
          ["`GET /api/monitor/<1-6>/display`", "Consultar o conteúdo destinado ao monitor."]
        ] } }
      ] },
      { title: "5. Requisitos de compatibilidade", blocks: [
        { ul: [
          "A pasta `static` deve ser servida pelo mesmo servidor e endereço que respondem às rotas `/api/...`.",
          "As rotas de monitor `/heartbeat` e `/display` devem aceitar chamadas sem token, pois esta interface não envia token de monitor.",
          "As operações do professor devem continuar protegidas pela sessão e pelo mecanismo CSRF exigido pelo backend.",
          "As respostas devem ser JSON e incluir os campos esperados pela interface, como `ok`, erro/mensagem e os dados do estado, projeto e observações.",
          "Os arquivos enviados e seus links devem continuar disponíveis no Raspberry, normalmente por `/uploads/...`.",
          "Os seis identificadores válidos de monitor são de 1 a 6."
        ] },
        { note: ["Atenção:", "esta documentação descreve o contrato esperado pelo site. Ela não confirma que o `app.py` atualmente instalado no Raspberry já implementa todas as rotas. A compatibilidade deve ser verificada antes da substituição dos arquivos."] }
      ] },
      { title: "6. Instalação segura no Raspberry Pi", blocks: [
        { ol: [
          ["Identificar a pasta do projeto.", "Localize a pasta usada pelo serviço atual do ConecTorno e confirme qual diretório `static` ele publica."],
          ["Fazer backup.", "Copie a pasta `static` atual e mantenha uma cópia dos arquivos de configuração, dados e uploads."],
          ["Conferir a API.", "Compare as rotas do servidor existente com a lista desta documentação. Não presuma compatibilidade apenas porque a página abre."],
          ["Substituir somente o site.", "Se a API for compatível, copie a pasta `static` deste pacote para o local esperado pelo servidor."],
          ["Preservar o backend.", "Não apague nem substitua `app.py`, configurações, dados, autenticação, chave secreta ou uploads."],
          ["Reiniciar o serviço existente.", "Use o procedimento normal de reinicialização do projeto no Raspberry; não inicie um segundo servidor para o mesmo site."],
          ["Testar professor e monitores.", "Abra o endereço habitual, faça login e teste publicação, exibição, observações e os monitores que serão usados."]
        ] }
      ] },
      { title: "7. Diagnóstico de problemas", blocks: [
        { table: { head: ["Sintoma", "Possível causa / verificação"], rows: [
          ["`404` em uma rota `/api/...`", "A API do servidor não possui a rota esperada ou o caminho está diferente."],
          ["`401` ou `403` na tela do monitor", "O backend exige autenticação/token para monitor, ou bloqueia as rotas públicas de heartbeat/display."],
          ["`Failed to fetch`", "Endereço ou porta incorretos, servidor indisponível, falha de rede ou bloqueio do navegador."],
          ["Login funciona, mas publicar/apagar falha", "Verifique sessão, proteção CSRF, permissões e formato de resposta da rota."],
          ["PDF/imagem não aparece", "Confira o resultado do upload, o caminho do arquivo, a rota de exibição e o acesso a `/uploads/`."],
          ["Site abre, mas os dados não atualizam", "A página estática pode estar acessível enquanto a API está indisponível ou incompatível."]
        ] } }
      ] },
      { title: "8. Segurança e manutenção", blocks: [
        { ul: [
          "Não compartilhe senhas nem códigos de recuperação.",
          "Use senhas fortes e altere credenciais padrão, caso existam.",
          "Mantenha o Raspberry e o servidor atualizados e restrinja o acesso à rede conforme a necessidade da escola/oficina.",
          "Faça backup antes de qualquer atualização; teste a restauração dos arquivos importantes.",
          "Não exponha a interface à internet sem revisar autenticação, autorização, CSRF, uploads e configuração de rede.",
          "Registre mudanças de versão e guarde a documentação junto do projeto."
        ] }
      ] },
      { title: "9. Resumo", blocks: [
        { p: "O ConecTorno desta versão é o frontend do sistema. Ele fornece a interface visual e faz requisições para uma API já existente. Para funcionar no Raspberry Pi sem criar outro servidor, o serviço atual precisa servir a pasta `static` e implementar as rotas, permissões e formatos de dados descritos neste documento. Se houver incompatibilidade, a solução é adaptar o frontend ou o backend existente de forma controlada, preservando dados e configurações." }
      ] }
    ]
  },
  neonix: {
    kicker: "Relatório da equipa",
    title: "Relatório Equipe Neonix",
    subtitle: "Protótipo do site e roteiro do vídeo de apresentação.",
    meta: [
      ["Período", "22/10 a 30/10"],
      ["Responsabilidades", "Protótipo do site no Figma, requisitos no Trello e roteiro do vídeo que será apresentado no Mundo SENAI."]
    ],
    source: "Baseado no relatório da equipe (Relatório-Neonix.pdf).",
    sections: [
      { title: "Resumo do andamento", blocks: [
        { table: { head: ["Atividade", "Situação"], rows: [
          ["Documento com ideias e páginas do protótipo", "Concluído (22/10)"],
          ["Tabela no Trello com requisitos funcionais e não funcionais", "Concluído (23/10)"],
          ["Protótipo no Figma", "Concluído (23/10)"],
          ["Roteiro do vídeo", "Concluído (28 a 30/10)"],
          ["Edição das partes já gravadas do vídeo", "Feita até agora"],
          ["Conclusão do vídeo", "Aguardando o projeto ser levado para a sala do torno"]
        ] } }
      ] },
      { title: "Dia 22/10", blocks: [
        { p: "Fizemos um documento contendo ideias para realizar, e as páginas que seriam aplicadas na prototipagem do Figma." }
      ] },
      { title: "Dia 23/10", blocks: [
        { p: "Criamos uma tabela no Trello com os requisitos funcionais e os não funcionais e um protótipo no Figma, contendo:" },
        { ul: [
          "Tela de login",
          "Tela para adicionar o PDF",
          "Tela para monitorar os PCs e enviar alguma informação para o PC selecionado",
          "Por fim, a tela que o aluno irá visualizar"
        ] }
      ] },
      { title: "Dias 28, 29 e 30/10", blocks: [
        { p: "Nesse período realizamos o roteiro do vídeo que será apresentado no Mundo SENAI e criamos um documento detalhado do roteiro. Após isso, começamos a desenvolver o vídeo e editamos as partes já gravadas." },
        { note: ["Pendente:", "estamos aguardando que o projeto seja levado para a sala do torno para a conclusão do nosso vídeo."] }
      ] }
    ]
  },
  thirteentech: {
    kicker: "Entrevista com o professor",
    title: "Entrevista com o professor",
    subtitle: "Perguntas e respostas da entrevista feita pela equipa ThirteenTech para entender como o projeto é consultado durante a usinagem.",
    meta: [
      ["Responsabilidades da equipa", "Entrevistas com o professor, medições físicas e organização no Trello."]
    ],
    source: "Baseado nas respostas registadas na entrevista com o professor.",
    sections: [
      { title: "Resumo das respostas", blocks: [
        { ul: [
          "Hoje o projeto existe em papel, numa prancheta, e também é mostrado no projetor.",
          "O maior problema é que os alunos ao redor não conseguem ver a explicação e, se há uma dúvida, todos têm que parar o que estão fazendo para ir até o projetor.",
          "O monitor ficaria em cima da máquina, onde hoje fica a prancheta.",
          "Só o professor mexe no monitor, e é ele quem coloca o projeto da aula no sistema, no começo da aula.",
          "Há tomada e rede perto da máquina, e pode-se colocar equipamentos em cima dela sem problema."
        ] }
      ] },
      { title: "Como o projeto é consultado hoje", blocks: [
        { qa: [
          ["Que informação vocês precisam olhar durante a usinagem?", "Olhar o roteiro da peça, às vezes um cálculo que o professor irá passar no projetor."],
          ["Como consultam hoje e o que dá errado?", "O professor explica como produzir a peça e deixa o projeto na prancheta. O maior problema é quando o professor está explicando e os alunos que estão em volta não conseguem enxergar. Se houver uma dúvida, todos os alunos têm que parar o que estão fazendo para ir na frente do projetor ver a explicação do professor. Se tiver um monitor em cima do torno, fica mais fácil para o professor explicar para todos e, para cada um dos alunos, ele pode explicar de um jeito diferente para suprir todas as dúvidas."],
          ["Em que formato o projeto existe hoje (papel, PDF, DWG, STEP, foto)?", "Papel, uma prancheta e o projetor, para os alunos observarem o projeto e tirarem dúvidas."],
          ["Em que momento olham o projeto: máquina parada, entre operações, durante o ciclo?", "Tanto com a máquina parada quanto durante o ciclo."]
        ] }
      ] },
      { title: "Onde e como o monitor seria usado", blocks: [
        { qa: [
          ["Onde um monitor ficaria sem cobrir a peça, o painel e o botão de emergência?", "Em cima da máquina, onde atualmente fica a prancheta."],
          ["Com mão suja ou de luva, qual o jeito mais fácil de trocar de página ou dar zoom?", "O aluno não vai precisar mexer no monitor, apenas o professor."],
          ["Quem coloca o projeto da aula no sistema, e quando?", "O professor, no começo da aula."],
          ["Tem tomada e rede perto da máquina? Pode fixar algo nela (prender algum equipamento ou suporte na estrutura do local)?", "Tem tomada e rede, e pode sem problema algum colocar coisas em cima da máquina."]
        ] }
      ] },
      { title: "Rotina do operador", blocks: [
        { qa: [
          ["Em que momentos o operador olha o desenho da peça?", "Ele olha a peça em todos os momentos da aula, pois tem que seguir um passo a passo."],
          ["Onde ele está parado quando olha?", "Ele fica parado na lateral da máquina, onde é o posto de comando."],
          ["O que ele faz com as mãos?", "Ele trabalha com os eixos (eixo X e eixo Y) e manuseia os instrumentos de medida (paquímetro, micrômetro, etc.)."]
        ] }
      ] },
      { title: "Manutenção das máquinas", blocks: [
        { qa: [
          ["As máquinas precisam de manutenção com frequência?", "Precisam, tem um profissional que faz a manutenção das máquinas frequentemente. E também tem um QR code em cada máquina, caso haja algum problema."]
        ] }
      ] }
    ]
  },
  axion: {
    kicker: "Documentação técnica",
    title: "Projeto Conectorno",
    subtitle: "Implementação e configuração dos dispositivos Raspberry Pi 3B+.",
    meta: [
      ["Estado", "SENAI · Em desenvolvimento"],
      ["Responsabilidades da equipa", "Impressão 3D da caixa do Raspberry Pi, instalação do sistema operativo e montagem do suporte VESA no monitor."]
    ],
    source: "Baseado na Documentação Técnica do Projeto Conectorno (SENAI, em desenvolvimento).",
    sections: [
      { title: "1. Preparação física do Raspberry Pi", blocks: [
        { p: "O projeto **Conectorno** utiliza placas **Raspberry Pi 3B+** instaladas individualmente junto a cada torno CNC. O objetivo físico desta etapa é garantir a proteção mecânica, o fluxo térmico adequado para ambientes industriais (com presença de poeira e cavacos) e a fixação segura do hardware." },
        { h3: "1.1 Componentes utilizados e infraestrutura" },
        { ul: [
          "**SBC (Single Board Computer):** Raspberry Pi 3B+ (Broadcom BCM2837B0, Quad-core 1.4 GHz, 1 GB SDRAM).",
          "**Alimentação Elétrica:** fonte chaveada dedicada 5 V / 2.5 A DC via conector Micro-USB.",
          "**Armazenamento:** cartão MicroSD SanDisk Class 10 (16 GB / 32 GB).",
          "**Refrigeração Ativa:** micro-fan 5 V DC (30x30 mm) conectado aos pinos GPIO 4 (5 V) e GPIO 6 (GND).",
          "**Gabinete de Proteção:** caixa personalizada produzida via impressão 3D (FDM, filamento PLA/PETG)."
        ] },
        { note: ["Registro de desenvolvimento:", "as especificações dimensionais definitivas, os pontos de ancoragem mecânica e a geometria final da caixa impressa em 3D ainda estão em desenvolvimento. Protótipos continuam em teste para aperfeiçoar a vedação contra resíduos do processo de usinagem."] }
      ] },
      { title: "2. Montagem dos dispositivos", blocks: [
        { p: "O processo de montagem compreende o posicionamento da placa na base da caixa impressa, a conexão do cooler nos pinos GPIO apropriados e o alinhamento das interfaces de saída (USB, RJ45, Micro-USB) com o gabinete." },
        { h3: "2.1 Dificuldades encontradas na montagem" },
        { ul: [
          "**Tolerância de Impressão 3D:** retrações térmicas no filamento causaram interferências no encaixe do conector Micro-USB e no acesso ao slot do cartão MicroSD.",
          "**Disposição dos Condutores:** o espaço reduzido exigiu rotacionamento e fixação cuidadosa dos fios do cooler para evitar contato mecânico com a hélice."
        ] }
      ] },
      { title: "3. Configuração e testes iniciais", blocks: [
        { p: "Na fase inicial, avaliou-se o uso da tecnologia **Bluetooth** integrada ao Raspberry Pi 3B+ para o envio de documentos e desenhos técnicos de peças entre os computadores de gerenciamento e os monitores dos tornos." },
        { h3: "3.1 Finalidade do sistema: visualização de documentos técnico-operacionais" },
        { p: "O objetivo principal do projeto **Conectorno** é substituir o uso tradicional de pranchetas de papel no chão de fábrica por um sistema digital de visualização. O dispositivo não realiza a gravação ou execução direta de rotinas no comando da máquina CNC; sua função é disponibilizar, diretamente na tela instalada ao lado do torno:" },
        { ul: [
          "**Desenhos Técnicos de Peças:** folhas de instrução visual e cotas dimensionais para orientação durante a usinagem.",
          "**Folhas de Processo e Roteiros:** procedimentos de montagem, sequência de operação e parâmetros de corte recomendados.",
          "**Avisos e Observações do Instrutor/Professor:** orientação personalizada enviada em tempo real para monitores específicos."
        ] },
        { h3: "3.2 Ensaio via Bluetooth e motivos do insucesso" },
        { p: "Durante os testes de envio dos arquivos PDF e imagens via Bluetooth, verificou-se que o método apresentava forte **irregularidade, instabilidade e complexidade operacional** para a rotina da oficina:" },
        { ul: [
          "**Instabilidade de Transmissão:** sinal sujeito a oscilações térmicas e interferências eletromagnéticas do ambiente fabril.",
          "**Dificuldade de Usabilidade:** processo de pareamento e reestabelecimento manual de conexão complexo para os alunos e operadores."
        ] },
        { p: "**Solução adotada:** decidiu-se implementar uma **rede local sem fio (Wi-Fi) isolada**, criada a partir de um Raspberry Pi dedicado configurado como hotspot. Essa abordagem trouxe simplicidade, estabilidade de sinal e perfeita integração com o sistema do grupo **ComunicCNC**." }
      ] },
      { title: "4. Instalação do sistema operacional", blocks: [
        { ol: [
          ["Gravação do Cartão:", "utilização da ferramenta Raspberry Pi Imager para gravação do **Raspberry Pi OS** no MicroSD."],
          ["Ajustes de Sistema:", "definido hostname individual (ex.: `conectorno-pi-01`), ativado o serviço **SSH** para acesso remoto sem periféricos (headless), e ajustadas as credenciais e o fuso horário via `raspi-config`."]
        ] }
      ] },
      { title: "5. Instalação e configuração do sistema ConecTorno", blocks: [
        { h3: "5.1 Apresentação e arquitetura" },
        { p: "O **ConecTorno** é uma interface web voltada para a modernização da distribuição de documentos técnicos no ambiente de oficina. O sistema substitui as pranchetas físicas por monitores digitais, permitindo ao professor gerenciar o material exibido em até 6 estações individuais de tornos. O pacote frontend disponibilizado contém:" },
        { code: [
          "static/",
          "├── index.html   # Estrutura das telas de login, painel e monitores",
          "├── style.css    # Estilização e layout visual",
          "├── app.js       # Lógica do cliente e requisições HTTP (Fetch API)",
          "└── pdfjs/       # Biblioteca para renderização de documentos PDF"
        ] },
        { note: ["Nota da arquitetura:", "a versão documentada contém apenas os arquivos do frontend. O servidor Python/Flask, o banco de dados e os mecanismos de autenticação backend residem nativamente no Raspberry Pi e não foram alterados."] },
        { h3: "5.2 Funcionamento das telas e comunicação com API" },
        { ul: [
          "**Painel do Professor:** protegido por usuário/senha. Permite publicar arquivos PDF e imagens, enviar projetos gerais, selecionar monitores específicos (1 a 6) e gerenciar observações.",
          "**Monitores Individuais:** acessados via URL com parâmetro (ex.: `http://IP:PORTA/?monitor=1`). O script `app.js` consulta a API periodicamente e envia sinal de atividade (heartbeat)."
        ] },
        { table: { head: ["Operação API", "Método", "Finalidade técnica"], rows: [
          ["`/api/auth`", "GET / POST", "Valida credenciais e verifica estado da sessão do professor."],
          ["`/api/panel`", "GET", "Carrega estado dos monitores, avisos e arquivos publicados."],
          ["`/api/upload`", "POST", "Recebe arquivos PDF/imagens enviados pelo professor."],
          ["`/api/monitor`", "GET / POST", "Consulta conteúdo do monitor e envia sinal de heartbeat."]
        ] } },
        { h3: "5.3 Cuidados na instalação e compatibilidade" },
        { ol: [
          "Localizar o diretório de arquivos estáticos do servidor web existente no Raspberry Pi.",
          "Executar backup completo dos dados e configurações: `tar -czvf backup_conectorno.tar.gz /caminho`.",
          "Substituir apenas os arquivos do frontend, preservando os scripts Python e o banco de dados.",
          "Reiniciar o serviço do projeto e testar as telas administrativas e de monitor."
        ] },
        { p: "**Observação:** a compatibilidade real das rotas HTTP deve ser verificada durante a instalação, pois a documentação consultada descreve a especificação esperada do frontend." }
      ] },
      { title: "6. Implementação da rede local isolada", blocks: [
        { p: "A arquitetura de rede foi estruturada para ser simples e robusta, operando em rede sem fio local totalmente isolada da infraestrutura corporativa do SENAI, com endereçamento IP fixo manual e integração ao sistema ComunicCNC." },
        { code: ["+---------------------------------------------+", "| Raspberry Pi Central                        |", "| (Hotspot ComunicCNC / IP final .1)          |", "+------+---------------+---------------+------+", "  Wi-Fi local     Wi-Fi local     Wi-Fi local", "       |               |               |", "       v               v               v", "+-------------+ +-------------+ +-------------+", "| RPi Torno 1 | | RPi Torno 2 | | RPi Torno N |", "| (Monitor 1) | | (Monitor 2) | | (Monitor N) |", "+-------------+ +-------------+ +-------------+"] }
      ] },
      { title: "7. Funcionamento final e validação", blocks: [
        { p: "Após a implementação completa, o Raspberry Pi central proverá o hotspot Wi-Fi para o ecossistema da turma de mecânica. As telas individuais exibirão os desenhos e instruções de usinagem com atualização automática via HTTP. A validação final inclui testes de estabilidade da rede sem fio, tempo de carregamento das folhas de processo em PDF e garantia da legibilidade técnica no ambiente fabril." }
      ] },
      { title: "8. Conclusão", blocks: [
        { p: "A substituição do Bluetooth pela rede local sem fio isolada trouxe a estabilidade necessária para transformar a rotina do laboratório, substituindo pranchetas físicas por um sistema moderno de telas digitais. As próximas etapas contemplam a finalização do suporte impresso 3D, a integração completa do sistema ao Raspberry, e a montagem aos tornos no laboratório de usinagem." }
      ] }
    ]
  },
  lakave: {
    kicker: "Organização da documentação",
    title: "Documentação do projeto",
    subtitle: "Como a documentação das equipas foi produzida, organizada e publicada, e como funciona o site de apoio ao projeto.",
    meta: [
      ["Responsabilidade", "Documentação do projeto e publicação no GitHub."],
      ["Entregas", "Documentação de cada equipa, site para conhecer o projeto e repositório no GitHub."]
    ],
    source: "Elaborado pela equipa Lakave a partir da documentação de cada equipa e do próprio site do projeto.",
    sections: [
      { title: "1. Papel da equipa", blocks: [
        { p: "A Lakave é a equipa responsável pela documentação do projeto de visualização remota da usinagem. Ela escreveu as documentações, organizou o material de cada equipa num só lugar, criou o site para conhecer melhor o projeto e publicou tudo num repositório no GitHub." },
        { h3: "Responsabilidades" },
        { ul: [
          "Produzir as documentações do projeto.",
          "Organizar a documentação de cada equipa.",
          "Criar o site para saber mais sobre o projeto.",
          "Enviar a documentação para o GitHub, num repositório próprio."
        ] }
      ] },
      { title: "2. Documentação organizada por equipa", blocks: [
        { p: "Cada equipa tem o seu documento, reunido na aba **Documentações de equipa** do site." },
        { table: { head: ["Equipa", "Documento", "Conteúdo"], rows: [
          ["ComunicCNC", "ConecTorno: documentação do sistema", "Funcionamento do site, rotas da API, requisitos de compatibilidade, instalação segura no Raspberry Pi e diagnóstico de problemas."],
          ["Axión", "Projeto Conectorno: documentação técnica", "Preparação física e montagem do Raspberry Pi 3B+, testes com Bluetooth, rede Wi-Fi isolada, instalação do sistema e arquitetura do ConecTorno."],
          ["ThirteenTech", "Entrevista com o professor", "Perguntas e respostas sobre como o projeto é consultado hoje, onde o monitor ficaria e a rotina do operador."],
          ["Neonix", "Relatório da equipe", "Andamento de 22/10 a 30/10: protótipo no Figma, requisitos no Trello e roteiro do vídeo."],
          ["Lakave", "Documentação do projeto", "Este documento: organização da documentação, site do projeto e repositório no GitHub."]
        ] } }
      ] },
      { title: "3. O site do projeto", blocks: [
        { p: "O site reúne, num só lugar, uma base de conhecimento sobre o torno CNC, o desenvolvimento web (frontend e backend) e o projeto SENAI, além da documentação de cada equipa." },
        { h3: "Funcionalidades" },
        { ul: [
          "**Pesquisa em tempo real:** filtra os tópicos enquanto se digita, procurando no título, no resumo, nos detalhes e nas tags.",
          "**Filtros de categoria:** Todas, Torno CNC, Frontend & Backend e Projeto SENAI.",
          "**Cards expansíveis:** cada card mostra um resumo e abre com suavidade para mostrar a explicação completa.",
          "**Hashtags clicáveis:** clicar numa tag insere o termo na barra de pesquisa.",
          "**Documentações de equipa:** aba com o documento de cada equipa, com índice por seções."
        ] },
        { h3: "Tecnologias" },
        { p: "O site é estático: usa HTML, CSS (com Tailwind CSS) e JavaScript, com ícones do FontAwesome. Não depende de servidor nem de banco de dados." },
        { h3: "Arquivos do site" },
        { code: [
          "index.html   # estrutura da página e das abas",
          "style.css    # extras de estilo (grelha de fundo, foco e rolagem)",
          "script.js    # base de conhecimento, documentações e interatividade"
        ] },
        { h3: "Como abrir" },
        { p: "Abra o `index.html` no navegador. É preciso ligação à internet, porque o Tailwind CSS, o FontAwesome e as fontes são carregados por CDN. Os três arquivos têm de ficar na mesma pasta." },
        { note: ["Não confundir:", "este site de apoio é independente do sistema ConecTorno, que roda no Raspberry Pi e precisa de servidor."] }
      ] },
      { title: "4. Como acrescentar ou atualizar uma documentação", blocks: [
        { ol: [
          "Abrir o `script.js` e localizar o objeto `DOCS`.",
          "Criar ou editar a entrada da equipa, usando o id dela: `lakave`, `comunic`, `thirteentech`, `axion` ou `neonix`.",
          "Montar o conteúdo com blocos: `p` (parágrafo), `h3` (subtítulo), `ul` e `ol` (listas), `table` (tabela), `note` (aviso), `code` (código) e `qa` (perguntas e respostas).",
          "Salvar o arquivo e atualizar a página com `Ctrl + F5` para conferir o resultado."
        ] }
      ] },
      { title: "5. Publicação no GitHub", blocks: [
        { p: "A documentação foi enviada para um repositório no GitHub, que guarda o material de todas as equipas num só lugar e mantém o histórico das alterações." },
        { h3: "Como atualizar o repositório" },
        { ol: [
          "Salvar as alterações nos arquivos.",
          "Preparar e enviar as mudanças: `git add .`, depois `git commit -m \"Atualiza a documentação\"` e por fim `git push`.",
          "Conferir no GitHub se as alterações apareceram no repositório."
        ] }
      ] }
    ]
  }
};

// Equipas = os cards "Equipa ..." da base de conhecimento (id = parte final do id do card).
const TEAMS = DATA
  .filter((i) => i.cat === "senai" && i.tags.includes("equipas"))
  .map((i) => ({ id: i.id.replace("senai-", ""), name: i.title.replace("Equipa ", ""), role: i.summary }));

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const fmt = (s) => esc(s)
  .replace(/`([^`]+)`/g, '<code class="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-[0.85em] text-cyan-300">$1</code>')
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

const HEAD_FONT = "font-['Barlow_Semi_Condensed',sans-serif]";

function blockHTML(b) {
  if (b.p)  return `<p class="mb-3 max-w-[72ch] text-slate-300">${fmt(b.p)}</p>`;
  if (b.h3) return `<h3 class="mb-2 mt-7 text-lg font-semibold text-white">${fmt(b.h3)}</h3>`;
  if (b.ul) {
    const li = b.ul.map((i) => `<li>${fmt(i)}</li>`).join("");
    return `<ul class="mb-4 list-disc space-y-1.5 pl-5 text-slate-300 marker:text-cyan-400">${li}</ul>`;
  }
  if (b.ol) {
    const li = b.ol
      .map((it) => (Array.isArray(it)
        ? `<li><strong class="text-white">${fmt(it[0])}</strong> ${fmt(it[1])}</li>`
        : `<li>${fmt(it)}</li>`))
      .join("");
    return `<ol class="mb-4 list-decimal space-y-2.5 pl-5 text-slate-300 marker:text-cyan-400">${li}</ol>`;
  }
  if (b.code) {
    return `<pre class="mb-4 overflow-x-auto rounded-lg border border-slate-700/60 bg-[#0b1426] p-4 font-mono text-sm text-cyan-200">${esc(b.code.join("\n"))}</pre>`;
  }
  if (b.note) {
    return `<div class="mb-4 rounded-lg border-l-4 border-amber-400 bg-amber-400/10 p-4 text-slate-200"><strong class="text-amber-300">${fmt(b.note[0])}</strong> ${fmt(b.note[1])}</div>`;
  }
  if (b.qa) {
    return b.qa
      .map(([q, a]) => `<div class="mb-3 rounded-lg border border-slate-700/60 bg-[#101a2e] p-4"><p class="font-medium text-white">${fmt(q)}</p><p class="mt-1.5 max-w-[72ch] text-slate-300">${fmt(a)}</p></div>`)
      .join("");
  }
  if (b.table) {
    const th = b.table.head.map((h) => `<th class="px-4 py-2.5 font-semibold text-slate-200">${fmt(h)}</th>`).join("");
    const rows = b.table.rows
      .map((r) => `<tr>${r.map((c) => `<td class="border-t border-slate-800 px-4 py-2.5 align-top text-slate-300">${fmt(c)}</td>`).join("")}</tr>`)
      .join("");
    return `<div class="mb-4 overflow-x-auto rounded-lg border border-slate-700/60"><table class="w-full min-w-[34rem] text-left text-sm"><thead class="bg-[#16233d]"><tr>${th}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }
  return "";
}

function teamsHTML() {
  const cards = TEAMS.map((t) => {
    const has = Boolean(DOCS[t.id]);
    const badge = has ? "bg-cyan-400/15 text-cyan-300" : "bg-slate-700/40 text-slate-400";
    const body = `
      <span class="flex items-start justify-between gap-3">
        <span class="${HEAD_FONT} text-xl font-semibold text-white">${t.name}</span>
        <span class="flex-none rounded-full px-2.5 py-0.5 text-xs font-medium ${badge}">${has ? "Documentação disponível" : "Ainda sem documentação"}</span>
      </span>
      <span class="mt-2 block text-sm text-slate-400">${t.role}</span>
      ${has ? '<span class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> Abrir documentação</span>' : ""}`;
    return has
      ? `<button type="button" data-doc="${t.id}" class="rounded-xl border border-l-4 border-slate-700/60 border-l-cyan-400 bg-[#101a2e] p-4 text-left transition hover:border-cyan-400/70">${body}</button>`
      : `<div class="rounded-xl border border-l-4 border-slate-800 border-l-slate-600 bg-[#101a2e]/60 p-4">${body}</div>`;
  }).join("");

  return `
    <p class="mb-5 max-w-2xl text-slate-400">Cada equipa reúne aqui a documentação técnica do seu trabalho. Escolha uma equipa para abrir o documento.</p>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">${cards}</div>`;
}

function docHTML(id) {
  const d = DOCS[id];
  const team = TEAMS.find((t) => t.id === id);
  const meta = d.meta
    ? `<dl class="mt-5 grid gap-4 text-sm sm:grid-cols-2">${d.meta.map(([k, v]) => `<div><dt class="font-medium text-slate-200">${k}</dt><dd class="mt-0.5 text-slate-400">${v}</dd></div>`).join("")}</dl>`
    : "";
  const nav = d.sections
    .map((s, i) => `<button type="button" data-goto="doc-s${i + 1}" class="block w-full rounded-md px-3 py-1.5 text-left text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white">${esc(s.title)}</button>`)
    .join("");
  const sections = d.sections
    .map((s, i) => `
      <section id="doc-s${i + 1}" class="mb-10 scroll-mt-24">
        <h2 class="${HEAD_FONT} mb-4 border-b border-slate-800 pb-2 text-2xl font-semibold text-white">${esc(s.title)}</h2>
        ${s.blocks.map(blockHTML).join("")}
      </section>`)
    .join("");

  return `
    <button type="button" data-back class="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">
      <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Voltar às equipas
    </button>
    <header class="mb-8 rounded-xl border border-slate-700/60 bg-[#101a2e] p-6">
      <p class="text-sm font-medium text-cyan-400">Equipa ${team.name} · ${d.kicker}</p>
      <h2 class="${HEAD_FONT} mt-1 text-3xl font-bold text-white sm:text-4xl">${d.title}</h2>
      <p class="mt-2 max-w-2xl text-lg text-slate-300">${d.subtitle}</p>
      ${meta}
    </header>
    <div class="lg:grid lg:grid-cols-[15rem_1fr] lg:gap-10">
      <nav class="mb-8 lg:sticky lg:top-24 lg:mb-0 lg:self-start" aria-label="Índice da documentação">
        <p class="mb-2 px-3 text-sm font-semibold text-slate-500">Neste documento</p>
        <div class="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:block">${nav}</div>
      </nav>
      <article class="min-w-0">
        ${sections}
        <p class="text-sm text-slate-500">${d.source}</p>
      </article>
    </div>`;
}

const docsRoot = document.querySelector("#docs-root");
const docsState = { doc: null };

function renderDocs() {
  docsRoot.innerHTML = docsState.doc ? docHTML(docsState.doc) : teamsHTML();
}

function showView(view) {
  document.querySelectorAll("[data-tab]").forEach((t) => {
    t.setAttribute("aria-selected", String(t.dataset.tab === view));
  });
  document.querySelector("#view-kb").hidden = view !== "kb";
  document.querySelector("#view-docs").hidden = view !== "docs";
}

document.querySelectorAll("[data-tab]").forEach((t) => {
  t.addEventListener("click", () => showView(t.dataset.tab));
});

docsRoot.addEventListener("click", (e) => {
  const open = e.target.closest("[data-doc]");
  const back = e.target.closest("[data-back]");
  const go = e.target.closest("[data-goto]");
  if (open || back) {
    docsState.doc = open ? open.dataset.doc : null;
    renderDocs();
    document.querySelector("#tabs").scrollIntoView({ behavior: "smooth" });
  } else if (go) {
    const target = document.getElementById(go.dataset.goto);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

renderDocs();