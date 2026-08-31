const autoresPorEstado = {

    "Acre": [
        "Agamémnon Parente Moraes"
    ],

    "Alagoas": [
        "Graciliano Ramos",
        "Jorge de Lima",
        "Lêdo Ivo",
        "Rachel de Queiroz"
    ],

    "Amapá": [
        "Carla Nobre",
        "Fernando Canto",
        "Alfredo Oliveira"
    ],

    "Amazonas": [
        "Milton Hatoum",
        "Astrid Cabral",
        "Márcio Souza",
        "Thiago de Mello"
    ],

    "Bahia": [
        "Jorge Amado",
        "Castro Alves",
        "Rui Barbosa",
        "Gregório de Matos",
        "João Ubaldo Ribeiro",
        "Myriam Fraga",
        "Jacinta Passos",
        "Adonias Filho"
    ],

    "Ceará": [
        "Rachel de Queiroz",
        "José de Alencar",
        "Patativa do Assaré",
        "Ana Miranda",
        "Juvenal Galeno",
        "Jáder de Carvalho"
    ],

    "Distrito Federal": [
        "Roger Mello",
        "Tatiana Nascimento",
        "Paulliny Tort",
        "Lima Trindade",
        "Lourenço Dutra"
    ],

    "Espírito Santo": [
        "Rubem Braga",
        "Maria Stella de Novaes",
        "Bernardo Horta"
    ],

    "Goiás": [
        "Cora Coralina",
        "José J. Veiga",
        "Bernardo Élis",
        "Hugo de Carvalho Ramos",
        "Eli Brasiliense"
    ],

    "Maranhão": [
        "Gonçalves Dias",
        "Aluísio Azevedo",
        "Artur Azevedo",
        "Ferreira Gullar",
        "Maria Firmina dos Reis",
        "Sousândrade",
        "Nauro Machado"
    ],

    "Mato Grosso": [
        "Manoel de Barros",
        "Luci Collin"
    ],

    "Mato Grosso do Sul": [
        "Raquel Naveira",
        "Olga Barros",
        "Maria da Glória Sá Rosa"
    ],

    "Minas Gerais": [
        "Carlos Drummond de Andrade",
        "João Guimarães Rosa",
        "Adélia Prado",
        "Murilo Mendes",
        "Henriqueta Lisboa",
        "Conceição Evaristo",
        "Murilo Rubião",
        "Fernando Sabino",
        "Paulo Mendes Campos",
        "Helena Morley"
    ],

    "Pará": [
        "Dalcídio Jurandir",
        "Ruy Barata",
        "Haroldo Maranhão",
        "Bruno de Menezes",
        "Eneida de Moraes",
        "Lindanor Celina"
    ],

    "Paraíba": [
        "Ariano Suassuna",
        "Augusto dos Anjos",
        "José Lins do Rego",
        "Zé da Luz",
        "Maria Valéria Rezende"
    ],

    "Paraná": [
        "Dalton Trevisan",
        "Helena Kolody",
        "Emiliano Perneta",
        "Paulo Leminski",
        "Alice Ruiz",
        "Cristovam Buarque"
    ],

    "Pernambuco": [
        "Manuel Bandeira",
        "João Cabral de Melo Neto",
        "Clarice Lispector",
        "Josué de Castro",
        "Joaquim Cardozo",
        "Lêdo Ivo"
    ],

    "Piauí": [
        "Torquato Neto",
        "H. Dobal",
        "Da Costa e Silva",
        "Osmar de Carvalho",
        "Cineas Santos"
    ],

    "Rio de Janeiro": [
        "Machado de Assis",
        "Lima Barreto",
        "Cecília Meireles",
        "Clarice Lispector",
        "Nelson Rodrigues",
        "Rubem Fonseca",
        "Paulo Lins",
        "Carolina Maria de Jesus",
        "Nélida Piñon",
        "Conceição Evaristo"
    ],

    "Rio Grande do Norte": [
        "Nísia Floresta",
        "Câmara Cascudo",
        "Auta de Souza",
        "Jorge Fernandes",
        "Madalena Antunes"
    ],

    "Rio Grande do Sul": [
        "Érico Veríssimo",
        "Mario Quintana",
        "Simões Lopes Neto",
        "Lya Luft",
        "Moacyr Scliar",
        "Caio Fernando Abreu",
        "Cruz e Sousa"
    ],

    "Rondônia": [
        "Viriato Moura",
        "Silvio Romero"
    ],

    "Roraima": [
        "Cristino Wapichana",
        "Aldenor Pimentel",
        "Ernandes Dantas"
    ],

    "Santa Catarina": [
        "Cruz e Sousa",
        "Edla van Steen",
        "Flávio José Cardozo",
        "Lindolf Bell",
        "Salim Miguel"
    ],

    "São Paulo": [
        "Monteiro Lobato",
        "Mário de Andrade",
        "Oswald de Andrade",
        "Hilda Hilst",
        "Lygia Fagundes Telles",
        "Raduan Nassar",
        "Ruth Rocha",
        "Tatiana Belinky",
        "Tarsila do Amaral"
    ],

    "Sergipe": [
        "Tobias Barreto",
        "Sílvio Romero",
        "João Ribeiro",
        "Amando Fontes",
        "Maria Thetis Nunes"
    ],

    "Tocantins": [
        "Eli Brasiliense",
        "Dona Fia"
    ]

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

const CHAVE_STORAGE = "mapaLiterario.estadosLidos";


/* ==========================================
   PERSISTÊNCIA (localStorage)
========================================== */

function carregarEstadosLidos() {

    try {

        const dados = localStorage.getItem(CHAVE_STORAGE);

        return dados ? JSON.parse(dados) : [];

    } catch (erro) {

        console.error("Erro ao ler progresso salvo:", erro);

        return [];

    }

}


function salvarEstadosLidos(lista) {

    try {

        localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));

    } catch (erro) {

        console.error("Erro ao salvar progresso:", erro);

    }

}


