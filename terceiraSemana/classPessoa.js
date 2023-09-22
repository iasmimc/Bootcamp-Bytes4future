class Pessoa {
  constructor(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }

  comparaIdade(pessoa) {
    const frase = this.obtemFrase(pessoa.idade, pessoa.sexo);
    return `${pessoa.sexo === "m" ? "O" : "A"} ${pessoa.nome} ${frase} que eu.`;
  }

  obtemFrase(idade, sexo) {
    return this.idade === idade
      ? "é da mesma idade"
      : this.idade < idade
      ? `é mais velh${sexo === "m" ? "o" : "a"} do`
      : `é mais nov${sexo === "m" ? "o" : "a"} do`;
  }
}
