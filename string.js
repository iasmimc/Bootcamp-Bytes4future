// function insereLinhaEntre(primeiro, segunda) {
//   //retorna uma string em que primeira e segunda estao em linhas diferentes.
//   return `ola  ${primeiro}
//     ${segunda}`;
// }
// console.log(insereLinhaEntre("iasmim", "capra"));

// function apresentaPessoa(nome, idade) {
//   return `O meu nome é ${nome} e tenho ${idade} anos.`;
// }
// console.log(apresentaPessoa("Iasmim", 29));

function aleatorioEntre(min, maxx) {
  let nrAleatorio = Math.floor(Math.random() * (maxx - min + 1) + min);
  return nrAleatorio;
}
