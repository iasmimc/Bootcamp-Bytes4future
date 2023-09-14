// Cria uma função que recebe um número como argumento e retorna o dia da semana
//  correspondente.Caso o número seja inválido deve retornar a seguinte
//  mensagem: "Número inválido. Por favor insira um número entre 1 e 7."

// 1 - Domingo 2 - Segunda-Feira 3 - Terça-Feira 4 - Quarta-Feira 5 - Quinta-Feira
// 6 - Sexta-Feira 7 - Sábado

// Utiliza o que aprendeste sobre Map para resolver este exercício.

function diaDaSemana(dia) {
  // escreve aqui a função
  const diaDaSemana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  return (
    diaDaSemana[dia - 1] ||
    "Número inválido. Por favor insira um número entre 1 e 7."
  );
}

// com map

function diaDaSemana(numero) {
  const dias = new Map([
    [1, "Domingo"],
    [2, "Segunda-Feira"],
    [3, "Terça-Feira"],
    [4, "Quarta-Feira"],
    [5, "Quinta-Feira"],
    [6, "Sexta-Feira"],
    [7, "Sábado"],
  ]);
  return (
    dias.get(numero) ||
    "Número inválido. Por favor insira um número entre 1 e 7."
  );
}
