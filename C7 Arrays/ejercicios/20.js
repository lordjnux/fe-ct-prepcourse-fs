function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var copy = array.slice();
  var result = true;
  array.forEach((x, index) => {
    copy.forEach((y) => {
      if (x != y) {
        result = false;
        return;
      }
    });
  });

  return result;
}

module.exports = todosIguales;
