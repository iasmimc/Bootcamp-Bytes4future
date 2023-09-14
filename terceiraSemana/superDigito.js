//implementa a funcao superDigito que recebe uma string n e calcula o super digito de n.
//Se o numero n so tiver um digito, o seu super digito é da soma dos digitos.
function superDigito(n) {
  if (n.length === 1) {
    return parseInt(n);
  }
  const sum = n.split("").reduce((acc, digit) => acc + parseInt(digit), 0);
  return superDigito(sum.toString());
}
console.log(superDigito("9875")); //2
console.log(superDigito("12")); // 3
console.log(superDigito("1")); //1

//A função superDigito recebe uma string n e calcula o super dígito de n. Se o número n tiver apenas um dígito, o seu super dígito é a soma dos dígitos. Caso contrário, a função calcula a soma dos dígitos de n e chama recursivamente a si mesma com a soma calculada até que o resultado tenha apenas um dígito.
