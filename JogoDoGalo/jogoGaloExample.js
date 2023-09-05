function adicionarJogada(jogo, jogador, linha, coluna) {
    //const novoTabuleiro = [...jogo.tabuleiro]; // cria um shallow clone do tabuleiro original
    
    //const novoTabuleiro = structuredClone(jogo.tabuleiro); // cria um deep clone do tabuleiro original
    
    //const novoTabuleiro = []
   
    const novoJogo = {
      tabuleiro: novoTabuleiro = [],
      //jogadorAtual: jogo.jogadorAtual === "X" ? "O" : "X", // alterna o jogador atual
    };
    
    for (let linhas = 0; linhas < jogo.tabuleiro.length; linhas++) {
      novoTabuleiro[linhas] = new Array(jogo.tabuleiro[linhas].length);
      for (let colunas = 0; colunas < jogo.tabuleiro[linhas].length; colunas++) {
        novoTabuleiro[linhas][colunas] = jogo.tabuleiro[linhas][colunas];
      }
    }
        
    if (novoTabuleiro[linha][coluna] === " ") { // verifica se a posição está vazia
      novoTabuleiro[linha][coluna] = jogador; // adiciona a jogada no tabuleiro
    }
      return novoJogo; // retorna o objeto igual ao original caso a posição já esteja ocupada
}


/* function verificarVencedor(jogo) {
    const combinacoesVencedoras = [
        [[0,0], [0,1], [0,2]], // Linha 1
        [[1,0], [1,1], [1,2]], // Linha 2
        [[2,0], [2,1], [2,2]], // Linha 3
        [[0,0], [1,0], [2,0]], // Coluna 1
        [[0,1], [1,1], [2,1]], // Coluna 2
        [[0,2], [1,2], [2,2]], // Coluna 3
        [[0,0], [1,1], [2,2]], // Diagonal principal
        [[0,2], [1,1], [2,0]], // Diagonal secundária
    ];

    for (let i = 0; i < combinacoesVencedoras.length; i++) {
        const combinacao = combinacoesVencedoras[i];
        const linha1aPosicao = combinacao[0][0];
        const coluna1aPosicao = combinacao[0][1];
        const linha2aPosicao = combinacao[1][0];
        const coluna2aPosicao = combinacao[1][1];
        const linha3aPosicao = combinacao[2][0];
        const coluna3aPosicao = combinacao[2][1];

        const simbolo1 = jogo.tabuleiro[linha1aPosicao][coluna1aPosicao];
        const simbolo2 = jogo.tabuleiro[linha2aPosicao][coluna2aPosicao];
        const simbolo3 = jogo.tabuleiro[linha3aPosicao][coluna3aPosicao];

        if (simbolo1 !== " " && simbolo1 === simbolo2 && simbolo1 === simbolo3) {
            return simbolo1;
        }
  }
  
    return undefined;
} */

function verificarVencedor(jogo) {
    const sequencias = obtemSequencias(jogo)
    if (sequencias.includes("XXX")) return "X"
    if (sequencias.includes("OOO")) return "O"
    return undefined
}

function obtemSequencias(jogo) {
    // ["XXX", "___", "___", "___", "___", "___", "___", "___"]

    return obtemLinhas(jogo)
        .concat(obtemColunas(jogo))
        .concat(obtemDiagonais(jogo))
}

function obtemLinhas(jogo) {
    let linhas = []

    for (let i = 0; i < jogo.tabuleiro.length; i++) {
        linhas.push(jogo.tabuleiro[i].join(""))
    }
    return linhas
}

function obtemColunas(jogo) {
    let colunas = []

    for (let i = 0; i < jogo.tabuleiro.length; i++) {
        // i = coluna
        let coluna = ""
        for (let j = 0; j < jogo.tabuleiro.length; j++) {
            // j = linha
            coluna += jogo.tabuleiro[j][i]
        }
        colunas.push(coluna)
    }
    return colunas
}


function obtemDiagonais(jogo) {
    let diagonais = ["", ""] // guarda as duas diagonais

    for (let i = 0; i < jogo.tabuleiro.length; i++) {
        diagonais[0] += jogo.tabuleiro[i][i] // diagonal principal
        diagonais[1] += jogo.tabuleiro[i][jogo.tabuleiro.length - 1 - i] // diagonal secundária
    }
    return diagonais
}


function obterJogadasPossiveis(jogo) {
    let jogadasPossiveis = []
  
    for (let linha = 0; linha < jogo.tabuleiro.length; linha++) {
        for (let coluna = 0; coluna < jogo.tabuleiro[linha].length; coluna++) {
            if (jogo.tabuleiro[linha][coluna] === " ") {
                jogadasPossiveis.push({ linha: linha, coluna: coluna })
            }
        }
    }

    return jogadasPossiveis
}
  
