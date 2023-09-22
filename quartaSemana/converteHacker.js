function converteHacker(string) {
  // Escreve aqui o teu código
  const replacements = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5",
  };

  return string
    .split("")
    .map((char) => replacements[char.toLowerCase()] || char)
    .join("");
}
