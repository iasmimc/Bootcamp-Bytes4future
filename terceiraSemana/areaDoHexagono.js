// Cria uma função que recebe o lado de um hexágono como argumento e calcula a área dessa figura geométrica.

// Retorna o inteiro inferior mais próximo da área Math.floor.

// Utiliza o que aprendeste sobre number para resolver este exercício.

function areaDoHexagono(lado) {
  let area = ((3 * Math.sqrt(3)) / 2) * lado ** 2;
  return Math.floor(area);
}
