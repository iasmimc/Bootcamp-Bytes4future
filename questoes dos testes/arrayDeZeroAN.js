// Cria uma função que recebe um número como argumento e retorna um array com os números de 0 a n.

// Caso o número seja inválido deve retornar a seguinte mensagem: "Por favor insira um número superior a 0."

// Utiliza o que aprendeste sobre recursao  para resolver este exercício.

// function arrayDeZeroAN(n) {
//   if (n <= 0) {
//     return "Por favor insira um número superior a 0.";
//   } else if (n === 1) {
//     return [0];
//   } else {
//     let arr = arrayDeZeroAN(n - 1);
//     arr.push(n - 1);
//     return arr;
//   }
// }
// console.log(arrayDeZeroAN(4));

function arrayDeZeroAN(n) {
    if (n < 0) {
      return "Por favor insira um número superior a 0.";
    } 
  
    if (n === 0) {
      return [0]
    }
  
    const array = arrayDeZeroAN(n - 1);
    array.push(n);
    return array;
  }
  console.log(arrayDeZeroAN(4));


/* cria um array vazio para apresentar o resultado/
let newArray = []
/cria uma função para retornar um array /
function retornaArray(num) {
    /faz um if para excluir a excepção da regra /
    if (num <= 0) {
        return "Por favor insira um número superior a 0."
    }
    else {
        /percorrer o parametro da função de 0 até ao limite definido no console.log----- O FOR NÃO E SO PARA PERCORRER ARRAYS /*
        for (let i = 0; i <= num; i++) {
            método para incluir no array os números que são dados pelo i
            newArray.push(i)
        }

    }
    return newArray

}
console.log(retornaArray(15))