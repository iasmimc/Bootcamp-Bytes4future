function calcularAreaOctaedro(aresta) {
  if (aresta < 0) {
    return "Por favor insira um valor positivo.";
  }

  return Math.round(2 * Math.pow(aresta, 2) * Math.sqrt(3));
}
