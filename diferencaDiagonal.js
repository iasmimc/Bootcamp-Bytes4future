// implementa a funcao diferencaDiagonal que recebe uma matriz quadrada e retorna a
// diferenca absuluta entre as somas diagonais.

function diferencaDiagonal(matriz) {
  let result = 0;
  for (let i = 0; i < matriz.length; i++) {
    result += matriz[i][i] - matriz[i][matriz.length - 1 - i];
  }
  return Math.abs(result);
}
console.log(
  diferencaDiagonal([
    [3, 3, 3],
    [4, 8, 9],
    [1, 8, 9],
  ])
);
console.log(
  diferencaDiagonal([
    [3, 3, 3],
    [4, 8, 9],
    [9, 8, 1],
  ])
);
