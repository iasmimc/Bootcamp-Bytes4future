// Cria uma função que recebe um array como argumento e retorna um array com a parte decimal de cada elemento arredondada por defeito às centésimas.

// Utiliza o que aprendeste sobre o map  para resolver este exercício.

function partesDecimais(array) {
  return array.map(function (num) {
    const [, decimal] = String(num).split(".");

    return Number(`0.${decimal.substring(0, 2)}`);
  });
}
console.log(partesDecimais([1.2, 2.34, 3.234, 4.44]));
