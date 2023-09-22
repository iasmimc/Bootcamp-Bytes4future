function maiorString(array) {
  return array.find(
    (el) => el.length === Math.max(...array.map((str) => str.length))
  );
}
