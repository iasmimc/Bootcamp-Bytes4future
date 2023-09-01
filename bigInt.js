function potenciaGrande(x, n) {
  return BigInt(x) ** BigInt(n);
}
console.log(potenciaGrande(4, 3));
console.log(potenciaGrande(2n, 3));
console.log(potenciaGrande(1n, 3n));
