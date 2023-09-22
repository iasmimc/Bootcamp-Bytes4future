// function somaDosQuadradosDoArray(array) {
//   // escreve aqui a função
//   let sum = 0;
//   for (let i = 0; array.length; i++) {
//     sum += array[i] ** 2;
//   }
//   return sum;
// }

function somaDosQuadradosDoArray(array) {
  if (array.length === 0) {
    return 0;
  } else {
    const [first, ...rest] = array;
    return first * first + somaDosQuadradosDoArray(rest);
  }
}
