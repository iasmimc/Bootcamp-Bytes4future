// Cria uma função que recebe um array como argumento e retorna um array com o fatorial de cada elemento.

// Utiliza o que aprendeste sobre a RECURSAO para resolver este exercício.

function fatoriaisDoArray(array) {
  // Função recursiva para calcular o fatorial de um número
  function calcularFatorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * calcularFatorial(n - 1);
    }
  }

  // Inicializar um array para armazenar os resultados
  const resultados = [];

  // Calcular o fatorial de cada elemento no array
  for (const elemento of array) {
    resultados.push(calcularFatorial(elemento));
  }

  return resultados;
}

// Exemplo de uso
const array = [5, 3, 7, 2];
const resultados = fatoriaisDoArray(array);
console.log(resultados);
