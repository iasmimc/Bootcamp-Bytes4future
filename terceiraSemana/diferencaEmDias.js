// Cria uma função que recebe dois objetos do tipo Date como argumentos e retorna o tempo entre a primeira e a segunda string em dias (períodos de 24h).

// O valor retornado deve ser sempre um número positivo e inteiro.

// Utiliza o que aprendeste sobre  para resolver este exercício.

function diferencaEmDias(data1, data2) {
  // escreve aqui a função

  let umDia = 1000 * 60 * 60 * 24;
  let diferencaMs = Math.abs(data2.getTime() - data1.getTime());
  let diferencaDias = Math.floor(diferencaMs / umDia);
  return diferencaDias;
}
