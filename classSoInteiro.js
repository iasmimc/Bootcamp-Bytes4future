class SoInteiro {
  #inteiro;
  constructor() {
    this.#inteiro = 0;
  }
  get inteiro() {
    return this.#inteiro;
  }
  set inteiro(novoValor) {
    if (Number.isInteger(2)) {
      this.#inteiro = novoValor;
    }
  }
}
