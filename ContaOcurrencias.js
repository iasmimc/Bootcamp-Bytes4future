// 2 - contaOcurrencias - Map
// Implementa a função contaOcurrencias que recebe um array e retorna um mapa
// em que as chaves são os elementos únicos no array e os valores a quantidade de vezes
// que esses elementos se repetem.

function contaOcurrencias(array) {
  const mapa = new Map();
  for (let i = 0; i < array.length; i++) {
    if (mapa.has(array[i])) {
      mapa.set(array[i], mapa.get(array[i]) + 1);
    } else {
      mapa.set(array[i], 1);
    }
  }
  return mapa;
}
console.log(contaOcurrencias(["a", "b", "c", "b", "c", "c", "d"]));

// A função contaOcurrencias cria um novo mapa vazio e percorre cada elemento do array. Se o elemento já estiver no mapa, o valor correspondente é incrementado em 1. Caso contrário, o elemento é adicionado ao mapa com um valor inicial de 1. No final, a função retorna o mapa completo.

// Espero que isso ajude! Deixe-me saber se você tiver alguma outra dúvida.
