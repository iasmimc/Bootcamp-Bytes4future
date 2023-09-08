// Cria uma função que recebe um array de datas como argumento e retorna a data mais antiga.
// Utiliza o que aprendeste sobre Date para resolver este exercício.

function dataMaisAntiga(datas) {
  // escreve aqui a função
  return new Date(Math.min.apply(null, datas));
}

// Exemplo de uso
const dates = [
  new Date("2023-09-01"),
  new Date("2023-09-08"),
  new Date("2023-09-05"),
];
console.log(dataMaisAntiga(dates)); // Saída: Fri Sep 01 2023 00:00:00 GMT+0100 (British Summer Time)