function marcarComoLido(nome) {

    const lidos = carregarEstadosLidos();

    if (!lidos.includes(nome)) {

        lidos.push(nome);

        salvarEstadosLidos(lidos);

    }

}


function desmarcarComoLido(nome) {

    const lidos = carregarEstadosLidos().filter(
        (estado) => estado !== nome
    );

    salvarEstadosLidos(lidos);

}


/* ==========================================
   RESTAURA O PROGRESSO AO ABRIR A PÁGINA
========================================== */

function restaurarProgresso() {

    const lidos = carregarEstadosLidos();

    estados.forEach((estado) => {

        const nome = estado.getAttribute("name");

        if (lidos.includes(nome)) {

            estado.classList.add("lido");

        }

    });

    atualizarProgresso();

}


/* ==========================================
   CLIQUE NOS ESTADOS
========================================== */

estados.forEach((estado) => {

    estado.addEventListener("click", () => {

        const nome = estado.getAttribute("name");


        /* ==========================================
           1º CLIQUE
           Abre a janela com os autores
        ========================================== */

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


            /* ==========================================
               POSICIONAMENTO DA JANELA
            ========================================== */

            setTimeout(() => {

                const rect = estado.getBoundingClientRect();

                const margem = 12;

                const larguraJanela = janela.offsetWidth;

                const alturaJanela = janela.offsetHeight;


                const espacoDireita =
                    window.innerWidth - rect.right;

                const espacoEsquerda =
                    rect.left;


                let esquerda;


                /* Tenta colocar à direita */

                if (
                    espacoDireita >=
                    larguraJanela + margem
                ) {

                    esquerda =
                        rect.right + margem;

                }

                /* Se não couber, tenta esquerda */

                else if (
                    espacoEsquerda >=
                    larguraJanela + margem
                ) {

                    esquerda =
                        rect.left -
                        larguraJanela -
                        margem;

                }

                /* Se não couber em nenhum dos lados */

                else {

                    esquerda =
                        Math.max(
                            margem,
                            Math.min(
                                rect.right + margem,
                                window.innerWidth -
                                larguraJanela -
                                margem
                            )
                        );

                }


                /* ==========================================
                   POSIÇÃO VERTICAL
                ========================================== */

                let topo = rect.top;


                /* Se passar da parte inferior,
                   sobe a janela */

                if (
                    topo + alturaJanela >
                    window.innerHeight - margem
                ) {

                    topo =
                        window.innerHeight -
                        alturaJanela -
                        margem;

                }


                /* Evita passar do topo */

                if (topo < margem) {

                    topo = margem;

                }


                janela.style.left =
                    `${esquerda}px`;

                janela.style.top =
                    `${topo}px`;


            }, 0);


            return;

        }


        /* ==========================================
           2º CLIQUE
           Marca o estado
        ========================================== */

        if (!estado.classList.contains("lido")) {

            estado.classList.add("lido");

            marcarComoLido(nome);

            atualizarProgresso();

            janela.style.display = "none";

            return;

        }


        /* ==========================================
           3º CLIQUE
           Desmarca o estado
        ========================================== */

        if (estado.classList.contains("lido")) {

            estado.classList.remove("lido");

            desmarcarComoLido(nome);

            atualizarProgresso();

            janela.style.display = "none";

            /*
             * Permite que o próximo clique
             * abra novamente os autores.
             */

            ultimoEstado = null;

        }

    });

});


