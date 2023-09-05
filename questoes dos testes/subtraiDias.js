// Cria uma função que recebe uma data e um número de dias como argumentos e
// retorna uma nova data resultante da subtração.

function subtraiDias(data, dias) {
  // escreve aqui a função
  const dataResultado = new Date(data);
  dataResultado.setDate(dataResultado.getDate() - dias);
  return dataResultado;
}

// Exemplo de uso:
const dataInicial = new Date("2023-09-03");
const numeroDiasASubtrair = 7;
const dataResultante = subtrairDias(dataInicial, numeroDiasASubtrair);

console.log(`Data inicial: ${dataInicial.toDateString()}`);
console.log(`Número de dias a subtrair: ${numeroDiasASubtrair}`);
console.log(`Data resultante: ${dataResultante.toDateString()}`);
