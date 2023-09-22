// Cria uma função que recebe um número como argumento e retorna um array com os números de n a 0.

// Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."

// Utiliza o que aprendeste sobre Recursao  para resolver este exercício.

function arrayDeNAZero(n) {
  if (n <= 0) {
    return ["Por favor insira um número superior a 0."];
  } else if (n === 1) {
    return [1, 0];
  } else {
    let arr = arrayDeNAZero(n - 1);
    arr.unshift(n);
    return arr;
  }
}
