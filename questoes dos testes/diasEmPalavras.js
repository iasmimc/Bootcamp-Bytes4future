// Cria uma função que recebe um dia, um mês e um ano como argumentos e retorna essa data por extenso.

// Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."

// Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."

// Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."

// No mês de Fevereiro em anos não bissextos só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."

// No mês de Fevereiro em anos bissextos só pode aceitar o número de dias até 29, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 29."

// Os anos devem estar entre 2000 e 2030. Caso seja inserido um ano inválido deve retornar a mensagem de erro: "Por favor introduza um ano entre 2000 e 2030."

// Utiliza o que aprendeste sobre  para resolver este exercício.

function diaEmPalavras(dia, mes, ano) {
  const anosMap = new Map([
    [2000, "dois mil"],
    [2001, "dois mil e um"],
    [2002, "dois mil e dois"],
    [2003, "dois mil e três"],
    [2004, "dois mil e quatro"],
    [2005, "dois mil e cinco"],
    [2006, "dois mil e seis"],
    [2007, "dois mil e sete"],
    [2008, "dois mil e oito"],
    [2009, "dois mil e nove"],
    [2010, "dois mil e dez"],
    [2011, "dois mil e onze"],
    [2012, "dois mil e doze"],
    [2013, "dois mil e treze"],
    [2014, "dois mil e catorze"],
    [2015, "dois mil e quinze"],
    [2016, "dois mil e dezasseis"],
    [2017, "dois mil e dezassete"],
    [2018, "dois mil e dezoito"],
    [2019, "dois mil e dezanove"],
    [2020, "dois mil e vinte"],
    [2021, "dois mil e vinte e um"],
    [2022, "dois mil e vinte e dois"],
    [2023, "dois mil e vinte e três"],
    [2024, "dois mil e vinte e quatro"],
    [2025, "dois mil e vinte e cinco"],
    [2026, "dois mil e vinte e seis"],
    [2027, "dois mil e vinte e sete"],
    [2028, "dois mil e vinte e oito"],
    [2029, "dois mil e vinte e nove"],
    [2030, "dois mil e trinta"],
  ]);

  const mesesMap = new Map([
    [1, "janeiro"],
    [2, "fevereiro"],
    [3, "março"],
    [4, "abril"],
    [5, "maio"],
    [6, "junho"],
    [7, "julho"],
    [8, "agosto"],
    [9, "setembro"],
    [10, "outubro"],
    [11, "novembro"],
    [12, "dezembro"],
  ]);

  const diasMap = new Map([
    [1, "um"],
    [2, "dois"],
    [3, "três"],
    [4, "quatro"],
    [5, "cinco"],
    [6, "seis"],
    [7, "sete"],
    [8, "oito"],
    [9, "nove"],
    [10, "dez"],
    [11, "onze"],
    [12, "doze"],
    [13, "treze"],
    [14, "catorze"],
    [15, "quinze"],
    [16, "dezasseis"],
    [17, "dezassete"],
    [18, "dezoito"],
    [19, "dezanove"],
    [20, "vinte"],
    [21, "vinte e um"],
    [22, "vinte e dois"],
    [23, "vinte e três"],
    [24, "vinte e quatro"],
    [25, "vinte e cinco"],
    [26, "vinte e seis"],
    [27, "vinte e sete"],
    [28, "vinte e oito"],
    [29, "vinte e nove"],
    [30, "trinta"],
    [31, "trinta e um"],
  ]);

  const mesesCom30Dias = [4, 6, 9, 11];

  if (dia < 1 || dia > 31) {
    return "Por favor introduza um dia entre 1 e 31.";
  }

  if (mes < 1 || mes > 12) {
    return "Por favor introduza um mês entre 1 e 12.";
  }

  if (mesesCom30Dias.includes(mes) && dia > 30) {
    return "Por favor introduza um dia entre 1 e 30.";
  }

  if (
    mes === 2 &&
    ((ano % 4 !== 0 && dia > 28) || (ano % 4 === 0 && dia > 29))
  ) {
    return (
      "Por favor introduza um dia entre 1 e " + (ano % 4 === 0 ? 29 : 28) + "."
    );
  }

  if (ano < 2000 || ano > 2030) {
    return "Por favor introduza um ano entre 2000 e 2030.";
  }

  return `${diasMap.get(dia)} de ${mesesMap.get(mes)} de ${anosMap.get(ano)}`;
}

console.log(diaEmPalavras(4, 4, 2022)); // quatro de abril de dois mil e vinte e dois

// com map
