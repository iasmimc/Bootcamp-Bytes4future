// function rVencedor(jogo) {
//   const linhas = obterLinhas(jogo);
//   return linhas.includes("XXX")
//     ? "X"
//     : linhas.includes("OOO")
//     ? "O"
//     : undefined;
// }

// function obterLinhas(jogo) {
//   const tabuleiro = jogo.tabuleiro;
//   const linhas = jogo.map((tabuleiro) => tabuleiro.join(""));
//   const colunas = [];
//   const diagonais = ["", ""];
//   for (let i = 0; i < tabuleiro.length; i++) {
//     diagonais[0] += tabuleiro[i][i];
//     diagonais[1] += tabuleiro[i][tabuleiro.length - 1 - i];
//     colunas.push(tabuleiro.map((linhas) => linhas[i]).join(""));
//   }
//   return linhas.concat(colunas).concat(diagonais);
// }

// console.log(rVencedor(x));

function rVencedor(jogo) {
  const linhas = obterLinhas(jogo);
  return linhas.includes("XXX")
    ? "X"
    : linhas.includes("OOO")
    ? "O"
    : undefined;
}

function obterLinhas(jogo) {
  const tabuleiro = jogo.tabuleiro;
  const linhas = tabuleiro.map((t) => t.join(""));
  const colunas = [];
  const diagonais = ["", ""];

  for (let i = 0; i < tabuleiro.length; i++) {
    diagonais[0] += tabuleiro[i][i];
    diagonais[1] += tabuleiro[i][tabuleiro.length - 1 - i];
    colunas.push(tabuleiro.map((l) => l[i]).join(""));
  }
  return linhas.concat(colunas).concat(diagonais);
}
