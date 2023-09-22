class Pilha {
  constructor(capacidade) {
    if (capacidade === undefined) {
      this.capacidade = Infinity;
    } else {
      this.capacidade = capacidade;
    }
    this.elementos = [];
  }
  adicionar(elem) {
    if (this.elementos.length === this.capacidade) {
      return "Pilha cheia!";
    } else {
      this.elementos.push(elem);
    }
  }
  remover() {
    if (this.elementos.length === 0) {
      return "Pilha vazia!";
    } else {
      this.elementos.pop();
    }
  }
  obterValor() {
    if (this.elementos.length === 0) {
      return "Pilha vazia!";
    } else {
      return this.elementos[this.elementos.length - 1];
    }
  }
}
