function calculaEstacaoDoAno(dia, mes) {
  if (mes < 1 || mes > 12) {
    return "Por favor introduza um mês entre 1 e 12.";
  }

  if (dia < 1 || dia > 31) {
    return "Por favor introduza um dia entre 1 e 31.";
  }

  if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    if (dia > 30) {
      return "Por favor introduza um dia entre 1 e 30.";
    }
  } else if (mes === 2) {
    if (dia > 28) {
      return "Por favor introduza um dia entre 1 e 28.";
    }
  }

  if (
    (mes === 3 && dia >= 21) ||
    mes === 4 ||
    mes === 5 ||
    (mes === 6 && dia < 21)
  ) {
    return "Primavera";
  } else if (
    (mes === 6 && dia >= 21) ||
    mes === 7 ||
    mes === 8 ||
    (mes === 9 && dia < 21)
  ) {
    return "Verão";
  } else if (
    (mes === 9 && dia >= 21) ||
    mes === 10 ||
    mes === 11 ||
    (mes === 12 && dia < 21)
  ) {
    return "Outono";
  } else {
    return "Inverno";
  }
}
