// Cria uma função que recebe um array de duas dimensões, uma matriz quadrada como argumento e calcula a soma de todos os elementos da diagonal principal (começa no canto superior esquerdo e termina no canto inferior direito).

function sumDiagonal(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }
  return sum;
}
