class Fila {
  constructor() {
    this.fila = [];
  }

  adicionar(el) {
    this.fila.push(el);
    return this;
  }

  remover() {
    if (this.fila.length === 0) {
      return "Fila vazia!";
    } else {
      return this.fila.shift();
    }
  }

  obterElemento() {
    if (this.fila.length === 0) {
      return "Fila vazia!";
    } else {
      return this.fila[0];
    }
  }
}
