// Cria a função  que recebe um argumento do tipo objeto e retorna o tamanho
// (quantidade de propriedades) do objeto.
// Podes utilizar o método . object.keys()

function determinaTamanhoObjeto(objeto) {
  // Obtém um array com as chaves (propriedades) do objeto
  const propriedades = Object.keys(objeto);

  // Retorna o tamanho do array de propriedades, que é igual ao tamanho do objeto
  return propriedades.length;
}

// Exemplo de uso:
const meuObjeto = {
  nome: "Alice",
  idade: 30,
  cidade: "Exemploville",
};
