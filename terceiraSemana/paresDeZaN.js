function paresDeZeroAN(n) {
  if (n <= 0) {
    return "Por favor insira um número superior a 0.";
  } else if (n === 2) {
    return [0, 2];
  } else {
    var arr = paresDeZeroAN(n - 2);
    arr.push(n);
    return arr;
  }
}
