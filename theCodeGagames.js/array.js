// Implementa a função arrayFromBigInt que recebe um número inteiro de qualquer dimensão (BigInt) e retorna um array com cada dígito (Number) em separado.

function arrayFromBigInt(bigInt) {
  const bigIntString = bigInt.toString();
  const digits = bigIntString.split("").map((number) => Number(number));
  return digits;
}
