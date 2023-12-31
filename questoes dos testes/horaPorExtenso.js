// Cria uma função que recebe uma data como argumento e retorna a hora por extenso.

// Utiliza  para obter as horas a partir da data.

// Utiliza o que aprendeste sobre getUTCHours() para resolver este exercício.

function horaPorExtenso(data) {
  let h = data.getUTCHours();
  let m = data.getUTCMinutes();

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
    "doze",
    "treze",
    "catorze",
    "quinze",
    "dezasseis",
    "dezassete",
    "dezoito",
    "dezanove",
    "vinte",
    "vinte e uma",
    "vinte e duas",
    "vinte e três",
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
    "trinta e um",
    "trinta e dois",
    "trinta e três",
    "trinta e quatro",
    "trinta e cinco",
    "trinta e seis",
    "trinta e sete",
    "trinta e oito",
    "trinta e nove",
    "quarenta",
    "quarenta e um",
    "quarenta e dois",
    "quarenta e três",
    "quarenta e quatro",
    "três quartos",
    "quarenta e seis",
    "quarenta e sete",
    "quarenta e oito",
    "quarenta e nove",
    "cinquenta",
    "cinquenta e um",
    "cinquenta e dois",
    "cinquenta e três",
    "cinquenta e quatro",
    "cinquenta e cinco",
    "cinquenta e seis",
    "cinquenta e sete",
    "cinquenta e oito",
    "cinquenta e nove",
  ];

  let result = "";

  if (m == 0) {
    result = `${horas[h]} ${minutos[0]}`;
  } else if (m <= 59) {
    result = `${horas[h]} e ${minutos[m]}`;
  }
  return result;
}
