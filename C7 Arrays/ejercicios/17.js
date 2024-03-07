function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let total = 0;
  arrayOfNums.forEach((num) => total += num);
  return total;
}

module.exports = agregarNumeros;
