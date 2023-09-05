// Cria uma função que recebe como argumentos um dia e um mês e retorna o dia do ano correspondente (entre 1 e 365).

// Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."

// Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."

// Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."

// No mês de Fevereiro só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."

function calculaDiaDoAno(dia, mes) {
  // escreve aqui a função

  let dias = 0;

  let meses = new Map([
    [1, 31],
    [2, 28],
    [3, 31],
    [4, 30],
    [5, 31],
    [6, 30],
    [7, 31],
    [8, 31],
    [9, 30],
    [10, 31],
    [11, 30],
    [12, 31],
  ]);

  if (dia < 1 || dia > 31) {
    return "Por favor introduza um dia entre 1 e 31.";
  }

  if (mes < 1 || mes > 12) {
    return "Por favor introduza um mês entre 1 e 12.";
  }

  if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
    return "Por favor introduza um dia entre 1 e 30.";
  }

  if (mes == 2 && dia > 28) {
    return "Por favor introduza um dia entre 1 e 28..";
  }

  for (let i = 1; i < mes; i++) {
    dias = meses.get(i) + dias;
  }

  return dias + dia;
}

console.log(calculaDiaDoAno(2, 9));
