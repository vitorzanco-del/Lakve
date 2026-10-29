// Base de Dados com o Relatório de Ergonomia incluído
const DATABASE = [
    {
        id: "relatorio-campo",
        categoria: "projeto",
        titulo: "Relatório de Campo e Usuário: Requisitos e Ergonomia",
        subtitulo: "Levantamento direto na oficina CNC do SENAI.",
        icone: "fa-clipboard-user",
        imagem: "docs/entrevista/torno-frente.jpg", 
        tags: ["EquipeCampo", "Ergonomia", "Medidas", "Entrevista", "Requisitos", "TornoCNC"],
        resumo: "Análise da equipa (Kimberlie, Victor, Lucas, Amabile, Kauan) sobre a experiência do operador e a interface ideal.",
        respostaLimpa: `
            <div class="space-y-6">
                <div class="p-4 bg-cyan-950/40 border-l-4 border-cyan-400 rounded-r-lg shadow-inner">
                    <h4 class="font-bold text-cyan-300 text-base mb-1">
                        <i class="fa-solid fa-graduation-cap mr-2"></i> SENAI Serra Catarinense
                    </h4>
                    <p class="text-slate-200 text-sm mt-1"><strong>Curso:</strong> Técnico em Desenvolvimento de Sistemas</p>
                    <p class="text-slate-200 text-sm mt-1"><strong>Equipa de Campo:</strong> Kimberlie Eliassaint, Victor Rodrigues, Lucas Gabriel, Amabile Pereira e Kauan.</p>
                </div>

                <div>
                    <h4 class="font-bold text-white text-lg border-b border-slate-800 pb-2 mb-3">1. Tema e Objetivos</h4>
                    <p class="text-slate-300 text-sm leading-relaxed mb-3">
                        <strong>Tema Central:</strong> Levantamento de Requisitos, Ergonomia e Experiência do Operador no Torno CNC.
                    </p>
                    <ul class="space-y-2 text-sm text-slate-300 bg-slate-900/50 p-4 rounded-lg border border-slate-800/80">
                        <li class="flex gap-3 items-start"><i class="fa-solid fa-bullseye text-cyan-400 mt-1"></i> <span><strong>Mapeamento:</strong> Analisar como o aluno/operador consulta os projetos de usinagem hoje.</span></li>
                        <li class="flex gap-3 items-start"><i class="fa-solid fa-eye text-cyan-400 mt-1"></i> <span><strong>Visibilidade:</strong> Garantir que o ecrã fique visível à distância sem atrapalhar a circulação ou o botão de emergência.</span></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-white text-lg border-b border-slate-800 pb-2 mb-3">2. Ergonomia Coletada na Oficina</h4>
                    <div class="grid sm:grid-cols-2 gap-4">
                        <div class="bg-slate-950 p-5 rounded-xl border border-slate-800 shadow-md">
                            <h5 class="font-bold text-cyan-400 mb-3"><i class="fa-solid fa-ruler-combined mr-2"></i> Medidas Padrão</h5>
                            <ul class="text-slate-300 text-sm space-y-2">
                                <li class="flex justify-between border-b border-slate-800/60 pb-1"><span>Altura dos Olhos:</span> <strong>~165 a 175 cm</strong></li>
                                <li class="flex justify-between border-b border-slate-800/60 pb-1"><span>Distância de Visão:</span> <strong>~80 a 120 cm</strong></li>
                                <li class="flex justify-between pb-1"><span>Espaço Livre:</span> <strong>Lateral do Torno</strong></li>
                            </ul>
                        </div>
                        <div class="bg-slate-950 p-5 rounded-xl border border-slate-800 shadow-md">
                            <h5 class="font-bold text-cyan-400 mb-3"><i class="fa-solid fa-hand-sparkles mr-2"></i> Condições Operacionais</h5>
                            <p class="text-slate-300 text-sm leading-relaxed">Presença de fluido de corte, cavacos quentes e uso de luvas de proteção. Isso obriga a interface a ter <strong>botões grandes</strong>.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 class="font-bold text-white text-lg border-b border-slate-800 pb-2 mb-3">3. Entrevista e Dores Reais</h4>
                    <div class="bg-cyan-950/20 border border-cyan-900/50 p-5 rounded-xl text-sm text-slate-300 space-y-4">
                        <p><strong class="text-white block mb-1">Como consultam hoje?</strong> O projeto fica impresso em papel na bancada, que se suja rapidamente de óleo e graxa.</p>
                        <div class="bg-slate-950 p-3 rounded-lg border border-slate-800">
                            <strong class="text-cyan-400 block mb-1">Necessidades para o Novo Sistema:</strong>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Interface com <strong>alto contraste</strong>.</li>
                                <li><strong>Fonte grande</strong> para leitura a 1 metro.</li>
                                <li>Controlo acessível de <strong>Zoom In / Zoom Out</strong>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 class="font-bold text-white text-lg border-b border-slate-800 pb-2 mb-3">4. Mídias Mapeadas (Repositório)</h4>
                    <div class="flex flex-wrap gap-2 text-xs">
                        <span class="px-3 py-1.5 bg-slate-800 text-cyan-300 rounded border border-slate-700"><i class="fa-solid fa-image mr-1"></i> docs/entrevista/torno-frente.jpg</span>
                        <span class="px-3 py-1.5 bg-slate-800 text-cyan-300 rounded border border-slate-700"><i class="fa-solid fa-image mr-1"></i> docs/entrevista/local-monitor.jpg</span>
                        <span class="px-3 py-1.5 bg-slate-800 text-cyan-300 rounded border border-slate-700"><i class="fa-solid fa-image mr-1"></i> docs/entrevista/painel-botoes.jpg</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "cnc-1",
        categoria: "cnc",
        titulo: "O que é o Torno CNC e qual a sua função?",
        subtitulo: "Usinagem automatizada de alta precisão milimétrica.",
        icone: "fa-gear",
        imagem: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop", 
        tags: ["TornoCNC", "Usinagem", "Automação", "Precisão"],
        resumo: "Máquina industrial que modela peças giratórias via comandos de computador.",
        respostaLimpa: `
            <div class="space-y-4">
                <div class="p-4 bg-cyan-950/40 border-l-4 border-cyan-400 rounded-r-lg">
                    <h4 class="font-bold text-cyan-300 text-sm">Resumo Direto</h4>
                    <p class="text-slate-200 mt-1 text-sm">Serve para fabricar peças cilíndricas com precisão milimétrica e de forma automatizada, dispensando ajustes manuais contínuos.</p>
                </div>
                <div class="grid grid-cols-2 gap-3 text-sm pt-2">
                    <div class="bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <strong class="text-cyan-400 block mb-1">Eixo Z (Comprimento)</strong>
                        <span class="text-slate-400">Movimento longitudinal (profundidade).</span>
                    </div>
                    <div class="bg-slate-950 p-4 rounded-lg border border-slate-800">
                        <strong class="text-cyan-400 block mb-1">Eixo X (Diâmetro)</strong>
                        <span class="text-slate-400">Movimento transversal (espessura).</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "web-1",
        categoria: "web",
        titulo: "Frontend e Backend: Como o sistema funciona?",
        subtitulo: "A divisão entre interface visual e os bastidores.",
        icone: "fa-desktop",
        imagem: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop",
        tags: ["Frontend", "Backend", "HTML", "BancoDeDados"],
        resumo: "Compreenda as tecnologias que criam as telas e gerem a base de dados.",
        respostaLimpa: `
            <div class="space-y-4">
                <p class="text-slate-300 text-sm leading-relaxed">
                    O <strong>Frontend</strong> é o lado do cliente (HTML, CSS e JavaScript), responsável pelos botões, cores e interações na tela do utilizador.
                    O <strong>Backend</strong> é o lado do servidor, que processa a lógica, autenticação e comunica com a base de dados.
                </p>
            </div>
        `
    },
    {
        id: "proj-1",
        categoria: "projeto",
        titulo: "Objetivo Central do Monitoramento CNC",
        subtitulo: "Transmissão remota das aulas via Raspberry Pi.",
        icone: "fa-video",
        imagem: "https://images.unsplash.com/photo-1601816598912-70b990dd34c4?q=80&w=600&auto=format&fit=crop",
        tags: ["ProjetoSENAI", "RaspberryPi", "Monitoramento", "Câmera"],
        resumo: "Solução que evita o deslocamento constante do professor até a máquina.",
        respostaLimpa: `
            <div class="space-y-4">
                <div class="p-4 bg-cyan-950/40 border-l-4 border-cyan-400 rounded-r-lg">
                    <p class="text-slate-200 text-sm mt-2 leading-relaxed"><strong>Solução:</strong> Um monitor remoto ligado a uma câmara instalada dentro do torno, permitindo visualização ao vivo para a turma inteira.</p>
                </div>
                <div class="bg-slate-950 p-4 rounded-lg border border-slate-800 text-sm mt-4">
                    <strong class="text-cyan-400 block mb-2">Proteção Especial:</strong>
                    <p class="text-slate-300">Foi instalada uma caixa de proteção com vidro acrílico transparente para impedir danos provocados por cavacos e fluido de corte.</p>
                </div>
            </div>
        `
    }
];

