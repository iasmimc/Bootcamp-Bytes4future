// function diaDaSemanaPorExtenso(data) {
//   // escreve aqui a função
//   const dia = data.getDay();
//   switch (dia) {
//     case 0: {
//       return "domingo";
//     }
//     case 1: {
//       return "segunda-feira";
//     }
//     case 2: {
//       return "terça-feira";
//     }
//     case 3: {
//       return "quarta-feira";
//     }
//     case 4: {
//       return "quinta-feira";
//     }
//     case 5: {
//       return "sexta-feira";
//     }
//     case 6: {
//       return "sábado";
//     }
//   }
// }

// const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// // request a weekday along with a long date
// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };
// console.log(date.toLocaleDateString("pt-BR", options));

function dataPorExtenso(data) {
  return data.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
