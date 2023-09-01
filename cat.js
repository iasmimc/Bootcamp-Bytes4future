// Cria uma classe chamada Cat com as seguintes propriedades:
// name string
// weight number
// maxJumpHeight number
// verticalPosition

class Cat {
  constructor(name, weigth, maxJumpHeight, verticalPosition) {
    this.name = name;
    this.weigth = weigth;
    this.maxJumpHeight = maxJumpHeight;
    this.verticalPosition = verticalPosition;
  }
  jump(power) {
    if (power >= 0 && power <= 1) {
      this.verticalPosition =
        this.verticalPosition + this.maxJumpHeight * power;
    }
    return "Erro: Insira um número entre 0 e 1.";
  }
}
const cat = new Cat("Mia", 6.5, 150, 0);
console.log(cat.verticalPosition);
cat.jump(0.2);
console.log(cat.verticalPosition);
cat.jump(0.5);
