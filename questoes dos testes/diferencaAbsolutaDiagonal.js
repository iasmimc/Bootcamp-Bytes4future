// Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como
// argumento e calcula a o valor absoluto da diferença entre a soma da diagonal
// principal (começa no canto superior esquerdo e termina no canto inferior direito) e a
// soma da diagonal secundária (começa no canto superior direito e termina no canto
// inferior esquerdo).

function diferencaAbsolutaEntreDiagonais(matrizquadrada) {
  // escreve aqui a função
  let somaDiagonalPrincipal = 0,
    somaDiagonalInversa = 0;
  const tamanhoMatriz = matrizquadrada.length;

  for (let i = 0; i < tamanhoMatriz; i++) {
    somaDiagonalPrincipal += matrizquadrada[i][i];
    somaDiagonalInversa += matrizquadrada[i][tamanhoMatriz - 1 - i];
  }
  return Math.abs(somaDiagonalPrincipal - somaDiagonalInversa);
}
