// class Mesa{
//     constructor(tampo, perna ){
//        this.tampo = tampo;
//        this.perna = perna;
//     }
//     get mmontaPerna(perna){
//         return new Date () - this.perna;
//     }
// }

class Mesa {
  constructor(tampo) {
    this.tampo = tampo;
    this.pernas = [];
  }
  montaPerna(perna) {
    if (perna instanceof Perna) {
      this.pernas.push(perna);
    }
    return this;
  }
  estaMontada() {
    return this.pernas.length === 4;
  }
}
class Perna {}
class Tampo {}

const tampo = new Tampo();
const mesa = new Mesa(tampo);
console.log(mesa.estaMontada());
console.log(mesa.montaPerna(new Perna()));
console.log(mesa.montaPerna(13));
console.log(mesa.estaMontada());
console.log(mesa.montaPerna(new Perna()));
console.log(mesa.montaPerna(new Perna()));
console.log(mesa.montaPerna(new Perna()));
console.log(mesa.montaPerna(new Perna()));
console.log(mesa.estaMontada());
