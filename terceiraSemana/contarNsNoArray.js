// Cria uma função que recebe um array e um número como argumentos e retorna o número de vezes em que n aparece nesse array.

// Utiliza o que aprendeste sobre filter para resolver este exercício.
function contarNumero(array, numero) {
  return array.filter(function (elemento) {
    return elemento === numero;
  }).length;
}
