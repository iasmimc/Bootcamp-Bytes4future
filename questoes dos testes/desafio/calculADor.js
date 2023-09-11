class Calculadora {
  constructor() {
    this.ultimoResultado = 0;
    this.historico = [];
  }

  /**
   * Soma dois números, e no final, retorna a instância da calculadora (this)
   */
  somar(a, b) {
    // Quando o b está undefined, significa que deve-se usar ele como primeiro operador da conta.
    if (b === undefined) {
      const resultado = this.ultimoResultado + a;
      this.historico.push(`${this.ultimoResultado} + ${a} = {resultado}`);
      this.ultimoResultado = resultado;
    } else {
      // Se o b existe, então a soma é feita normalmente
      const resultado = a + b;
      this.historico.push(`${a} + ${b} = {resultado}`);
      this.ultimoResultado = resultado;
    }

    return this;
  }

  /**
   * Subtrai dois números, e no final, retorna a instância da calculadora (this)
   */
  substrair(a, b) {
    // complete aqui
    if (b === undefined) {
      const resultado = this.ultimoResultado - a;
      this.historico.push(`${this.ultimoResultado} - ${a} = {resultado}`);
      this.ultimoResultado = resultado;
    } else {
      const resultado = a - b;
      this.historico.push(`${a} - ${b} = {resultado}`);
      this.ultimoResultado = resultado;
    }

    return this;
  }

  /**
   * Multiplica dois números, e no final, retorna a instância da calculadora (this)
   */
  multiplicar(a, b) {
    // complete aqui
    if (b === undefined) {
      const resultado = this.ultimoResultado * a;
      this.historico.push(`${this.ultimoResultado} * ${a} = {resultado}`);
      this.ultimoResultado = resultado;
    } else {
      const resultado = a * b;
      this.historico.push(`${a} * ${b} = {resultado}`);
      this.ultimoResultado = resultado;
    }

    return this;
  }

  /**
   * Divide dois números, e no final, retorna a instância da calculadora (this)
   */
  dividir(a, b) {
    // complete aqui
    if (b === undefined) {
      const resultado = this.ultimoResultado / a;
      this.historico.push(`${this.ultimoResultado} / ${a} = {resultado}`);
      this.ultimoResultado = resultado;
    } else {
      const resultado = a / b;
      this.historico.push(`${a} / ${b} = {resultado}`);
      this.ultimoResultado = resultado;
    }
    return this;
  }

  /**
   * Limpa o histórico.
   */
  limparHistorico() {
    this.historico = [];
  }

  /**
   * Retorna o resultado em
   */
  obterResultado() {
    return BigInt(this.ultimoResultado);
  }

  /**
   * Converte para JSON.
   */
  toJSON() {
    return {
      ultimoResultado: this.ultimoResultado,
      historico: this.historico,
    };
  }

  /**
   * Converte para uma string formatada com o histórico.
   */
  toString() {
    if (this.historico.length === 0) {
      return "Calculadora Limpa";
    }

    /** Inicia o histórico com todas operações */
    const linhasDoHistorico = this.historico.map(
      (linha, indice) => `${indice + 1}. ${linha}`
    );

    /** Adiciona o cabeçalho do hitórico com unshift para ficar antes das operações */
    linhasDoHistorico.unshift("=== Histórico da Calculadora ===");

    /** Adiciona o rodapé do hitórico com push para ficar ao final das operações */
    linhasDoHistorico.unshift("=== Fim do Histórico ===");

    linhasDoHistorico.push(
      `Foram realizadas ${this.historico.length} operações`
    );

    linhasDoHistorico.push(`Último Resultado: ' ${this.ultimoResultado}`);

    /**
     * Transforma em string, usando a quebra de linha (\n) como delimitador.
     */
    return linhasDoHistorico.join("\n");
  }
}
console.log(Calculadora());
