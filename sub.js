// function subtrairDias(dataStr, dias) {
//     const data = new Date(dataStr);
//     data.setDate(data.getDate() - dias);

//     const novaDataStr = data.toISOString().split('T')[0];
//     return novaDataStr;
// }

// // Exemplo de uso
// const dataOriginal = "2023-08-31";
// const diasParaSubtrair = 10;
// const novaData = subtrairDias

function subtraiDias(data, dias) {
  const dataObj = new Date(data);
  dataObj.setDate(dataObj.getDate() - dias);

  const novaData = dataObj.toISOString().split("T")[0];
  return novaData;
}

// Exemplo de uso
const dataOriginal = "2023-08-31";
const diasParaSubtrair = 10;
const novaData = subtraiDias(dataOriginal, diasParaSubtrair);

console.log("Data original:", dataOriginal);
console.log(`${diasParaSubtrair} dias atrás:`, novaData);
