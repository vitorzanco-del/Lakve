"use strict";

/* ============================================================
   CATEGORIAS
   ============================================================ */
const CATEGORIES = {
  cnc:   { label: "Torno CNC",          icon: "fa-gear",  color: "#22d3ee" },
  web:   { label: "Frontend & Backend", icon: "fa-code",  color: "#60a5fa" },
  senai: { label: "Projeto SENAI",      icon: "fa-video", color: "#fbbf24" }
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
    title: "Equipa Cominic CNC",
    summary: "Servidor, integração frontend x backend e ligação Bluetooth/rede.",
    details: `
      <p>Responsável pela parte de software que liga tudo:</p>
      <ul>
        <li>Servidor</li>
        <li>Integração entre frontend e backend</li>
        <li>Ligação por Bluetooth e por rede</li>
      </ul>`,
    tags: ["equipas", "cominic cnc", "servidor", "bluetooth", "rede", "backend", "frontend x backend"]
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

/* ============================================================
   UTILITÁRIOS DE PESQUISA
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
  const cat = CATEGORIES[item.cat];
  const open = state.open.has(item.id);
  const tags = item.tags
    .map((t) => `<button type="button" class="tag" data-tag="${t}">#${t}</button>`)
    .join("");

  return `
    <article class="card${open ? " open" : ""}" data-id="${item.id}" style="--c:${cat.color}">
      <button type="button" class="card-head" aria-expanded="${open}" aria-controls="body-${item.id}">
        <span class="card-icon" aria-hidden="true"><i class="fa-solid ${cat.icon}"></i></span>
        <span class="min-w-0 flex-1">
          <span class="card-cat">${cat.label}</span>
          <span class="card-title">${item.title}</span>
          <span class="card-summary">${item.summary}</span>
        </span>
        <i class="fa-solid fa-chevron-down chev" aria-hidden="true"></i>
      </button>
      <div class="card-body" id="body-${item.id}">
        <div class="card-inner"><div class="detail">${item.details}</div></div>
      </div>
      <div class="tags">${tags}</div>
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
  els.filters.querySelectorAll(".chip").forEach((btn) => {
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
  const isOpen = card.classList.toggle("open");
  card.querySelector(".card-head").setAttribute("aria-expanded", String(isOpen));
  if (isOpen) state.open.add(card.dataset.id);
  else state.open.delete(card.dataset.id);
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
  const btn = e.target.closest(".chip");
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
  if (e.target.closest(".card-inner") || e.target.closest(".tags")) return;
  const card = e.target.closest(".card");
  if (card) toggleCard(card);
});

/* ============================================================
   INÍCIO
   ============================================================ */
fillCounts();
render();
