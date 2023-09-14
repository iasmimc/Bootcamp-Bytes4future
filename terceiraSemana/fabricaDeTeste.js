class FabricaDeTestes {
  constructor(testesIniciais) {
    this.testes = testesIniciais;
    // console.log(this.testes);
  }
  testar(funcao) {
    let testePassados = 0;
    let chumbado = null;
    for (let i = 0; i < this.testes.length; i++) {
      const teste = this.testes[i];
      const resultado = funcao(...teste.argumentos);
      if (resultado === teste.resultadoEsperado) {
        testePassados++;
      } else {
        chumbado = chumbado === null ? teste.nome : chumbado;
      }
    }
    if (testePassados < this.testes.length) {
      return `"Falhou ${this.testes.length - testePassados}/${
        this.testes.length
      } testes, exemplo: chumbado"`;
    }
    return "Todos os testes executados com sucesso.";
  }
}

const testesSoma = [
  { argumentos: [3, 2], resultadoEsperado: 5, nome: "Soma 3 e 2" },
  { argumentos: [4, 8], resultadoEsperado: 12, nome: "Soma 4 e 8" },
  { argumentos: [2, 2], resultadoEsperado: 4, nome: "Soma 2 e 2" },
];
//Criar uma fábrica e dizer-lhe quais são os testes
const fabrica = new FabricaDeTestes(testesSoma);

function soma(a, b) {
  return a + b;
}
function soma2(a, b) {
  return a * b;
}
//Testar as funções soma e soma2, em que são chamadas para cada um dos testes.
console.log(fabrica.testar(soma));
console.log(fabrica.testar(soma2));
