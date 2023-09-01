// Cria uma função que recebe como argumento um número e retorna o número de vezes
// em que é possível fazer a divisão inteira desse número por 2.

// Utiliza o que aprendeste sobre  for ou while  para resolver este exercício.

function contaNumeroDeDivisoesPorDois(n) {
  let count = 0;

  while (n >= 2) {
    n = Math.floor(n / 2);
    count++;
  }

  return count;
}

// Exemplo de uso:
const numero = 64;
const resultado = contaNumeroDeDivisoesPorDois(numero);
console.log(
  `O número de vezes que ${numero} pode ser dividido por 2 é: ${resultado}`
);
