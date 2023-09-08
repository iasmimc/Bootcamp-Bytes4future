//Cria uma classe Retangulo com o método calculaArea().
// Um rectangulo tem duas propriedades altura e largura.
// Cria uma classe Quadrado que herda de Rectangulo, definido apenas o seu construtor
// com um argumento: lado

// class Retangulo {
//   constructor(altura, largura) {
//     this.altura = altura;
//     this.largura = largura;
//   }
//   calculaArea() {
//     return this.altura * this.largura;
//   }
// }
// class Quadrado extends Retangulo {
//   constructor(lado) {
//     super(lado, lado);
//   }
// }

class Retangulo {
  #altura;
  #largura;
  constructor(altura, largura) {
    this.#altura = altura;
    this.#largura = largura;
  }
  calculaArea() {
    return this.#altura * this.#largura;
  }
}

class Quadrado extends Retangulo {
  #lado;
  constructor(lado) {
    super(lado, lado);
  }
}
const rect = new Retangulo(2, 4);
console.log(rect.calculaArea());

const quad = new Quadrado(3);
console.log(quad.calculaArea());
