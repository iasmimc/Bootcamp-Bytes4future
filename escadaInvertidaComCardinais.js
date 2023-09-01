// function escadaComCardinais(n) {
//   for (i = 1; i <= n; i++) {
//     let spaces = " ".repeat(n - i);
//     let cardinal = "#".repeat(i);
//     let result = spaces + cardinal;
//     console.log(result);
//   }
// }
// escadaComCardinais(6);

// function escadaComCardinais(n) {
//   for (i = 1; i <= n; i++) {
//     let cardinal = "#".repeat(i);
//     let spaces = " ".repeat(n - i);
//     let result = cardinal + spaces;
//     console.log(result);
//   }
// }
// escadaComCardinais(6);

// function escadaComCardinais(n) {
//   for (i = n; i > 0; i--) {
//     let cardinal = "#".repeat(i);
//     let spaces = " ".repeat(n - i);
//     let result = cardinal + spaces;
//     console.log(result);
//   }
// }
// escadaComCardinais(6);

function escadaComCardinais(n) {
  let cardinal = "#".repeat(i * 2 - 1);
  let spaces = " ".repeat(n - i);
  let result = cardinal + spaces;
  console.log(result);
}
escadaComCardinais(6);

// function imprimirPiramideAltura(altura) {
//   for (let i = 1; i <= altura; i++) {
//     let linha = "";
//     for (let j = 1; j <= altura - i; j++) {
//       linha += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//       linha += "#";
//     }
//     console.log(linha);
//   }
// }

// const alturaPiramide = 5; // Altere a altura da pirâmide aqui
// imprimirPiramideAltura(alturaPiramide);
