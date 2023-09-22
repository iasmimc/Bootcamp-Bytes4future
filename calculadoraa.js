class Calculadora {
  constructor() {
    this.ultimoResultado = BigInt(0);
    this.historico = [];
  }

  somar(a, b) {
    if (b === undefined) {
      const resultado = BigInt(this.ultimoResultado) + BigInt(a);
      this.historico.push(
        `${BigInt(this.ultimoResultado)} + ${BigInt(a)} = ${resultado}`
      );
      this.ultimoResultado = resultado;
    } else {
      const resultado = BigInt(a) + BigInt(b);
      this.historico.push(`${BigInt(a)} + ${BigInt(b)} = ${resultado}`);
      this.ultimoResultado = resultado;
    }

    return this;
  }

  subtrair(a, b) {
    if (b === undefined) {
      const resultado = BigInt(this.ultimoResultado) - BigInt(a);
      this.historico.push(
        `${BigInt(this.ultimoResultado)} - ${BigInt(a)} = ${resultado}`
      );
      this.ultimoResultado = resultado;
    } else {
      const resultado = BigInt(a) - BigInt(b);
      this.historico.push(`${BigInt(a)} - ${BigInt(b)} = ${resultado}`);
      this.ultimoResultado = resultado;
    }

    return this;
  }

  multiplicar(a, b) {
    if (b === undefined) {
      const resultado = BigInt(this.ultimoResultado) * BigInt(a);
      this.historico.push(
        `${BigInt(this.ultimoResultado)} * ${BigInt(a)} = ${resultado}`
      );
      this.ultimoResultado = resultado;
    } else {
      const resultado = BigInt(a) * BigInt(b);
      this.historico.push(`${BigInt(a)} * ${BigInt(b)} = ${resultado}`);
      this.ultimoResultado = resultado;
    }

    return this;
  }

  dividir(a, b) {
    if (b === undefined) {
      const resultado = BigInt(this.ultimoResultado) / BigInt(a);
      this.historico.push(
        `${BigInt(this.ultimoResultado)} / ${BigInt(a)} = ${resultado}`
      );
      this.ultimoResultado = resultado;
    } else {
      const resultado = BigInt(a) / BigInt(b);
      this.historico.push(`${a} / ${b} = ${resultado}`);
      this.ultimoResultado = resultado;
    }
    return this;
  }

  limparHistorico() {
    this.historico = [];
    this.ultimoResultado = 0n;
    return this;
  }

  obterResultado() {
    return BigInt(this.ultimoResultado);
  }

  toJSON() {
    return {
      historico: this.historico,
      ultimoResultado: this.ultimoResultado.toString(),
    };
  }

  toString() {
    if (this.historico.length === 0) {
      return "Calculadora Limpa";
    }

    const linhasDoHistorico = this.historico.map(
      (linha, indice) => `${indice + 1}. ${linha}`
    );

    linhasDoHistorico.unshift("=== Histórico da Calculadora ===");

    linhasDoHistorico.push("=== Fim do Histórico ===");

    linhasDoHistorico.push(
      `Foram realizadas ${this.historico.length} operações`
    );

    linhasDoHistorico.push(`Último Resultado: ${this.ultimoResultado}`);

    return linhasDoHistorico.join("\n");
  }
}

const cal = new Calculadora();
console.log(cal.somar(4, 4));
console.log(cal.subtrair(4, 4));
console.log(cal.dividir(4, 4));
console.log(cal.multiplicar(4, 4));
console.log(cal.toJSON());
console.log(cal.toString());

class Calculadora {
  constructor() {
    this.historico = [];
  }

  somar(a, b) {
    let resultadoSoma = BigInt(a) + BigInt(b);

    this.historico.push({
      operacao: soma,
      a: a,
      b: b,
      resultado: resultadoSoma,
    });

    return resultadoSoma;
  }

  subtrair(a, b) {
    let resultadoSub = BigInt(a) - BigInt(b);

    this.historico.push({
      operacao: subtração,
      a: a,
      b: b,
      resultado: resultadoSub,
    });

    return resultadoSub;
  }

  multiplicar(a, b) {
    let resultadoMult = BigInt(a) * BigInt(b);

    this.historico.push({
      operacao: multiplicação,
      a: a,
      b: b,
      resultado: resultadoMult,
    });

    return resultadoMult;
  }

  dividir(a, b) {
    let resultadoDiv = BigInt(a) / BigInt(b);

    this.historico.push({
      operacao: divisão,
      a: a,
      b: b,
      resultado: resultadoDiv,
    });

    return resultadoDiv;
  }

  lerHistorico(operacao) {
    if (!operacao) {
      return this.historico;
    } else {
      return this.historico.filter((item) => item.operacao === operacao);
    }
  }
}
