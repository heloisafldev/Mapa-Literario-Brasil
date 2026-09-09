const autoresPorEstado = {
    "Acre": ["Agamémnon Parente Moraes"],
    "Alagoas": ["Graciliano Ramos", "Jorge de Lima", "Lêdo Ivo", "Rachel de Queiroz"],
    "Amapá": ["Carla Nobre", "Fernando Canto", "Alfredo Oliveira"],
    "Amazonas": ["Milton Hatoum", "Astrid Cabral", "Márcio Souza", "Thiago de Mello"],
    "Bahia": ["Jorge Amado", "Castro Alves", "Rui Barbosa", "Gregório de Matos", "João Ubaldo Ribeiro", "Myriam Fraga", "Jacinta Passos", "Adonias Filho"],
    "Ceará": ["Rachel de Queiroz", "José de Alencar", "Patativa do Assaré", "Ana Miranda", "Juvenal Galeno", "Jáder de Carvalho"],
    "Distrito Federal": ["Roger Mello", "Tatiana Nascimento", "Paulliny Tort", "Lima Trindade", "Lourenço Dutra"],
    "Espírito Santo": ["Rubem Braga", "Maria Stella de Novaes", "Bernardo Horta"],
    "Goiás": ["Cora Coralina", "José J. Veiga", "Bernardo Élis", "Hugo de Carvalho Ramos", "Eli Brasiliense"],
    "Maranhão": ["Gonçalves Dias", "Aluísio Azevedo", "Artur Azevedo", "Ferreira Gullar", "Maria Firmina dos Reis", "Sousândrade", "Nauro Machado"],
    "Mato Grosso": ["Manoel de Barros", "Luci Collin"],
    "Mato Grosso do Sul": ["Raquel Naveira", "Olga Barros", "Maria da Glória Sá Rosa"],
    "Minas Gerais": ["Carlos Drummond de Andrade", "João Guimarães Rosa", "Adélia Prado", "Murilo Mendes", "Henriqueta Lisboa", "Conceição Evaristo", "Murilo Rubião", "Fernando Sabino", "Paulo Mendes Campos", "Helena Morley"],
    "Pará": ["Dalcídio Jurandir", "Ruy Barata", "Haroldo Maranhão", "Bruno de Menezes", "Eneida de Moraes", "Lindanor Celina"],
    "Paraíba": ["Ariano Suassuna", "Augusto dos Anjos", "José Lins do Rego", "Zé da Luz", "Maria Valéria Rezende"],
    "Paraná": ["Dalton Trevisan", "Helena Kolody", "Emiliano Perneta", "Paulo Leminski", "Alice Ruiz", "Cristovam Buarque"],
    "Pernambuco": ["Manuel Bandeira", "João Cabral de Melo Neto", "Clarice Lispector", "Josué de Castro", "Joaquim Cardozo", "Lêdo Ivo"],
    "Piauí": ["Torquato Neto", "H. Dobal", "Da Costa e Silva", "Osmar de Carvalho", "Cineas Santos"],
    "Rio de Janeiro": ["Machado de Assis", "Lima Barreto", "Cecília Meireles", "Clarice Lispector", "Nelson Rodrigues", "Rubem Fonseca", "Paulo Lins", "Carolina Maria de Jesus", "Nélida Piñon", "Conceição Evaristo"],
    "Rio Grande do Norte": ["Nísia Floresta", "Câmara Cascudo", "Auta de Souza", "Jorge Fernandes", "Madalena Antunes"],
    "Rio Grande do Sul": ["Érico Veríssimo", "Mario Quintana", "Simões Lopes Neto", "Lya Luft", "Moacyr Scliar", "Caio Fernando Abreu", "Cruz e Sousa"],
    "Rondônia": ["Viriato Moura", "Silvio Romero"],
    "Roraima": ["Cristino Wapichana", "Aldenor Pimentel", "Ernandes Dantas"],
    "Santa Catarina": ["Cruz e Sousa", "Edla van Steen", "Flávio José Cardozo", "Lindolf Bell", "Salim Miguel"],
    "São Paulo": ["Monteiro Lobato", "Mário de Andrade", "Oswald de Andrade", "Hilda Hilst", "Lygia Fagundes Telles", "Raduan Nassar", "Ruth Rocha", "Tatiana Belinky", "Tarsila do Amaral"],
    "Sergipe": ["Tobias Barreto", "Sílvio Romero", "João Ribeiro", "Amando Fontes", "Maria Thetis Nunes"],
    "Tocantins": ["Eli Brasiliense", "Dona Fia"]
};

