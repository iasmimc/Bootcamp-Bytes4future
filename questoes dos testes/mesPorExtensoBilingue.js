// Cria uma função que recebe uma data e uma língua como argumentos e a retorna o mês por extenso.

// As línguas suportadas são português (pt) e inglês (en)

// Meses em português - inglês:

// Janeiro — January

// Fevereiro — February

// Março — March

// Abril — April

// Maio — May

// Junho — June

// Julho — July

// Agosto — August

// Setembro — September

// Outubro — October

// Novembro — November

// Dezembro — December

// Utiliza o que aprendeste sobre  para resolver este exercício.

function mesPorExtensoBilingue(data, lingua) {
  let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let mes = data.getMonth();

  if (lingua == "pt") {
    return meses[mes];
  } else if (lingua == "en") {
    return months[mes];
  }
}
