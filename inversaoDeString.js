// cria uma funcao que mapeia cada elemento de um array de strings para a string invertida
// A inversao de cada string deve ser implementada utilizando uma funcao recursiva.

// function reverseStrings(arr) {
//   if (arr.length === 0) {
//     return [];
//   }
//   const [head, ...tail] = arr;
//   return [reverseString(head), ...reverseStrings(tail)];
// }

// function reverseString(str) {
//   if (str.length === 0) {
//     return "";
//   }
//   const [head, ...tail] = str;
//   return reverseString(tail) + head;
// }
// console.log(reverseString(["oi", "ola", "inverte", "texto"]));

function mapStringInvertida(array) {
  return array.map((elemento) => inverteString(elemento));
}
function inverteString(string) {
  if (string.length === 0) {
    return "";
  }
  return inverteString(string.slice(1)) + string[0];
}
console.log(mapStringInvertida(["abc", "def", "ghi", "jkl"]));
