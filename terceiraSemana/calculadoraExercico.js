// Completa a classe Calculadora  que tem um construtor que cria uma propriedade historico, do tipo array.

// Deve ter quatro métodos somar,  subtrair ,  e  dividir. Estes métodos recebem dois argumentos a  e b , que são números.

// Os métodos devem retornar o resultado da operação.

// Devem também adicionar ao histórico um  objeto com as seguintes propriedades:

// Os valores possíveis para a propriedade operacao  são: 'soma' , 'subtração' ,  e 'divisao' .

// A classe também deve ter um método lerHistorico, que recebe um argumento operacao, se esse argumento não estiver definido, retorna o historico, caso esteja definido, retorna todos os elementos do histórico com a operação indicada. Ex:

class Calculadora {
  constructor() {
    this.historico = [];
  }

  somar(a, b) {
    const resultado = a + b;
    this.historico.push({ operacao: "soma", a, b, resultado });
    return resultado;
  }

  subtrair(a, b) {
    const resultado = a - b;
    this.historico.push({ operacao: "subtração", a, b, resultado });
    return resultado;
  }

  multiplicar(a, b) {
    const resultado = a * b;
    this.historico.push({ operacao: "multiplicação", a, b, resultado });
    return resultado;
  }

  dividir(a, b) {
    const resultado = a / b;
    this.historico.push({ operacao: "divisão", a, b, resultado });
    return resultado;
  }

  lerHistorico(operacao) {
    if (operacao === undefined) {
      return this.historico;
    }
    return this.historico.filter((item) => item.operacao === operacao);
  }
}
