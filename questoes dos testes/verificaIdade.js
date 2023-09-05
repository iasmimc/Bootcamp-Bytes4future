// Cria a função verificaIdade que recebe um argumento pessoa que é do tipo objeto
// e retorna o mesmo objeto com uma propriedade maiorDeIdade que é um booleano,
// dependente da idade.
function verificaIdade(pessoa) {
  // Verifica se a idade da pessoa é maior ou igual a 18
  if (pessoa.idade >= 18) {
    pessoa.maiorDeIdade = true; // Define a propriedade como verdadeira se for maior de idade
  } else {
    pessoa.maiorDeIdade = false; // Define a propriedade como falsa se for menor de idade
  }

  return pessoa;
}

// Exemplo de uso da função:
const pessoa = {
  nome: "João",
  idade: 25,
};

const pessoaComIdadeVerificada = verificaIdade(pessoa);
console.log(pessoaComIdadeVerificada);
