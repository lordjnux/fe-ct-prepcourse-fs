function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  let indice = Math.floor(Math.random() * (array.length - 1));
  return array[indice];
}

module.exports = obtenerElementoAleatorio;
