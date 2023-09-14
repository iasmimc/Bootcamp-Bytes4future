// Cria uma função que recebe uma data como argumento e a retorna por extenso.

// Utiliza o que aprendeste sobre Date para resolver este exercício.

// function dataPorExtenso(data) {
//   const meses = [
//     "Janeiro",
//     "Fevereiro",
//     "Março",
//     "Abril",
//     "Maio",
//     "Junho",
//     "Julho",
//     "Agosto",
//     "Setembro",
//     "Outubro",
//     "Novembro",
//     "Dezembro",
//   ];
//   const dia = data.getDate();
//   const mes = meses[data.getMonth()];
//   const ano = data.getFullYear();
//   return `${dia} de ${mes} de ${ano}`;
// }

const { format, parseISO } = require("date-fns");

function dataPorExtenso(data) {
  const dataFormatada = format(parseISO(data), "dd/MM/yyyy", { locale: ptBR }); // Supondo que você quer o formato 'dd/MM/yyyy'
  const partesDaData = dataFormatada.split("/");
  const dia = partesDaData[0];
  const mes = partesDaData[1];
  const ano = partesDaData[2];

  // Arrays com os nomes dos meses e dias da semana
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return `${dia} de ${meses[mes - 1]} de ${ano}`;
}

// Exemplo de uso:
const data = "2023-09-12"; // Data no formato ISO (AAAA-MM-DD)
const dataExtenso = dataPorExtenso(data);
console.log(dataExtenso); // Saída: "12 de setembro de 2023"
