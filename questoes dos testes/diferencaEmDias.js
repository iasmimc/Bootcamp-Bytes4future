// Cria uma função que recebe dois objetos do tipo Date como argumentos e
// retorna o tempo entre a primeira e a segunda string em dias (períodos de 24h).

// O valor retornado deve ser sempre um número positivo e inteiro.

// Utiliza o que aprendeste sobre  para resolver este exercício

// function diferencaoEmDias(data1, data2) {
//   const msData1 = data1.getTime();
//   const msData2 = data2.getTime();

//   const diff = msData1 > msData2 ? msData1 - msData2 : msData2 - msData1;

//   return Math.floor(diff / 1000 / 60 / 60 / 24);
// }

function diferencaEmDias(data1, data2) {
  // Calcula a diferença em milissegundos entre as duas datas
  const diferencaEmMilissegundos = Math.abs(data2 - data1);

  // Converte a diferença em milissegundos para dias
  const dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  return dias;
}

// Exemplo de uso:
const data1 = new Date("2023-09-01");
const data2 = new Date("2023-09-07");
const diferenca = diferencaEmDias(data1, data2);
console.log(`A diferença em dias é: ${diferenca}`);
