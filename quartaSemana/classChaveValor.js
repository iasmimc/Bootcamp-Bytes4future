class ChaveValor {
  constructor(chave, valor) {
    this.chave = chave;
    this.valor = valor;
  }
}

class Mapa {
  constructor() {
    this.items = [];
  }

  set(chave, valor) {
    const itemIndex = this.items.findIndex((item) => item.chave === chave);
    if (itemIndex !== -1) {
      this.items[itemIndex].valor = valor;
    } else {
      this.items.push(new ChaveValor(chave, valor));
    }
  }

  has(chave) {
    return this.items.some((item) => item.chave === chave);
  }

  get(chave) {
    const item = this.items.find((item) => item.chave === chave);
    return item ? item.valor : undefined;
  }

  clear() {
    this.items = [];
  }

  delete(chave) {
    const itemIndex = this.items.findIndex((item) => item.chave === chave);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}
