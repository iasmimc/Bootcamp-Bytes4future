// Cria uma função que recebe como argumentos dois valores e conta o número de pares
// que existem entre esses dois valores, incluindo os próprios se forem pares.

// Caso sejam introduzidos dois valores iguais deve retornar a mensagem de erro:
//  "Por favor introduza dois valores diferentes."

// Utiliza o que aprendeste sobre  para resolver este exercício.

// Exemplo de Output: contaParesEntreDoisValores(2) //1

function contaParesEntreDoisValores(valor1, valor2) {
  if (valor1 === valor2) {
    return "Por favor introduza dois valores diferentes.";
  }

  let countPares = 0;

  for (let i = Math.min(valor1, valor2); i <= Math.max(valor1, valor2); i++) {
    if (i % 2 === 0) {
      countPares++;
    }
  }

  return countPares;
}

// Testes da função
const valorA = 3;
const valorB = 10;
const resultado1 = contaParesEntreDoisValores(valorA, valorB);
console.log(`Entre ${valorA} e ${valorB} existem ${resultado1} números pares.`);

const valorX = 7;
const valorY = 7;
const resultado2 = contaParesEntreDoisValores(valorX, valorY);
console.log(resultado2);
