// Cria uma função que recebe dois comprimentos (das bases) e a altura de um trapézio isósceles como argumentos e calcula o perímetro desse trapézio.

function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
  let cateto = (comprimentoMaior - comprimentoMenor) / 2;
  let hipotenusa = Math.sqrt(cateto ** 2 + altura ** 2);
  return hipotenusa * 2 + comprimentoMaior + comprimentoMenor;
}
