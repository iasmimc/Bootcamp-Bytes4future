// Cria uma função que recebe como argumento um número inteiro de qualquer dimensão e
// retorna o fatorial desse número.
// Utiliza o que aprendeste sobre while para resolver este exercício.
// function fatorialN(n) {
//   if (n < 0) {
//     return "Não é possível calcular o fatorial de um número negativo.";
//   } else if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     let resultado = 1;
//     while (n > 1) {
//       resultado *= n;
//       n--;
//     }
//     return resultado;
//   }
// }

function fatorialN(n) {
  // escreve aqui a função
  let i = 1n;
  let resultado = 1n;

  while (i <= n) {
    resultado += i;
    i++;
  }
  return resultado;
}
// Exemplo de uso:
const numero = 5;
const fatorial = fatorialN(numero);
console.log(`O fatorial de ${numero} é ${fatorial}`);
