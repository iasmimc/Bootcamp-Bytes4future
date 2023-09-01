// function umOuOutro(a, b) {
//   //   if (a != b) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }

//   return a != b;
// }

// function umOuOutro(a, b, c) {
//   if (!a) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function umOuOutro(a, b, c) {
//   //   if (b || c) {
//   //     return false;
//   //   } else {
//   //     return (a = true);
//   //   }
//   if ((a && !b && !c) || (!a && b && !c) || (!a && !b && c));
//   {
//     return true;
//   }
//   return false;
// }

// function umOuOutro(a, b, c) {
//   //   if ((a && a !== b && a !== c) || (b && b !== b && a !== c) || (c && c !== b && a !== c)) {
//   //   }
//   //   return true;
// }

// console.log(umOuOutro(true, true, true));
// console.log(umOuOutro(false, true, false));
// console.log(umOuOutro(true, false, true));
// console.log(umOuOutro(false, false, false));

function contrarioDoE(a, b) {
  //   if (a && a  === b) {
  //     return false;
  //   } else {
  //     return true;
  //   }

  return !(a && b);
}
console.log(contrarioDoE(true, true)); // false
console.log(contrarioDoE(false, true)); //true
console.log(contrarioDoE(true, false)); //true
console.log(contrarioDoE(false, false)); //true
