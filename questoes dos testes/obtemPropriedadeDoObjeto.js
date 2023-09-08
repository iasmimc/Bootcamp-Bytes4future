// Cria a função obtemPropriedadeDeObjeto que recebe dois argumentos:

// Objeto do tipo objeto;
// Propriedade do tipo string;
// e retorna o valor da propriedade no objeto ;

function obtemPropriedadeDeObjeto(objeto, propriedade) {
  // Verifique se o objeto possui a propriedade
  if (objeto.hasOwnProperty(propriedade)) {
    // Retorna o valor da propriedade
    return objeto[propriedade];
  } else {
    // Caso a propriedade não exista no objeto, você pode retornar um valor padrão ou lançar uma exceção, dependendo dos requisitos.
    return undefined; // Retorna undefined se a propriedade não existir
  }
}

// Exemplo de uso:
const meuObjeto = {
  nome: "João",
  idade: 30,
};

const nomeDaPessoa = obtemPropriedadeDeObjeto(meuObjeto, "nome");
console.log(nomeDaPessoa); // Isso imprimirá "João"
