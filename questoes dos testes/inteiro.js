// Cria a classe inteiro que tem um construtor que recebe um valor e mantém apenas a parte inteira do valor se for um número e 0 se não for.

// Deve ser possível aceder e alterar a propriedade valor  garantindo as regras acima.

// Se o  valor estiver definido e for passado um novo valor inválido, deve manter-se o valor anterior.

// Deves utilizar o # para marcar a propriedade privada e implementar o get e o set. As regras podem ser garantidas na implementação do set.

class Inteiro {
  // completa a classe

  #valor;

  constructor(valor) {
    this.#valor = typeof valor === "number" ? Math.floor(valor) : 0;
  }

  get valor() {
    return this.#valor;
  }

  set valor(novoValor) {
    if (typeof novoValor === "number") {
      this.#valor = Math.floor(novoValor);
    }
  }
}
