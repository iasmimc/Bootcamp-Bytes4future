// Cria uma função que recebe uma data como argumento e a retorna com o formato:
//  mm-dd-aaaa.

// Utiliza o que aprendeste sobre  para resolver este exercício.

// Exemplo de Output: formatoData(new Date (2022, 04, 04)) //04-04-22

function formataData(data) {
  // escreve aqui a função
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  return `${mes}-${dia}-${ano}`;
}
