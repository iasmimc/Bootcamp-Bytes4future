// Cria uma função que recebe o raio e a altura como argumentos e calcula a área
//  da superfície de um cone.

function superfícieDoCone(altura, raio) {
  return Math.PI * raio * (raio + Math.sqrt(raio * raio + altura * altura));
}
