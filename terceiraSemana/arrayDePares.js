// Cria uma função que recebe um array como argumento e retorna um array com os números pares desse array.

// Utiliza o que aprendeste sobre Arrays  para resolver este exercício.

function arrayDePares(array) {
  // escreve aqui a função
  const pares = array.filter((numero) => numero % 2 === 0);
  return pares;
}
