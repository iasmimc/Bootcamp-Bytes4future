// // const jogo = {
// //   tabuleiro: [
// //     [" ", " ", " "],
// //     [" ", " ", " "],
// //     [" ", " ", " "],
// //   ],
// // };

// // function adicionarJogada(jogo, jogador, linha, coluna) {
// //   // armazena X ou O na linhaxcoluna escolhida
// //   jogo.tabuleiro[linha][coluna] = jogador;
// // }

// function obterJogadasPossíveis(jogo) {
//   const jogadas = [];

//   for (let linha = 0; linha < 3; linha++) {
//     for (let coluna = 0; coluna < 3; coluna++) {
//       // encontra os espaços em branco e salva no array jogadas as posições
//       if (jogo.tabuleiro[linha][coluna] === " ") {
//         jogadas.push({ linha, coluna });
//       }
//     }
//   }

//   return jogadas;
// }

// function verificarVencedor(jogo) {
//   const jodagores = ["X", "O"];

//   // valida se alguma das linhas do tabuleiro, tem todos elementos iguais.
//   const validaLinha = (jogador) =>
//     jogo.tabuleiro.some((linha) => linha.every((j) => j === jogador));

//   // valida se alguma coluna do tabuleiro, tem todos elementos iguais.
//   const validaColuna = (jogador) => {
//     for (let col = 0; col < 3; col++) {
//       if (jogo.tabuleiro.every((linha) => linha[col] === jogador)) {
//         return true;
//       }
//     }
//     return false;
//   };

//   const validaDiagonal = (jogador) => {
//     // se todas posições na diagonal principal são iguais
//     return (
//       jogo.tabuleiro.every((linha, indice) => linha[indice] === jogador) ||
//       // se todas posições na diagonal inversa são iguais
//       jogo.tabuleiro.every((linha, indice) => linha[3 - 1 - indice] === jogador)
//     );
//   };

//   // verifica se algum dos jogadores ganhou o jogo (olhando para linhas, colunas e diagonais)
//   for (const jogador of jodagores) {
//     if (
//       validaLinha[jogador] ||
//       validaColuna(jogador) ||
//       validaDiagonal(jogador)
//     ) {
//       return jogador;
//     }
//   }

//   return undefined;
// }

// function verificarFimDoJogo(jogo) {
//   // se já há vencedor, então o jogo acabou.
//   if (verificarVencedor(jogo)) {
//     return true;
//   }
//   // procura por espaços em branco, se houver algum, o jogo não acabou.
//   for (let linha = 0; linha < 3; linha++) {
//     for (let coluna = 0; coluna < 3; coluna++) {
//       if (jogo.tabuleiro[linha][coluna] === " ") {
//         return false;
//       }
//     }
//   }

//   return true;
// }

function adicionarJogada(jogo, jogador, linha, coluna) {
  if (jogo.tabuleiro[linha][coluna] === " ") {
    jogo.tabuleiro[linha][coluna] = jogador;
  }

  return jogo;
}

function obterJogadasPossiveis(jogo) {
  let jogadaPossiveis = [];

  for (let i = 0; i < jogo.tabuleiro.length; i++) {
    for (let j = 0; j < jogo.tabuleiro[i].length; j++) {
      if (jogo.tabuleiro[i][j] === " ") {
        jogadaPossiveis.push({ linha: i, coluna: j });
      }
    }
  }
  return jogadaPossiveis;
}

function verificarVencedor(jogo) {
  if (
    jogo.tabuleiro[0][0] === "X" &&
    jogo.tabuleiro[0][1] === "X" &&
    jogo.tabuleiro[0][2] === "X"
  ) {
    return "X";
  } else if (
    jogo.tabuleiro[1][0] === "X" &&
    jogo.tabuleiro[1][1] === "X" &&
    jogo.tabuleiro[1][2] === "X"
  ) {
    return "X";
  } else if (
    jogo.tabuleiro[2][0] === "X" &&
    jogo.tabuleiro[2][1] === "X" &&
    jogo.tabuleiro[2][2] === "X"
  ) {
    return "X";
  } else if (
    jogo.tabuleiro[0][0] === "X" &&
    jogo.tabuleiro[1][0] === "X" &&
    jogo.tabuleiro[2][0] === "X"
  ) {
    return "X";
  } else if (
    jogo.tabuleiro[0][1] === "X" &&
    jogo.tabuleiro[1][1] === "X" &&
    jogo.tabuleiro[2][1] === "X"
  ) {
    return "X";
  } else if (
    jogo.tabuleiro[0][2] === "X" &&
    jogo.tabuleiro[1][2] === "X" &&
    jogo.tabuleiro[2][2] === "X"
  ) {
    return "X";
  } else if (
    jogo.tabuleiro[0][0] === "X" &&
    jogo.tabuleiro[1][1] === "X" &&
    jogo.tabuleiro[2][2] === "X"
  ) {
    return "X";
  } else if (
    jogo.tabuleiro[2][0] === "X" &&
    jogo.tabuleiro[1][1] === "X" &&
    jogo.tabuleiro[0][2] === "X"
  ) {
    return "X";
  }

  if (
    jogo.tabuleiro[0][0] === "O" &&
    jogo.tabuleiro[0][1] === "O" &&
    jogo.tabuleiro[0][2] === "O"
  ) {
    return "O";
  } else if (
    jogo.tabuleiro[1][0] === "O" &&
    jogo.tabuleiro[1][1] === "O" &&
    jogo.tabuleiro[1][2] === "O"
  ) {
    return "O";
  } else if (
    jogo.tabuleiro[2][0] === "O" &&
    jogo.tabuleiro[2][1] === "O" &&
    jogo.tabuleiro[2][2] === "O"
  ) {
    return "O";
  } else if (
    jogo.tabuleiro[0][0] === "O" &&
    jogo.tabuleiro[1][0] === "O" &&
    jogo.tabuleiro[2][0] === "O"
  ) {
    return "O";
  } else if (
    jogo.tabuleiro[0][1] === "O" &&
    jogo.tabuleiro[1][1] === "O" &&
    jogo.tabuleiro[2][1] === "O"
  ) {
    return "O";
  } else if (
    jogo.tabuleiro[0][2] === "O" &&
    jogo.tabuleiro[1][2] === "O" &&
    jogo.tabuleiro[2][2] === "O"
  ) {
    return "O";
  } else if (
    jogo.tabuleiro[0][0] === "O" &&
    jogo.tabuleiro[1][1] === "O" &&
    jogo.tabuleiro[2][2] === "O"
  ) {
    return "O";
  } else if (
    jogo.tabuleiro[2][0] === "O" &&
    jogo.tabuleiro[1][1] === "O" &&
    jogo.tabuleiro[0][2] === "O"
  ) {
    return "O";
  }
}

function verificarFimDoJogo(jogo) {
  return (
    verificarVencedor(jogo) === "X" ||
    verificarVencedor(jogo) === "O" ||
    obterJogadasPossiveis(jogo).length === 0
  );
}
