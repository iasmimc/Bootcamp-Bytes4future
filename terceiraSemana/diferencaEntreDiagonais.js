// Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a o valor da diferença entre a soma da diagonal principal (começa no canto superior esquerdo e termina no canto inferior direito) e a soma da diagonal secundária (começa no canto superior direito e termina no canto inferior esquerdo).

function diferencaEntreDiagonais(matrizquadrada) {
  let somaDiagonalPrincipal = 0;
  let somaDiagonalSecundaria = 0;
  for (let i = 0; i < matrizquadrada.length; i++) {
    somaDiagonalPrincipal += matrizquadrada[i][i];
    somaDiagonalSecundaria += matrizquadrada[i][matrizquadrada.length - i - 1];
  }
  return somaDiagonalPrincipal - somaDiagonalSecundaria;
}
