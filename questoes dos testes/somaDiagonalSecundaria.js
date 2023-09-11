// Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a soma de todos os elementos da diagonal secundária (começa no canto superior direito e termina no canto inferior esquerdo).

function somaDiagonalSecundaria(matrizquadrada) {
  // Verifica se a matriz é quadrada
  if (matrizquadrada.length !== matrizquadrada[0].length) {
    return "A matriz não é quadrada.";
  }

  // Soma os elementos da diagonal secundária
  let soma = 0;
  for (let i = 0; i < matrizquadrada.length; i++) {
    soma += matrizquadrada[i][matrizquadrada.length - 1 - i];
  }

  // Retorna o valor da soma
  return soma;
}
