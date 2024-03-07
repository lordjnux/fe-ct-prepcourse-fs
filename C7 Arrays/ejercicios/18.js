function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  if (resultadosTest.length == 0) return 0;
  if (resultadosTest.length == 1) return resultadosTest[0];
  
  let total = 0;
  resultadosTest.forEach((x) => { total += x});
  return total / resultadosTest.length;
}

module.exports = promedioResultadosTest;
