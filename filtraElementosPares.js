// cria uma funcao que filtra os elementos pares, mapeia cada elemento  para o seu quadro
// e por fim reduz o array para calcular o somatorio dos elementos resultantes.

function filtraElementosPares(array) {
  return array
    .filter((elemento) => elemento % 2 === 0)
    .map((elemento) => Math.pow(elemento, 2))
    .reduce((acumulador, elemento) => acumulador + elemento);
}
console.log(filtraElementosPares([1, 2, 3, 4, 5, 6]));