const estados = document.querySelectorAll(".estado");
const janela = document.querySelector("#janela");
const nomeEstado = document.querySelector("#nome-estado");
const listaAutores = document.querySelector("#lista-autores");
const fechar = document.querySelector("#fechar");
const quantidadeEstados = document.querySelector("#quantidade-estados");
const porcentagem = document.querySelector("#porcentagem");
const classificacao = document.querySelector("#classificacao");

let ultimoEstado = null;

function pintarEstado(estado, lido) {
    const cor = lido ? "#075044" : "#4da996";
    estado.querySelectorAll("path").forEach((path) => {
        path.style.setProperty("fill", cor, "important");
    });
}

estados.forEach((estado) => {
    estado.addEventListener("click", () => {
        const nome = estado.getAttribute("name");
        if (ultimoEstado !== nome) {
            ultimoEstado = nome;
            nomeEstado.textContent = nome;
            listaAutores.innerHTML = "";
            const autores = autoresPorEstado[nome] || [];
            autores.forEach((autor) => {
                const item = document.createElement("li");
                item.textContent = autor;
                listaAutores.appendChild(item);
            });
            janela.style.display = "flex";
            posicionarJanela(estado);
            return;
        }
        if (!estado.classList.contains("lido")) {
            estado.classList.add("lido");
            pintarEstado(estado, true);
            atualizarProgresso();
            janela.style.display = "none";
            return;
        }
        estado.classList.remove("lido");
        pintarEstado(estado, false);
        atualizarProgresso();
        janela.style.display = "none";
        ultimoEstado = null;
    });
});

function posicionarJanela(estado) {
    setTimeout(() => {
        const rect = estado.getBoundingClientRect();
        const margem = 15;
        const largura = janela.offsetWidth;
        const altura = janela.offsetHeight;
        const telaW = window.innerWidth;
        const telaH = window.innerHeight;
        const posicoes = [
            { left: rect.right + margem, top: rect.top },
            { left: rect.left - largura - margem, top: rect.top },
            { left: rect.left + (rect.width - largura) / 2, top: rect.bottom + margem },
            { left: rect.left + (rect.width - largura) / 2, top: rect.top - altura - margem }
        ];
        let escolhida = posicoes.find((pos) => {
            const dentroDaTela = pos.left >= margem && pos.top >= margem && pos.left + largura <= telaW - margem && pos.top + altura <= telaH - margem;
            const naoSobrepoe = pos.left + largura < rect.left || pos.left > rect.right || pos.top + altura < rect.top || pos.top > rect.bottom;
            return dentroDaTela && naoSobrepoe;
        });
        if (!escolhida) {
            escolhida = {
                left: Math.max(margem, Math.min(rect.right + margem, telaW - largura - margem)),
                top: Math.max(margem, Math.min(rect.top, telaH - altura - margem))
            };
        }
        janela.style.left = `${escolhida.left}px`;
        janela.style.top = `${escolhida.top}px`;
    }, 0);
}

