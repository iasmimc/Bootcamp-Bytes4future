// Cria uma função que recebe um array como argumento e verifica se todos os elementos são negativos.

// Utiliza o que aprendeste sobre o every para resolver este exercício.

function todosSaoNegativos(array) {
  // escreve aqui a função
  const soNeg = array.every(function (ele) {
    return ele < 0;
  });
  return soNeg;
}
