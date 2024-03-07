function tablaDelSeis() {
  // Devuelve un tablaSeis con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tablaSeis = [];
  for (let i = 0; i <= 10; i++) {
    tablaSeis.push(i * 6);
  }
  console.log(tablaSeis);
  return tablaSeis;
}

module.exports = tablaDelSeis;
