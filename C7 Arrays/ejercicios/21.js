function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesPerdidos = ["Enero", "Marzo", "Noviembre"];
  let newArray = [];

  array.forEach((x) => {
    if (mesesPerdidos.includes(x)) {
      newArray.push(x);
    }
  });

  if (newArray.length < mesesPerdidos.length) {
    return "No se encontraron los meses pedidos";
  }

  return newArray;
}

module.exports = mesesDelAño;
