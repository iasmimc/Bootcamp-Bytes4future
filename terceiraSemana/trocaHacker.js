function hackerizeString(inputString) {
  const substitutionDict = {
    a: "4",
    A: "4",
    e: "3",
    E: "3",
    i: "1",
    I: "1",
    o: "0",
    O: "0",
    s: "5",
    S: "5",
  };

  let hackerizedString = "";
  for (let char of inputString) {
    if (char in substitutionDict) {
      hackerizedString += substitutionDict[char];
    } else {
      hackerizedString += char;
    }
  }

  return hackerizedString;
}

const inputText = "Hello, World! This is a test.";
const hackerizedText = hackerizeString(inputText);
console.log(hackerizedText);
