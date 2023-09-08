// Cria uma função que recebe uma data e um número de semanas como argumentos e retorna uma nova data resultante da soma.

// Utiliza o que aprendeste sobre Date para resolver este exercício.

// function adicionaSemanas(data, semanas) {
//   const dataNova = new Date(data);
//   dataNova.setDate(dataNova.getDate() + semanas * 7);
//   return dataNova;
// }

// // Exemplo de uso
// const data = new Date("2023-09-08");
// const semanas = 2;
// console.log(adicionaSemanas(data, semanas)); // Saída: Sun Sep 22 2023 00:00:00 GMT+0100 (British Summer Time)

function adicionaSemanas(data, semanas) {
  // Cria uma cópia da data para não modificar a original
  const novaData = new Date(data);

  // Calcula o número de milissegundos em uma semana
  const milissegundosPorSemana = 7 * 24 * 60 * 60 * 1000;

  // Obtém o timestamp da nova data em milissegundos
  const timestampNovaData = novaData.getTime();

  // Calcula o timestamp da data resultante somando as semanas em milissegundos
  const timestampDataResultante =
    timestampNovaData + semanas * milissegundosPorSemana;

  // Define a nova data com base no timestamp calculado
  novaData.setTime(timestampDataResultante);

  return novaData;
}

// Exemplo de uso:
const dataInicial = new Date("2023-09-08");
const semanasParaAdicionar = 3;
const dataResultante = adicionaSemanas(dataInicial, semanasParaAdicionar);

console.log("Data resultante:", dataResultante.toISOString()); // Exibe a data resultante no formato ISO
