// cria uma funcao que retorna true se todos os elementos do array forem pares.

function arrayForPar(array) {
  return array.every((elemento) => elemento % 2 === 0);
}

console.log(arrayForPar([1, 2, 3, 4]));
console.log(arrayForPar([2, 4]));
