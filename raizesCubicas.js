// Cria uma função que recebe um array como argumento e retorna um array com a raiz cúbica de cada elemento.

// Utiliza o que aprendeste sobre o Map para resolver este exercício.

function raizesCubicas(array) {
  // Retorna um novo array com as raízes cúbicas dos elementos
  return array.map(function (elemento) {
    return Math.cbrt(elemento);
  });
}