function verificarFimDoJogo(jogo) {
      return obterJogadasPossiveis(jogo).length === 0
          || verificarVencedor(jogo) !== undefined
}


// 1 - Test Adicionar Jogada
jogo = {
    tabuleiro: [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]
}
originalString = JSON.stringify(jogo)
novoJogo = adicionarJogada(jogo, "X", 0, 0)
console.log(
    JSON.stringify(jogo) === originalString
    && originalString !== JSON.stringify(novoJogo)
    && JSON.stringify(novoJogo) === JSON.stringify({
        tabuleiro: [
            ["X", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ]
    })
)


// 2 - Test Adicionar Jogada Impossível - X
jogo = {
    tabuleiro: [
        ["O", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]
}
originalString = JSON.stringify(jogo)
novoJogo = adicionarJogada(jogo, "X", 0, 0)
console.log(
    JSON.stringify(jogo) === originalString
    && originalString === JSON.stringify(novoJogo)
    && JSON.stringify(novoJogo) === JSON.stringify({
        tabuleiro: [
            ["O", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ]
    })

)

// 3 - Test Adicionar Jogada Impossível - O
jogo = {
    tabuleiro: [
        ["X", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]
}
originalString = JSON.stringify(jogo)
novoJogo = adicionarJogada(jogo, "O", 0, 0)

console.log( JSON.stringify(jogo) === originalString
    && originalString === JSON.stringify(novoJogo)
    && JSON.stringify(novoJogo) === JSON.stringify({
        tabuleiro: [
            ["X", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ]
    })
)

// 4 - Test Adicionar Jogada Possível
jogo = {
    tabuleiro: [
        ["O", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]
}
originalString = JSON.stringify(jogo)
novoJogo = adicionarJogada(jogo, "X", 1, 1)

console.log(
    JSON.stringify(jogo) === originalString
    && originalString !== JSON.stringify(novoJogo)
    && JSON.stringify(novoJogo) === JSON.stringify({
        tabuleiro: [
            ["O", " ", " "],
            [" ", "X", " "],
            [" ", " ", " "],
        ],
    })
)

// 5 - Test Adicionar Jogada Possível - Jogador 2
jogo = {
    tabuleiro: [
        ["X", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]
}
originalString = JSON.stringify(jogo)
novoJogo = adicionarJogada(jogo, "O", 1, 1)

console.log(
    JSON.stringify(jogo) === originalString
    && originalString !== JSON.stringify(novoJogo)
    && JSON.stringify(novoJogo) === JSON.stringify({
        tabuleiro: [
            ["X", " ", " "],
            [" ", "O", " "],
            [" ", " ", " "],
        ]
    })
)

//2 Jogadas
jogo = {
    tabuleiro: [
        ["O", "X", "X"],
        ["X", "O", "O"],
        [" ", "X", " "],
    ],
    jogadorAtual: 'X'
}

let jogadasPossiveis = obterJogadasPossiveis(jogo)
console.log(
    JSON.stringify(jogadasPossiveis) === JSON.stringify([
        { linha: 2, coluna: 0 },
        { linha: 2, coluna: 2 },
    ])
)


jogo = {
    tabuleiro: [
        ["O", " ", "X"],
        ["X", "O", "O"],
        [" ", "X", " "],
    ],
    jogadorAtual: 'X'
}

jogadasPossiveis = obterJogadasPossiveis(jogo)
console.log(
    JSON.stringify(jogadasPossiveis) === JSON.stringify([
        { linha: 0, coluna: 1 },
        { linha: 2, coluna: 0 },
        { linha: 2, coluna: 2 },
    ])
)


jogo = {
    tabuleiro: [
        ["O", "X", "X"],
        ["X", "O", "O"],
        ["O", "X", "X"],
    ],
    jogadorAtual: 'X'
}

jogadasPossiveis = obterJogadasPossiveis(jogo)
console.log( JSON.stringify(jogadasPossiveis) === JSON.stringify([]))



jogo = {
    tabuleiro: [
        ["X", " ", "X"],
        ["X", "O", "X"],
        [" ", " ", "O"],
    ],
    jogadorAtual: 'X'
}

console.log( verificarVencedor(jogo) === undefined)


 jogo = {
    tabuleiro: [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["X", " ", "O"],
    ]
}
console.log( verificarVencedor(jogo) === "X")
// "X"



 jogo = {
    tabuleiro: [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["X", " ", "O"],
    ]
}

console.log( verificarFimDoJogo(jogo) === true)


 jogo = {
    tabuleiro: [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["O", "X", "O"],
    ]
}


console.log( verificarFimDoJogo(jogo) === true)



 jogo = {
    tabuleiro: [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]
}

console.log( verificarFimDoJogo(jogo) === false)