// Cria uma função que recebe o lado da base e a altura como argumentos e calcula a área da superfície de uma pirâmide quadrada.

function superficieDaPiramideQuadrada(ladodabase, altura) {
  // escreve aqui a função
  let l = Math.sqrt(Math.pow(ladodabase / 2, 2) + Math.pow(altura, 2));
  return ladodabase * ladodabase + 2 * ladodabase * l;
}