function atualizarProgresso() {
    const estadosLidos = document.querySelectorAll(".estado.lido");
    const quantidade = estadosLidos.length;
    const percentual = (quantidade / 27) * 100;
    quantidadeEstados.textContent = quantidade;
    porcentagem.textContent = percentual.toFixed(1) + "%";
    document.documentElement.style.setProperty("--percentual", percentual);
    if (quantidade === 0) {
        classificacao.textContent = "💭 Seu mapa literário está esperando por você. Escolha um estado e descubra novos autores!";
    } else if (quantidade <= 2) {
        classificacao.textContent = "🌱 Começando — todos temos que começar!";
    } else if (quantidade <= 5) {
        classificacao.textContent = "📖 Leitor em viagem — você já começou a desbravar o Brasil através da literatura!";
    } else if (quantidade <= 8) {
        classificacao.textContent = "🧭 Explorador literário — você já está conhecendo diferentes partes do Brasil!";
    } else if (quantidade <= 11) {
        classificacao.textContent = "🇧🇷 Desbravando o Brasil — seu mapa literário está ficando cada vez mais completo!";
    } else if (quantidade <= 14) {
        classificacao.textContent = "📚 Leitor brasileiro — você já explorou muitos estados através da literatura!";
    } else if (quantidade <= 17) {
        classificacao.textContent = "🌎 Grande explorador — você já percorreu uma boa parte do mapa literário brasileiro!";
    } else if (quantidade <= 20) {
        classificacao.textContent = "🏆 Leitor avançado — seu mapa literário está impressionante!";
    } else if (quantidade <= 23) {
        classificacao.textContent = "🔥 Quase completando o mapa — faltam poucos estados para você desbravar!";
    } else if (quantidade <= 26) {
        classificacao.textContent = "👑 Mestre da literatura brasileira — falta muito pouco para completar seu mapa!";
    } else {
        classificacao.textContent = "🇧🇷👑 Desbravador literário do Brasil — você explorou autores de todos os 27 estados!";
    }
}

fechar.addEventListener("click", () => {
    janela.style.display = "none";
});

window.addEventListener("resize", () => {
    if (janela.style.display !== "none" && ultimoEstado) {
        const estadoAtual = Array.from(estados).find((estado) => estado.getAttribute("name") === ultimoEstado);
        if (estadoAtual) posicionarJanela(estadoAtual);
    }
});

atualizarProgresso();

// Card fixo de instruções e legenda, criado antes do mapa.
const mapa = document.querySelector("#mapa");
const svgMapa = document.querySelector("#svg-map");
if (mapa && svgMapa && !document.querySelector(".card-instrucoes")) {
    const card = document.createElement("section");
    card.className = "card-instrucoes";
    card.innerHTML = `
        <div class="area-instrucoes">
            <div class="icone-clique" aria-hidden="true"><span></span></div>
            <div class="texto-instrucoes">
                <p>Clique em um estado para conhecer seus autores.</p>
                <p>Clique novamente para marcar como explorado.</p>
            </div>
        </div>
        <div class="area-legenda" aria-label="Legenda das cores">
            <div class="item-legenda"><span class="bolinha-legenda nao-explorado"></span><span>Ainda não explorado</span></div>
            <div class="item-legenda"><span class="bolinha-legenda explorado"></span><span>Já explorei</span></div>
        </div>`;
    mapa.insertBefore(card, svgMapa);
}

// Botão e compartilhamento do resultado em formato vertical para Stories.
function carregarHtml2Canvas() {
    return new Promise((resolve, reject) => {
        if (window.html2canvas) {
            resolve(window.html2canvas);
            return;
        }
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
        script.onload = () => resolve(window.html2canvas);
        script.onerror = () => reject(new Error("Não foi possível carregar o gerador de imagem."));
        document.head.appendChild(script);
    });
}

function obterClassificacaoSemEmoji(texto) {
    return texto.replace(/^[^A-Za-zÀ-ÿ]+/u, "").trim();
}

