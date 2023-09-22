function valorMinimoPar(array) {
  return array.reduce((minimoPar, numero) => {
    if (numero % 2 === 0 && (minimoPar === undefined || numero < minimoPar)) {
      return numero;
    }
    return minimoPar;
  }, undefined);
}
