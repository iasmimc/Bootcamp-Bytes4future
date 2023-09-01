// Cria uma função que recebe uma data como argumento e retorna o dia do ano entre 1 e 366.

// Utiliza o que aprendeste sobre Date para resolver este exercício.

function diaDoAno(data) {
  // começa criando uma data olhando para o primeiro dia do ano
  const first = new Date(data.getFullYear(), 0, 1);

  let number = 1;

  // enquanto o dia for diferente da data passada por parâmetro, incrementa os dias.
  while (
    first.getDate() !== data.getDate() ||
    first.getMonth() !== data.getMonth()
  ) {
    // incrementa o número de dias.
    number++;
    // Muda a data para o dia seguinte.
    first.setDate(first.getDate() + 1);
  }

  return number;
  // escreve aqui a função
}
