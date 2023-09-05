// JAVASCRIPT - 4 - EXERCÍCIO #2
// A fórmula resolvente serve para resolver equações de segundo grau.

// Neste exercício deves implementar a função formulaResolvente que recebe 3 argumentos:
// a, b e c.

// Se a equação tiver solução, deves retornar um array com as soluções possíveis.
// No indíce 0 deve estar a solução que resulta da utilização do , e no índice 1 deve
// estar a solução que resulta da utilização do

// Se a equação não tiver solução, deves retornar o texto "Sem Solução".

function formulaResolvente(a, b, c) {
  let x = [];
  let delta = b * b - 4 * a * c;
  if (delta < 0) {
    return "Sem Solução";
  } else {
    f = (-b - Math.sqrt(delta)) / (2 * a);
    s = (-b + Math.sqrt(delta)) / (2 * a);
    return (f = [f, s]);
  }
}
