// Corrige os nomes necessários de modo que:

// A função  receba um array e retorne o maior valor desse array.

function calculaOMaiorEmArray(array) {
  let maiorValor = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorValor) {
      maiorValor = array[i];
    }
  }
  return maiorValor;
}
