function superDigito(n, k) {
  if (n.length === 1 && k === 1) {
    return parseInt(n);
  } else {
    let sum = 0n;
    for (let i = 0; i < n.length; i++) {
      sum += BigInt(parseInt(n[i]));
    }
    return superDigito((sum * BigInt(k)).toString(), 1);
  }
}
console.log(superDigito("9875", 4));
console.log(superDigito("9875", 123123123123));
console.log(superDigito("9875", 123123123123123123123));
