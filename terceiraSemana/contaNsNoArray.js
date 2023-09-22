// Cria uma função que recebe um array e um número como argumentos e retorna o número de vezes em que n aparece nesse array.

// Utiliza o que aprendeste sobre  para resolver este exercício.

function countOccurrences(arr, n) {
  return arr.filter((item) => item === n).length;
}
