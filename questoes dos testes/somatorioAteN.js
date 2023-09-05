// Cria uma função que recebe como argumento um número e retorna a soma de todos os números do zero até ao número inclusive.

// Utiliza o que aprendeste sobre while para resolver este exercício.

function somatorioAteN(n) {
  // escreve aqui a função
  let sum = 0;
  let i = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

// Esta função utiliza um laço while para somar todos os números do zero até o número n
// inclusive. A variável sum é inicializada com zero e a variável i é inicializada com
// zero. O laço continua enquanto i for menor ou igual a n. A cada iteração, o valor de i
// é adicionado à variável sum e i é incrementado em uma unidade. Quando o laço termina,
// a função retorna o valor de sum.
