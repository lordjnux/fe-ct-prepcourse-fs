const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  //Solucion 1:
  // let contador = 0;
  // for (const propiedad in objeto) {
  //   contador++;
  // }
  // return contador;

  //Solucion 2:
  return Object.keys(objeto).length;
};

module.exports = contarPropiedades;