const MATERIAIS = [
    { item: "Raspberry Pi (3B+, 4 ou 5)", uso: "Computador central que processa e exibe a imagem." },
    { item: "Cartão microSD 32 GB", uso: "Armazena o sistema operativo e os programas." },
    { item: "Monitor com furação VESA", uso: "Ecrã principal onde o professor visualiza a usinagem." },
    { item: "Caixa + Vidro Acrílico", uso: "Protege a câmara contra fluidos de corte, cavacos e calor." }
];

let activeTab = 'todas';

document.addEventListener('DOMContentLoaded', () => {
    renderCards(DATABASE);
    renderMateriais(MATERIAIS);
    document.getElementById('searchInput').addEventListener('input', executeFilter);
});

function filterTab(categoria) {
    activeTab = categoria;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === categoria);
    });
    executeFilter();
}

function filterByTag(tagText) {
    const input = document.getElementById('searchInput');
    input.value = tagText;
    executeFilter();
    document.getElementById('explorar').scrollIntoView({ behavior: 'smooth' });
}

function executeFilter() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const filtered = DATABASE.filter(item => {
        const matchesTab = (activeTab === 'todas' || item.categoria === activeTab);
        const matchesQuery = query === '' || 
            item.titulo.toLowerCase().includes(query) ||
            item.resumo.toLowerCase().includes(query) ||
            item.tags.some(t => t.toLowerCase().includes(query));
        return matchesTab && matchesQuery;
    });
    renderCards(filtered);
}

