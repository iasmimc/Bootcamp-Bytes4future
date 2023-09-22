// Cria uma função que recebe o raio e a altura como argumentos e calcula a área da superfície de um cone.

function one(raio, altura) {
  // escreve aqui a função
  let l = Math.sqrt(Math.pow(raio, 2) + Math.pow(altura, 2));
  return Math.PI * raio * l + Math.PI * Math.pow(raio, 2);
}
