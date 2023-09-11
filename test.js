// // const data = new Date("2023-08-29");
// // const dataFormatada = formataData(data);

// // console.log("Data formatada:", dataFormatada); // Saída: "08-29-2023"

// // function formataData(data) {
// //   const dia = String(data.getDate()).padStart(2, "0");
// //   const mes = String(data.getMonth() + 1).padStart(2, "0");
// //   const ano = data.getFullYear();

// //   return `${mes}-${dia}-${ano}`;
// // }
// // console.log(formataData(22 - 2 - 8));

// // function umaStringPorLinha(string1, string2) {
// //   // escreve aqui a função
// //   return `${string1}
// //     ${string2}`;
// // }
// // console.log(umaStringPorLinha(1, 2));

// // function umaStringPorLinha(string1, string2) {
// //   // escreve aqui a função
// //   // return `${string1}
// //   // ${string2}`
// //   return string1 + " " + string2;
// // }
// // console.log(umaStringPorLinha(1, 2));

// // function umaStringPorLinha(string1, string2) {
// //   return string1 + "\n" + string2;
// // }

// // // Exemplo de uso
// // console.log(umaStringPorLinha("Olá", "Mundo"));

// // function contaParesEntreDoisValores(valor1, valor2) {
// //   if (valor1 === valor2) {
// //     return "Por favor introduza dois valores diferentes.";
// //   }

// //   const inicio = Math.min(valor1, valor2);
// //   const fim = Math.max(valor1, valor2);

// //   const countPares = Math.floor((fim - inicio + 1) / 2);

// //   return countPares;
// // }

// // // Testes da função
// // const valorA = 3;
// // const valorB = 10;
// // const resultado1 = contaParesEntreDoisValores(valorA, valorB);
// // console.log(`Entre ${valorA} e ${valorB} existem ${resultado1} números pares.`);

// // const valorX = 7;
// // const valorY = 7;
// // const resultado2 = contaParesEntreDoisValores(valorX, valorY);
// // console.log(resultado2);
// function calculaEstacaoDoAno(dia, mes) {
//   if (mes < 1 || mes > 12) {
//     return "Por favor introduza um mês entre 1 e 12.";
//   }

//   if (dia < 1 || dia > 31) {
//     return "Por favor introduza um dia entre 1 e 31.";
//   }

//   if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
//     if (dia > 30) {
//       return "Por favor introduza um dia entre 1 e 30.";
//     }
//   } else if (mes === 2) {
//     if (dia > 28) {
//       return "Por favor introduza um dia entre 1 e 28.";
//     }
//   }

//   if (
//     (mes === 3 && dia >= 21) ||
//     mes === 4 ||
//     mes === 5 ||
//     (mes === 6 && dia < 21)
//   ) {
//     return "Primavera";
//   } else if (
//     (mes === 6 && dia >= 21) ||
//     mes === 7 ||
//     mes === 8 ||
//     (mes === 9 && dia < 21)
//   ) {
//     return "Verão";
//   } else if (
//     (mes === 9 && dia >= 21) ||
//     mes === 10 ||
//     mes === 11 ||
//     (mes === 12 && dia < 21)
//   ) {
//     return "Outono";
//   } else {
//     return "Inverno";
//   }
// }

transformaParesEmMaiusculas(array) {
	if (array.length === 0) {
		return "por favor insira um array não vazio.";
	}


let pares = [ ]

for (i = 0; i < array.length; i++) {
	if (i % 2 !== 0) {
		pares.push(array[i])
	}
}

let maiusculas = []

for (i = 0; i < pares.length; i++) {
	if (pares[i].length % 2 !== 0) {
		maiusculas.push(pares[i].toUpperCase())
	}
}

return maiusculas

}