function criarCardCompartilhamento() {
    const estadosLidos = Array.from(document.querySelectorAll(".estado.lido"));
    const quantidade = estadosLidos.length;
    const percentual = ((quantidade / 27) * 100).toFixed(1).replace(".", ",");
    const mensagem = obterClassificacaoSemEmoji(classificacao.textContent);

    const card = document.createElement("div");
    card.id = "card-compartilhar";
    card.innerHTML = `
        <div class="share-decor share-decor-top"></div>
        <div class="share-cabecalho">
            <div class="share-titulo">Brasil Literário</div>
            <div class="share-subtitulo">Minha jornada pela literatura brasileira</div>
        </div>
        <div class="share-mapa"></div>
        <div class="share-legenda">
            <div><span class="share-bolinha share-nao"></span>Ainda não explorado</div>
            <div><span class="share-bolinha share-sim"></span>Já explorei</div>
        </div>
        <div class="share-resultado">
            <div class="share-circulo"><strong>${percentual}%</strong><span>do Brasil explorado</span></div>
            <div class="share-dados"><strong>${quantidade} / 27</strong><span>estados explorados</span></div>
        </div>
        <div class="share-classificacao">
            <strong>🌿 ${mensagem || "Minha jornada literária"}</strong>
            <span>Desbravando o Brasil através de seus autores.</span>
        </div>
        <div class="share-rodape">BRASIL LITERÁRIO</div>
        <div class="share-decor share-decor-bottom"></div>`;

    const wrapper = card.querySelector(".share-mapa");
    const mapaClone = svgMapa.cloneNode(true);
    mapaClone.removeAttribute("style");
    mapaClone.setAttribute("width", "850");
    mapaClone.setAttribute("height", "870");
    mapaClone.style.width = "850px";
    mapaClone.style.height = "auto";
    mapaClone.style.display = "block";
    mapaClone.querySelectorAll(".estado").forEach((estado) => {
        const lido = estado.classList.contains("lido");
        estado.querySelectorAll("path,.circle").forEach((elemento) => {
            elemento.style.setProperty("fill", lido ? "#075044" : "#4da996", "important");
        });
        estado.querySelectorAll("text").forEach((texto) => texto.style.fill = "#ffffff");
    });
    wrapper.appendChild(mapaClone);

    document.body.appendChild(card);
    return card;
}

async function compartilharResultado() {
    const botao = document.querySelector("#botao-compartilhar");
    const textoOriginal = botao.innerHTML;
    botao.disabled = true;
    botao.innerHTML = "Preparando meu resultado…";

    try {
        const html2canvas = await carregarHtml2Canvas();
        await document.fonts.ready;
        const card = criarCardCompartilhamento();
        const canvas = await html2canvas(card, {
            width: 1080,
            height: 1920,
            scale: 1,
            backgroundColor: "#f7f3e9",
            useCORS: true,
            logging: false
        });

        const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
        card.remove();
        if (!blob) throw new Error("Não foi possível gerar a imagem.");

        const arquivo = new File([blob], "meu-brasil-literario.png", { type: "image/png" });
        const dados = { files: [arquivo], title: "Meu Brasil Literário", text: "Minha jornada pela literatura brasileira 📚🇧🇷" };

        if (navigator.share && (!navigator.canShare || navigator.canShare(dados))) {
            await navigator.share(dados);
        } else {
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "meu-brasil-literario.png";
            link.click();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
            alert("A imagem foi salva. Agora você pode publicar no Instagram Stories.");
        }
    } catch (erro) {
        const card = document.querySelector("#card-compartilhar");
        if (card) card.remove();
        if (erro.name !== "AbortError") {
            console.error(erro);
            alert("Não consegui gerar o compartilhamento agora. Tente novamente.");
        }
    } finally {
        botao.disabled = false;
        botao.innerHTML = textoOriginal;
    }
}

const progresso = document.querySelector("#progresso");
if (progresso && !document.querySelector("#botao-compartilhar")) {
    const botaoCompartilhar = document.createElement("button");
    botaoCompartilhar.id = "botao-compartilhar";
    botaoCompartilhar.type = "button";
    botaoCompartilhar.innerHTML = "↗ Compartilhar meu resultado";
    botaoCompartilhar.addEventListener("click", compartilharResultado);
    progresso.parentNode.insertBefore(botaoCompartilhar, progresso.nextSibling);
}
