// class inteiro {
//     static eInteiro = 'Number'
//     constructor()
// }
// class inteiro {
//    static getEInteiro(n){
//     return true;
//    }
// }
// class inteiro {
//     static nulo = 0;
// }

class Inteiro {
  static nulo = 0;
  constructor() {}
  static eInteiro(n) {
    return n === Math.trunc(n);
  }
}
const int = new Inteiro();
console.log(Inteiro.eInteiro(4.3));
