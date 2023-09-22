// Implementa uma função eUmaMatriz  que recebe um valor como argumento e retorna true se o valor for uma matriz e false caso contrário.
function eUmaMatriz(valor) {
  return Array.isArray(valor[0]);
}

// Exemplos de uso:
console.log(eUmaMatriz([1, 2, 3])); // true
console.log(eUmaMatriz("string")); // false
console.log(eUmaMatriz({ chave: "valor" })); // fals
