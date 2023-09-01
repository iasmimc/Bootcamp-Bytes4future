function obterSigno(dia, mes) {
  if (mes < 1 || mes > 12) {
    return "Por favor introduza um mês entre 1 e 12.";
  }

  if (dia < 1 || dia > 31) {
    return "Por favor introduza um dia entre 1 e 31.";
  }

  if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
    return "Por favor introduza um dia entre 1 e 30.";
  }

  if (mes === 2 && dia > 28) {
    return "Por favor introduza um dia entre 1 e 28.";
  }

  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)) {
    return "Carneiro";
  } else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
    return "Touro";
  } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
    return "Gémeos";
  } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
    return "Caranguejo";
  } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
    return "Leão";
  } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    return "Virgem";
  } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    return "Balança";
  } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    return "Escorpião";
  } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    return "Sagitário";
  } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)) {
    return "Capricórnio";
  } else if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 18)) {
    return "Aquário";
  } else {
    return "Peixes";
  }
}

// Exemplos de uso
console.log(obterSigno(25, 7)); // Deve retornar "Leão"
console.log(obterSigno(2, 11)); // Deve retornar "Escorpião"
console.log(obterSigno(30, 4)); // Deve retornar "Touro"
console.log(obterSigno(5, 13)); // Deve retornar "Por favor introduza um mês entre 1 e 12."
