// Cria uma função que recebe um array como argumento e retorna o array invertido.

// Utiliza o que aprendeste sobre a recursao para resolver este exercício.

function inverteArray(array) {
  // Verifica se o array está vazio
  if (array.length === 0) {
    return [];
  }

  // Remove o último elemento do array e concatena com a chamada recursiva
  return [array[array.length - 1]].concat(inverteArray(array.slice(0, -1)));
}
