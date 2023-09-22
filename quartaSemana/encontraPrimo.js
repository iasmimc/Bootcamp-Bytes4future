// Cria uma função que recebe um array como argumento e retorna o primeiro elemento primo.

// Utiliza o que aprendeste sobre o find  para resolver este exercício.

function isPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  if (numero <= 3) {
    return true;
  }
  if (numero % 2 === 0 || numero % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function encontraPrimo(array) {
  return array.find((numero) => isPrimo(numero));
}

// Exemplo de uso:
const meuArray = [4, 6, 9, 11, 13, 15, 20];
const primeiroPrimo = encontraPrimo(meuArray);
console.log("O primeiro elemento primo é:", primeiroPrimo);
