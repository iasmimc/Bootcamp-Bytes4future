// function calculaModa(arr) {
//   const numberCountArray = [];

//   // Inicializa o array de contagem
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i];
//     if (!numberCountArray[num]) {
//       numberCountArray[num] = 1;
//     } else {
//       numberCountArray[num]++;
//     }
//   }

//   let moda = null;
//   let maxCount = 0;

//   // Encontra o número com a maior contagem
//   for (let num = 0; num < numberCountArray.length; num++) {
//     const count = numberCountArray[num];
//     if (count && count > maxCount) {
//       moda = num;
//       maxCount = count;
//     }
//   }

//   return moda;
// }

function calculaModa(array) {
  let mapa = new Map();

  for (let i = 0; i < array.length; i++) {
    mapa.set(array[i], (mapa.get(array[i]) ?? 0) + 1);
  }
  let chaveMaior = undefined;
  let repeticoes = 0;

  for (let [chave, valor] of mapa) {
    if (valor > repeticoes || (valor === repeticoes && chave < chaveMaior)) {
      repeticoes = valor;
      chaveMaior = chave;
    }
  }
  return chaveMaior;
}
