class Inteiro {
  #valor;

  constructor(valor) {
    if (!isNaN(Number(valor))) {
      this.#valor = Math.floor(valor);
    } else {
      this.#valor = 0;
    }
  }

  get valor() {
    return this.#valor;
  }
  set valor(nValor) {
    if (!isNaN(Number(nValor))) {
      this.#valor = Math.floor(nValor);
    } else {
      this.#valor = this.#valor;
    }
  }
}
