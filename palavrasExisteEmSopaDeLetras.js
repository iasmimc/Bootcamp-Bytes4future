// Implementa a função palavraExisteEmSopaDeLetras que recebe um array de strings
//(linhas) e uma palavra e retorna true se a palavra existir.
// Todas as orientações são válidas e a palavra pode estar escrita ao contrário.

// function palavraExisteEmSopaDeLetras(sopa, palavra) {
//   for (const letra of palavra) {
//     if (
//       sopa < 0 ||
//       sopa >= sopa.length ||
//       palavra < 0 ||
//       palavra >= sopa[0].length ||
//       sopa[sopa][palavra] !== letra
//     ) {
//       return false;
//     }
//   }

//   return true;
// }

// for (let sopa = 0; sopa < sopa.length; sopa++) {
//   for (let palavra = 0; palavra < sopa[sopa].length; palavra++) {
//     return false;
//   }
// }

function palavraExisteEmSopaDeLetras(array, word) {
  let diagonalPrincipal = "";
  let diagonalSecundaria = "";
  let horizontal = "";
  let vertical = "";

  //   let inverWord = word.split('').reverse().join(',');

  for (let i = 0; i < array.length; i++) {
    diagonalPrincipal += array[i][i];
    diagonalSecundaria += array[i][array.length - 1 - 1];

    for (let j = 0; j < array.length; j++) {
      horizontal += array[i][j];
      vertical += array[j][i];
    }
    if (
      diagonalPrincipal.includes(word) ||
      diagonalSecundaria.includes(word) ||
      diagonalPrincipal.split("").reverse().join("").includes(word)
    ) {
    }
  }
  console.log(diagonalPrincipal);
  console.log(diagonalSecundaria);
  console.log(horizontal);
  console.log(vertical);
}

console.log(palavraExisteEmSopaDeLetras(["OOO", "LLO", "AYY"], "OLA")); // true
