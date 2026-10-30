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
      <p>Responsável pela documentação do projeto, que é organizada e publicada no GitHub.</p>`,
    tags: ["equipas", "lakave", "documentacao", "github"]
  },
  {
    id: "senai-cominic",
    cat: "senai",
    title: "Equipa CominicCNC",
    summary: "Servidor, integração frontend x backend e ligação Bluetooth/rede.",
    details: `
      <p>Responsável pela parte de software que liga tudo:</p>
      <ul>
        <li>Servidor</li>
        <li>Integração entre frontend e backend</li>
        <li>Ligação por Bluetooth e por rede</li>
        <li>Documentação do sistema ConecTorno (veja a aba Documentações de equipa)</li>
      </ul>`,
    tags: ["equipas", "cominiccnc", "conectorno", "documentacao", "servidor", "bluetooth", "rede", "backend", "frontend x backend"]
  },
  {
    id: "senai-thirteentech",
    cat: "senai",
    title: "Equipa Thirteentech",
    summary: "Entrevistas com o professor, medições físicas e organização no Trello.",
    details: `
      <p>Responsável pelo levantamento de requisitos e pela organização do trabalho:</p>
      <ul>
        <li>Entrevistas com o professor</li>
        <li>Medições físicas</li>
        <li>Organização das tarefas no Trello</li>
      </ul>`,
    tags: ["equipas", "thirteentech", "entrevistas", "medicoes", "trello"]
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
      </ul>`,
    tags: ["equipas", "axion", "impressao 3d", "raspberry pi", "sistema operacional", "vesa"]
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
      </ul>`,
    tags: ["equipas", "neonix", "prototipo", "site", "video", "roteiro"]
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
   em DOCS com o id da equipa: lakave, cominic, thirteentech,
   axion ou neonix.
   Blocos: p, h3, ul, ol, table, note, code. Use `código` e **negrito**.
   ============================================================ */
const DOCS = {
  cominic: {
    kicker: "Documentação do sistema",
    title: "ConecTorno",
    subtitle: "Site de comunicação e acompanhamento de monitores para uso com o servidor existente no Raspberry Pi.",
    objective: "Explicar o funcionamento do site, seus recursos, a comunicação com a API e os cuidados de instalação.",
    version: "Pacote somente do site (frontend), sem servidor próprio, porque o Raspberry já possui um servidor.",
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
    const li = b.ol.map(([lead, text]) => `<li><strong class="text-white">${fmt(lead)}</strong> ${fmt(text)}</li>`).join("");
    return `<ol class="mb-4 list-decimal space-y-2.5 pl-5 text-slate-300 marker:text-cyan-400">${li}</ol>`;
  }
  if (b.code) {
    return `<pre class="mb-4 overflow-x-auto rounded-lg border border-slate-700/60 bg-[#0b1426] p-4 font-mono text-sm text-cyan-200">${esc(b.code.join("\n"))}</pre>`;
  }
  if (b.note) {
    return `<div class="mb-4 rounded-lg border-l-4 border-amber-400 bg-amber-400/10 p-4 text-slate-200"><strong class="text-amber-300">${fmt(b.note[0])}</strong> ${fmt(b.note[1])}</div>`;
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
      <dl class="mt-5 grid gap-4 text-sm sm:grid-cols-2">
        <div><dt class="font-medium text-slate-200">Objetivo</dt><dd class="mt-0.5 text-slate-400">${d.objective}</dd></div>
        <div><dt class="font-medium text-slate-200">Versão documentada</dt><dd class="mt-0.5 text-slate-400">${d.version}</dd></div>
      </dl>
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