function renderCards(items) {
    const container = document.getElementById('cardsContainer');
    document.getElementById('resultsCounter').textContent = `${items.length} item(ns) encontrado(s)`;

    if (items.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-16 bg-slate-900 border border-slate-800 rounded-2xl shadow-inner">
                <i class="fa-solid fa-magnifying-glass text-slate-500 text-4xl mb-4"></i>
                <p class="text-white font-bold text-lg">Nenhuma informação encontrada.</p>
                <p class="text-slate-400 text-sm">Tente pesquisar por "Ergonomia", "Acrílico" ou "EquipeCampo".</p>
            </div>`;
        return;
    }

    container.innerHTML = items.map(item => `
        <div class="card-interactive bg-slate-900 border border-slate-800/80 rounded-2xl flex flex-col overflow-hidden cursor-pointer shadow-lg" onclick="openModal('${item.id}')">
            <div class="h-40 w-full overflow-hidden border-b border-slate-800/80 relative bg-slate-950">
                <img src="${item.imagem}" alt="${item.titulo}" class="w-full h-full object-cover hover:scale-110 transition duration-700" onerror="this.src='https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=600&auto=format&fit=crop'">
                <span class="absolute top-3 left-3 text-[10px] font-extrabold uppercase px-3 py-1 bg-slate-950/90 text-cyan-400 border border-cyan-800/60 rounded-full backdrop-blur-md">${item.categoria}</span>
            </div>
            <div class="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div>
                    <h3 class="text-white font-bold text-base leading-snug mb-2">${item.titulo}</h3>
                    <p class="text-slate-400 text-xs leading-relaxed line-clamp-2">${item.resumo}</p>
                </div>
                <div class="pt-4 mt-auto border-t border-slate-800/60 flex items-center justify-between">
                    <div class="flex flex-wrap gap-1" onclick="event.stopPropagation()">
                        ${item.tags.slice(0, 2).map(tag => `<button onclick="filterByTag('${tag}')" class="badge-tag text-[10px] bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800">#${tag}</button>`).join('')}
                    </div>
                    <span class="text-cyan-400 text-xs font-bold flex items-center gap-1 group-hover:text-cyan-300">Ler Mais <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
                </div>
            </div>
        </div>
    `).join('');
}

function openModal(id) {
    const item = DATABASE.find(d => d.id === id);
    if (!item) return;
    document.getElementById('modalTitle').textContent = item.titulo;
    document.getElementById('modalSubtitle').textContent = item.subtitulo || item.resumo;
    document.getElementById('modalBody').innerHTML = item.respostaLimpa;
    
    const img = document.getElementById('modalImage');
    img.src = item.imagem;
    img.onerror = function() { this.src = 'https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&w=800&auto=format&fit=crop'; };

    document.getElementById('detailModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    document.getElementById('detailModal').classList.add('hidden');
    document.body.style.overflow = 'auto'; 
}

document.addEventListener('keydown', e => { if (e.key === "Escape") closeModal(); });

function renderMateriais(materiais) {
    document.getElementById('materialsTableBody').innerHTML = materiais.map(m => `
        <tr class="hover:bg-slate-900/60 transition text-sm">
            <td class="px-5 py-4 font-semibold text-white border-b border-slate-800/60 w-1/3">${m.item}</td>
            <td class="px-5 py-4 text-slate-300 border-b border-slate-800/60">${m.uso}</td>
        </tr>
    `).join('');
}