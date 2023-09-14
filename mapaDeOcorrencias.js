// cria uma funcao que reduz um array de numeros para map que tem como chaves os valores
// do array e como valores o numero de ocorrencias da chave

function eOcorrencias(array) {
  return array.reduce((map, ele) => {
    return map.set(ele, map.get(ele) ? map.get(ele) + 1 : 1);
  }, new Map());
}

console.log(
  mapaDeOcorrencias(["a", "b", "c", "d", "e", "a", "e", "i", "o", "u"])
);
