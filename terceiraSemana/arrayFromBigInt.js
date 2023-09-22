// Implementa a função arrayFromBigInt que recebe um número inteiro de qualquer dimensão (BigInt) e retorna um array com cada dígito (Number) em separado.

function arrayFromBigInt(bigInt) {
  const bigIntStr = bigInt.toString();
  const digitArray = [];

  for (let i = 0; i < bigIntStr.length; i++) {
    const digit = parseInt(bigIntStr[i], 10);
    digitArray.push(digit);
  }

  return digitArray;
}

// Exemplo de uso:
const bigInt = BigInt("1234567890123456789012345678901234567890");
const digitArray = arrayFromBigInt(bigInt);
console.log(digitArray);
