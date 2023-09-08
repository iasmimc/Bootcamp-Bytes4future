const oMeuObjeto = {
  aMinhaPropriedade: "valor",
  chave: "valor",
};

console.log(oMeuObjeto); // ler propriedades

oMeuObjeto.aMinhaPropriedade = ""; // para alterar coisas detro do objetos

delete oMeuObjeto.aMinhaPropriedade; // para deletar a propriedade

oMeuObjeto.nome = "oNomeQueQuiserAlterar"; // criar propriedades

//Define um molde de um objeto
class Cachorro {
  //É a funçao responsavel pela criacao do objeto
  constructor(nomeInicial) {
    // todos os "Cachorro" criados passam pelo construtor.
    // Muitas vezes usado para definir propriedades / estado inicial do objeto.
    this.quente = Boolean(Math.floor(Math.random() * 2));
    this.nome = nomeInicial;
  }
  // É pissivel criar metodos com o objetico de
  //obter valores
  obtemTemperatura() {
    return this.quente;
  }
  alterarTemperatura(novaTemperatura) {
    this.quente = novaTemperatura;
  }
}
// class IStudentAuth{
//     constructor(){

//     }
//     login()
//     auth()
//     logout()
//     extendSession()
// }

//criar instancias (unidade de alguma coisa)(criar e objeto)
const cachorrinho = new Cachorro("Bobby");
console.log(cachorrinho);
console.log(cachorrinho.obtemTemperatura());
cachorrinho.alterarTemperatura(true);
