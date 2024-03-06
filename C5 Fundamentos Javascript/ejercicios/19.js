function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  
  // opcion 1:
  // return num == 0 ? false : num > 0 ? 'Es positivo' : 'Es negativo';

  // Opción usando Math.sign(x):
  return Math.sign(num) === 0 ? false : Math.sign(num) > 0 ? 'Es positivo' : 'Es negativo';

  // ambas opciones pasaron el test
}

module.exports = esPositivo;