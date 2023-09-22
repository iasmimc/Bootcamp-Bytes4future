// Cria uma função que recebe um array e retorna um array contendo apenas as strings que estão no array inicial.

function retornaStrings(array) {
  return array.filter(function (item) {
    return typeof item === "string";
  });
}
("");
