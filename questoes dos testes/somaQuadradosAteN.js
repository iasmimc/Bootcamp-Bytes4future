// Cria uma função que recebe como argumento um número e retorna a soma de todos os quadrados de um até ao número inclusive.

// Utiliza o que aprendeste sobre for  para resolver este exercício.

function somaQuadradosAteN(n) {
  // escreve aqui a função
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i * i;
  }
  return total;
}
