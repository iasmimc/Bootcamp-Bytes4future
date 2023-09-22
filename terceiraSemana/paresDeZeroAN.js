// Cria uma função que recebe um número como argumento e retorna um array com os números pares de 0 a n.

// Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."

// Utiliza o que aprendeste sobre Recursao  para resolver este exercício.

function paresDeZeroAN(n) {
  if (n < 0) {
    return "Por favor insira um número superior a 0.";
  }

  if (n === 0) {
    return [0];
  }

  if (n % 2 === 0) {
    return paresDeZeroAN(n - 1).concat(n);
  } else {
    return paresDeZeroAN(n - 1);
  }
}
