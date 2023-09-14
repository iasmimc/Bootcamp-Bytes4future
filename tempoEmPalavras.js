// A função tempoEmPalavras recebe como argumentos a hora(h) e o minuto(m).

// Implementa a função para retornar a hora dita em português com os numeros por .
//  Por exemplo:

// 10:30 - dez e meia
// 2:05 - duas e cinco
// 4:45 - um quarto para as cinco
// 12:00 - meio dia em ponto
// 11:50 - dez para o meio dia
// 14:23 - duas e vinte e três Regras:
// A hora varia entre 0 e 23
// O minuto varia entre 0 e 59
// Depois do minuto 30, deve ser dito, por exemplo, "dez para as cinco"
// 12 horas devem ser lidas como meio dia
// 00 horas devem ser lidas como meia noite
// As horas da tarde devem ser lidas iguais às da manhã, excepto meio dia e meia noite
// A hora certa deve ser seguida pela expressão "em ponto",
// 30 minutos devem ser lidos como "meia"
// 15 minutos devem ser lidos como "um quarto"

function tempoEmPalavras(h, m) {
  let horas = [
    "meia noite",
    "uma",
    "duas",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
    "meio dia",
  ];
  let minutos = [
    "em ponto",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
    "dez",
    "onze",
    "doze",
    "treze",
    "catorze",
    "um quarto",
    "dezasseis",
    "dezassete",
    "dezoito",
    "dezanove",
    "vinte",
    "vinte e um",
    "vinte e dois",
    "vinte e três",
    "vinte e quatro",
    "vinte e cinco",
    "vinte e seis",
    "vinte e sete",
    "vinte e oito",
    "vinte e nove",
    "meia",
  ];

  let result = "";
  let string = "";

  if (m == 0) {
    if (h > 12) {
      h -= 12;
    }
    result = `${horas[h]} ${minutos[0]}`;
  } else if (m <= 30) {
    if (h > 12) {
      h -= 12;
    }
    result = `${horas[h]} e ${minutos[m]}`;
  } else {
    h += 1;
    if (h == 24) {
      h = 0;
    }
    if (h > 12) {
      h -= 12;
    }
    if (h < 2) {
      string = "a";
    } else if (h == 12) {
      string = "o";
    } else {
      string = "as";
    }
    result = `${minutos[60 - m]} para ${string} ${horas[h]}`;
  }

  return result;
}

// console.log(tempoEmPalavras(10, 30))
// console.log(tempoEmPalavras(2, 05))
// console.log(tempoEmPalavras(4, 45))
// console.log(tempoEmPalavras(12, 00))
// console.log(tempoEmPalavras(11, 50))
// console.log(tempoEmPalavras(14, 23))
// console.log(tempoEmPalavras(23, 00))
// console.log(tempoEmPalavras(0, 59))
// console.log(tempoEmPalavras(00, 00))
