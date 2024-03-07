function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let contador = 0;
  array.forEach((x) => { 
    if (x > 10) contador += 1;
  });
  return contador;
}

module.exports = contarElementosMayoresA10;
