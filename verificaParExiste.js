function verificaParExiste(array) {
  return array.some((ele) => ele % 2 === 0);
}
console.log(verificaParExiste([1, 2, 3, 4, 5]));
console.log(verificaParExiste([2, 4, 6]));
