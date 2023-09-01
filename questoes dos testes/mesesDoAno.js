// Cria uma função que recebe como argumento um número m e retorna o mês correspondente.

// Correspondências:

// 1 - Janeiro

// 2 - Fevereiro

// 3 - Março

// 4 - Abril

// 5 - Maio

// 6 - Junho

// 7 - Julho

// 8 - Agosto

// 9 - Setembro

// 10 - Outubro

// 11 - Novembro

// 12 - Dezembro

// Quando recebe um número diferente deve retornar a mensagem: "Número inválido. Por favor insira um número entre 1 e 12."

// Utiliza o que aprendeste sobre  para resolver este exercício.

// Exemplo de Output: mesesDoAno(5) // maio

const meses = {
  0: "Janeiro",
  1: "Fevereiro",
  2: "Março",
  3: "Abril",
  4: "Maio",
  5: "Junho",
  6: "Julho",
  7: "Agosto",
  8: "Setembro",
  9: "Outubro",
  10: "Novembro",
  11: "Dezembro",
};
function mesesDoAno(m) {
  // escreve aqui a função
  if (m > 12 || m < 1) {
    return "Número inválido. Por favor insira um número entre 1 e 12.";
  }
  return meses[m - 1];
}
