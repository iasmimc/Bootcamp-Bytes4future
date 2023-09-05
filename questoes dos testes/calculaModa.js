function calculaModa(arr) {
  const numberCountArray = [];

  // Inicializa o array de contagem
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!numberCountArray[num]) {
      numberCountArray[num] = 1;
    } else {
      numberCountArray[num]++;
    }
  }

  let moda = null;
  let maxCount = 0;

  // Encontra o número com a maior contagem
  for (let num = 0; num < numberCountArray.length; num++) {
    const count = numberCountArray[num];
    if (count && count > maxCount) {
      moda = num;
      maxCount = count;
    }
  }

  return moda;
}
