function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  if (texto.length == 0 || texto.length == 1) return texto;

  let cadenaResultante = "";

  for (let i = texto.length - 1; i >= 0; i--) cadenaResultante += texto[i];

  return cadenaResultante;
}

module.exports = invertirTexto;
