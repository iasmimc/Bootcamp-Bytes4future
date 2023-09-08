// function contarPares(array, index = 0) {
//   // Verifica se atingimos o final do array
//   if (index === array.length) {
//     return 0;
//   }

//   // Verifica se o elemento atual é par
//   if (array[index] % 2 === 0) {
//     // Se for par, adicionamos 1 ao resultado e chamamos a função recursivamente
//     return 1 + contarPares(array, index + 1);
//   } else {
//     // Se não for par, apenas chamamos a função recursivamente
//     return contarPares(array, index + 1);
//   }
// }

// // Exemplo de uso:
// const meuArray = [1, 2, 3, 4, 5, 6, 7, 8];
// const numeroDePares = contarPares(meuArray);
// console.log(`O número de pares no array é: ${numeroDePares}`);

// function countEvenNumbers(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n % 2 === 0) {
//     return 1 + countEvenNumbers(n - 1);
//   } else {
//     return countEvenNumbers(n - 1);
//   }
// }

// const meuArray = [1, 2, 3, 4, 5, 6, 7, 8];
// const numeroDePares = contarPares(meuArray);
// console.log(`O número de pares no array é: ${numeroDePares}`);

function contarPares(array) {
  if (array.length === 0) {
    return 0;
  }
  let contagem = 0;
  if (array[array.length - 1] % 2 === 0) {
    contagem++;
  }
  array.pop();
  return (contagem += contarPares(array));
}
console.log(contarPares([]));
console.log(contarPares([1, 2, 3, 4, 5, 6, 7, 8, 9]));
