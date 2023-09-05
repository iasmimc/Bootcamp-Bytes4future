function adicionarJogada(jogo, jogador, linha, coluna) {
  let novoJogo = JSON.parse(JSON.stringify(jogo));
  let novoJogo2 = structuredClone(jogo);
  let tabuleiro = novoJogo.tabuleiro;

  if (tabuleiro[linha][coluna] === " ") {
    tabuleiro[linha][coluna] = jogador;
  }

  return novoJogo;
}

function obterJogadasPossiveis(jogo) {
  let tabuleiro = jogo.tabuleiro;
  let jogadasPossiveis = [];

  for (let linha = 0; linha < tabuleiro.length; linha++) {
    for (let posicao = 0; posicao < tabuleiro[linha].length; posicao++) {
      if (tabuleiro[linha][posicao] === " ") {
        jogadasPossiveis.push({ linha: linha, coluna: posicao });
      }
    }
  }

  return jogadasPossiveis;
}

function verificarVencedor(jogo) {
  let tabuleiro = jogo.tabuleiro;

  let vencedorX = "XXX";
  let vencedorO = "OOO";

  let sequenciasPossiveis = [];
  // ["X-O", "X-O", "X-O", "X-O", "--O", "XXO", "XOO", "XXX"]
  let diagonalP = "";
  let diagonalS = "";
  let linha = "";
  let coluna = "";

  for (let i = 0; i < tabuleiro.length; i++) {
    diagonalP += tabuleiro[i][i];
    diagonalS += tabuleiro[i][tabuleiro.length - 1 - i];
    for (let j = 0; j < tabuleiro[i].length; j++) {
      linha += tabuleiro[i][j];
      coluna += tabuleiro[j][i];
    }
    sequenciasPossiveis.push(...[linha, coluna]);
    linha = "";
    coluna = "";
  }

  sequenciasPossiveis.push(...[diagonalP, diagonalS]);

  if (sequenciasPossiveis.includes(vencedorX)) {
    return "X";
  } else if (sequenciasPossiveis.includes(vencedorO)) {
    return "O";
  }
}

function verificarFimDoJogo(jogo) {
    return verificarVencedor(jogo) !== undefined || obterJogadasPossiveis(jogo).length === 0

}

// 1 - Test Adicionar Jogada
jogo = {
  tabuleiro: [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
};
originalString = JSON.stringify(jogo);
novoJogo = adicionarJogada(jogo, "X", 0, 0);
console.log(
  JSON.stringify(jogo) === originalString &&
    originalString !== JSON.stringify(novoJogo) &&
    JSON.stringify(novoJogo) ===
      JSON.stringify({
        tabuleiro: [
          ["X", " ", " "],
          [" ", " ", " "],
          [" ", " ", " "],
        ],
      })
);

// 2 - Test Adicionar Jogada Impossível - X
jogo = {
  tabuleiro: [
    ["O", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
};
originalString = JSON.stringify(jogo);
novoJogo = adicionarJogada(jogo, "X", 0, 0);
console.log(
  JSON.stringify(jogo) === originalString &&
    originalString === JSON.stringify(novoJogo) &&
    JSON.stringify(novoJogo) ===
      JSON.stringify({
        tabuleiro: [
          ["O", " ", " "],
          [" ", " ", " "],
          [" ", " ", " "],
        ],
      })
);

// 3 - Test Adicionar Jogada Impossível - O
jogo = {
  tabuleiro: [
    ["X", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
};
originalString = JSON.stringify(jogo);
novoJogo = adicionarJogada(jogo, "O", 0, 0);

console.log(
  JSON.stringify(jogo) === originalString &&
    originalString === JSON.stringify(novoJogo) &&
    JSON.stringify(novoJogo) ===
      JSON.stringify({
        tabuleiro: [
          ["X", " ", " "],
          [" ", " ", " "],
          [" ", " ", " "],
        ],
      })
);

// 4 - Test Adicionar Jogada Possível
jogo = {
  tabuleiro: [
    ["O", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
};
originalString = JSON.stringify(jogo);
novoJogo = adicionarJogada(jogo, "X", 1, 1);

console.log(
  JSON.stringify(jogo) === originalString &&
    originalString !== JSON.stringify(novoJogo) &&
    JSON.stringify(novoJogo) ===
      JSON.stringify({
        tabuleiro: [
          ["O", " ", " "],
          [" ", "X", " "],
          [" ", " ", " "],
        ],
      })
);

// 5 - Test Adicionar Jogada Possível - Jogador 2
jogo = {
  tabuleiro: [
    ["X", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ],
};
originalString = JSON.stringify(jogo);
novoJogo = adicionarJogada(jogo, "O", 1, 1);

console.log(
  JSON.stringify(jogo) === originalString &&
    originalString !== JSON.stringify(novoJogo) &&
    JSON.stringify(novoJogo) ===
      JSON.stringify({
        tabuleiro: [
          ["X", " ", " "],
          [" ", "O", " "],
          [" ", " ", " "],
        ],
      })
);

//2 Jogadas
jogo = {
  tabuleiro: [
    ["O", "X", "X"],
    ["X", "O", "O"],
    [" ", "X", " "],
  ],
  jogadorAtual: "X",
};

let jogadasPossiveis = obterJogadasPossiveis(jogo);
console.log(
  JSON.stringify(jogadasPossiveis) ===
    JSON.stringify([
      { linha: 2, coluna: 0 },
      { linha: 2, coluna: 2 },
    ])
);

jogo = {
  tabuleiro: [
    ["O", " ", "X"],
    ["X", "O", "O"],
    [" ", "X", " "],
  ],
  jogadorAtual: "X",
};

jogadasPossiveis = obterJogadasPossiveis(jogo);
console.log(
  JSON.stringify(jogadasPossiveis) ===
    JSON.stringify([
      { linha: 0, coluna: 1 },
      { linha: 2, coluna: 0 },
      { linha: 2, coluna: 2 },
    ])
);

jogo = {
  tabuleiro: [
    ["O", "X", "X"],
    ["X", "O", "O"],
    ["O", "X", "X"],
  ],
  jogadorAtual: "X",
};

jogadasPossiveis = obterJogadasPossiveis(jogo);
console.log(JSON.stringify(jogadasPossiveis) === JSON.stringify([]));

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
