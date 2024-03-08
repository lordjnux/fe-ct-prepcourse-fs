const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  let obj = objeto;
  obj[propiedad] = valor;
  return obj;
};

module.exports = agregarNuevaPropiedad;
