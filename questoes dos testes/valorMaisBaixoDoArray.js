// Cria uma função que recebe um array como argumento e retorna o valor mais baixo desse array
function valorMaisBaixoDoArray(array) {
  // escreve aqui a função
  if (array.length === 0) {
    return undefined;
  }
  return Math.min.apply(null, array);
}
