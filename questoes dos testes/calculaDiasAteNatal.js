// Cria uma função que recebe como argumentos um dia e um mês e retorna o número de dias
// em falta para o Natal.

// Caso o número do dia inserido seja inválido deve retornar a mensagem de erro:
// "Por favor introduza um dia entre 1 e 31."

// Caso o número do mês inserido seja inválido deve retornar a mensagem de erro:
// "Por favor introduza um mês entre 1 e 12."

// Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro:
// "Por favor introduza um dia entre 1 e 30."

// No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido
// um número diferente deve retornar a mensagem de erro:
//  "Por favor introduza um dia entre 1 e 28."

// No dia 25 de Dezembro deve retornar a seguinte mensagem: "Hoje é Natal!"

// Nos restantes dias deve retornar a seguinte mensagem: "Faltam x dias até ao Natal."

// Utiliza o que aprendeste sobre if e else para resolver este exercício.

function calculaDiasAteAoNatal(dia, mes) {
  // escreve aqui a função
  if (dia < 1 || dia > 31) {
    return "Por favor introduza um dia entre 1 e 31.";
  }

  if (mes < 1 || mes > 12) {
    return "Por favor introduza um mês entre 1 e 12.";
  }

  if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
    return "Por favor introduza um dia entre 1 e 30.";
  }

  if (mes === 2 && dia > 28) {
    return "Por favor introduza um dia entre 1 e 28.";
  }

  if (mes === 12 && dia === 25) {
    return "Hoje é Natal!";
  }

  const data = new Date(2023, mes - 1, dia);

  let numeroDeDias = 0;

  while (data.getMonth() !== 11 || data.getDate() !== 25) {
    numeroDeDias++;
    data.setDate(data.getDate() + 1);
  }

  return `Faltam ${numeroDeDias} dias até ao natal`;
}
console.log(calculaDiasAteAoNatal(-1, 1));
console.log(calculaDiasAteAoNatal(32, 1));
console.log(calculaDiasAteAoNatal(1, -1));
console.log(calculaDiasAteAoNatal(1, 13));
console.log(calculaDiasAteAoNatal(4, 31));
console.log(calculaDiasAteAoNatal(29, 2));
console.log(calculaDiasAteAoNatal(25, 12));
console.log(calculaDiasAteAoNatal(24, 12));
console.log(calculaDiasAteAoNatal(1, 12));
console.log(calculaDiasAteAoNatal(25, 11));

// function calculaDiasAteAoNatal(dia, mes) {
//     if (mes < 1 || mes > 12) {
//       return "Por favor introduza um mês entre 1 e 12.";
//     }

//     if (dia < 1 || dia > 31) {
//       return "Por favor introduza um dia entre 1 e 31.";
//     }

//     if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
//       return "Por favor introduza um dia entre 1 e 30.";
//     }

//     if (mes === 2 && dia > 28) {
//       return "Por favor introduza um dia entre 1 e 28.";
//     }

//     let diasDoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
//     let diaDoAno = dia;
//     let natal = 359;
//     let diasQueFaltam = 0;

//     for (let i = 1; i < mes; i++) {
//       diaDoAno += diasDoMes[i];
//     }

//     if (diaDoAno < natal) {
//       diasQueFaltam = natal - diaDoAno;
//     } else {
//       diasQueFaltam = 365 - diaDoAno + natal;
//     }

//     if (diasQueFaltam === 1) {
//       return "Falta " + diasQueFaltam + " dia até ao Natal";
//     }
//     if (diasQueFaltam === 365) {
//       return "Hoje é Nadtal";
//     } else {
//       return "Faltam " + diasQueFaltam + " dias até ao Natal";
//     }
//   }
//   console.log(calculaDiasAteAoNatal(12, 4));
//   console.log(calculaDiasAteAoNatal(22, 12));
//   console.log(calculaDiasAteAoNatal(24, 12));
//   console.log(calculaDiasAteAoNatal(25, 12));

function calculaDiasAteAoNatal(dia, mes) {
  if (mes < 1 || mes > 12) {
    return "Por favor introduza um mês entre 1 e 12.";
  } else if (dia < 1 || dia > 31) {
    return "Por favor introduza um dia entre 1 e 31.";
  } else if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
    return "Por favor introduza um dia entre 1 e 30.";
  } else if (mes === 2 && dia > 28) {
    return "Por favor introduza um dia entre 1 e 28.";
  } else if (mes === 12 && dia > 25) {
    return "Hoje é Natal!";
  }

  let currentDate = new Date(2023, mes - 1, dia);
  let natal = new Date(2023, 12 - 1, 25);
  let daysToChristmas = natal - currentDate;
  let x = Math.floor(daysToChristmas / 86400000);
  if (x === 1) {
    return `Faltam ${x} dia até ao Natal.`;
  } else {
    return `Faltam ${x} dias até ao Natal.`;
  }
}

console.log(calculaDiasAteAoNatal(1, 9));
