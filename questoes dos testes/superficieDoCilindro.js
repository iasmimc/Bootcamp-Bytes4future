// Cria uma função que recebe o raio e a altura como argumentos e calcula a área da superfície de um cilindro.
function calcularAreaSuperficieCilindro(raio, altura) {
  return 2 * Math.PI * raio * (raio + altura);
}

console.log(calcularAreaSuperficieCilindro(3, 3));