/* ==========================================
   ATUALIZA CONTADOR, PERCENTUAL E CLASSIFICAÇÃO
========================================== */

function atualizarProgresso() {

    const estadosLidos =
        document.querySelectorAll(".estado.lido");

    const quantidade =
        estadosLidos.length;

    const percentual =
        (quantidade / 27) * 100;


    quantidadeEstados.textContent =
        quantidade;

    porcentagem.textContent =
        percentual.toFixed(1) + "%";


    /* ==========================================
       CLASSIFICAÇÃO
    ========================================== */

    if (quantidade === 0) {

    classificacao.textContent =
        "💭 Seu mapa literário está esperando por você. Escolha um estado e descubra novos autores!";

} else if (quantidade <= 2) {

    classificacao.textContent =
        "🌱 Começando — todos temos que começar!";

} else if (quantidade <= 5) {

    classificacao.textContent =
        "📖 Leitor em viagem — você já começou a desbravar o Brasil através da literatura!";

} else if (quantidade <= 8) {

    classificacao.textContent =
        "🧭 Explorador literário — você já está conhecendo diferentes partes do Brasil!";

} else if (quantidade <= 11) {

    classificacao.textContent =
        "🇧🇷 Desbravando o Brasil — seu mapa literário está ficando cada vez mais completo!";

} else if (quantidade <= 14) {

    classificacao.textContent =
        "📚 Leitor brasileiro — você já explorou muitos estados através da literatura!";

} else if (quantidade <= 17) {

    classificacao.textContent =
        "🌎 Grande explorador — você já percorreu uma boa parte do mapa literário brasileiro!";

} else if (quantidade <= 20) {

    classificacao.textContent =
        "🏆 Leitor avançado — seu mapa literário está impressionante!";

} else if (quantidade <= 23) {

    classificacao.textContent =
        "🔥 Quase completando o mapa — faltam poucos estados para você desbravar!";

} else if (quantidade <= 26) {

    classificacao.textContent =
        "👑 Mestre da literatura brasileira — falta muito pouco para completar seu mapa!";

} else {

    classificacao.textContent =
        "🇧🇷👑 Desbravador literário do Brasil — você explorou autores de todos os 27 estados!";

}

}


/* ==========================================
   BOTÃO FECHAR
========================================== */

fechar.addEventListener("click", () => {

    janela.style.display = "none";

    /*
     * Reseta para que clicar de novo no mesmo
     * estado reabra a lista de autores, em vez
     * de marcá-lo como lido direto.
     */

    ultimoEstado = null;

});


/* ==========================================
   INICIALIZAÇÃO
========================================== */

restaurarProgresso();