function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if (array.length === 0) return 0;
  let bigMaxElement = Math.max(...array);
  return array.findIndex((x) => x == bigMaxElement);
  
}

module.exports = encontrarIndiceMayor;
