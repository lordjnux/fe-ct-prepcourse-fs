function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let contador = 1;
  do {
    num += 5;
    contador += 1;
  } while (contador <= 8);
  return num;
}

module.exports = doWhile;
