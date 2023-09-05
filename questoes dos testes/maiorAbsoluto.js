// Cria uma função que recebe dois inteiros como argumentos e retorna o valor absoluto
//  maior.

function maiorAbsoluto(a, b) {
  const absolutoA = Math.abs(a);
  const absolutoB = Math.abs(b);

  if (absolutoA > absolutoB) {
    return absolutoA;
  } else {
    return absolutoB;
  }
}

// Exemplos de uso:
console.log(maiorAbsoluto(-5, 10)); // Saída: 10 (o valor absoluto de -5 é 5 e o valor absoluto de 10 é 10, então 10 é maior)
console.log(maiorAbsoluto(7, -3)); // Saída: 7 (o valor absoluto de 7 é 7 e o valor absoluto de -3 é 3, então 7 é maior)
console.log(maiorAbsoluto(-2, -8)); // Saída: 8 (o valor absoluto de -2 é 2 e o valor absoluto de -8 é 8, então 8 é maior)
