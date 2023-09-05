// capitalizaVogais - Arrays
// Cria uma função copia matriz que recebe uma matriz de letras como argumento e
// retorna uma matriz semelhante com as letras vogais em maiúscula.

// function capitalizaVogais(matriz) {
//   const vogais = ["a", "e", "i", "o", "u"];
//   return matriz.map((linha) => {
//     return linha.map((letra) => {
//       if (vogais.includes(letra)) {
//         return letra.toUpperCase();
//       } else {
//         return letra;
//       }
//     });
//   });
// }
// console.log(
//   capitalizaVogais([
//     ["a", "x", "e", "p", "o"],
//     ["b", "q", "z", "b", "s"],
//     ["r", "t", "h", "r", "t"],
//     ["i", "k", "j", "k", "c"],
//     ["n", "l", "v", "l", "v"],
//   ])
// );

// A função capitalizaVogais usa o método map para percorrer cada elemento da matriz
// e retorna uma nova matriz com as vogais em maiúscula. A função includes é usada para
// verificar se a letra atual é uma vogal. Se for, a letra é convertida em maiúscula
// usando o método toUpperCase. Caso contrário, a letra é mantida como está.

function capitalizaVogais(matriz) {
  const copiaMatriz = JSON.parse(JSON.stringify(matriz));
  for (let i = 0; i < copiaMatriz.length; i++) {
    const row = copiaMatriz[i];
    for (let j = 0; j < row.length; j++) {
      const letra = copiaMatriz[i][j];
      // console.log(`Nas posições ${i} e ${j} está o valor ${j}`);
      if (["a", "e", "i", "o", "u"]) {
        copiaMatriz[i][j] = letra.toUpperCase();
      }
    }
  }
  return copiaMatriz;
}
console.log(
  capitalizaVogais([
    ["a", "x", "e", "p", "o"],
    ["b", "q", "z", "b", "s"],
    ["r", "t", "h", "r", "t"],
    ["i", "k", "j", "k", "c"],
    ["n", "l", "v", "l", "v"],
  ])
);
