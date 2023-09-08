function soma(array) {
  if (array.length === 1) {
    console.log(array);
    return array[0];
  }
  console.log(array);
  return array[0] + soma(array.slice(1));
}

console.log(soma([1, 2, 3, 4, 5, 6, 1]));
console.log(soma([1, 3, 5, 6, 3, 2]));
