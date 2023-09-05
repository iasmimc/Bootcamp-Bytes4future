// Implementa a função somatorio que retorna a soma de todos os valores
//  presentes no array de números arr.

var numeros = [2, 4, 6, 8, 10];
var resultado = somatorio(numeros);

function somatorio(arr) {
  var soma = 0;
  for (var i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

console.log("O somatorio é: " + resultado);
