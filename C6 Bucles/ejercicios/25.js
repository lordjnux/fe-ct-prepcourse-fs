function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  if (string.length == 0 || string.length == 1) return string;

  let cadenaResultante = "";

  for (let i = string.length - 1; i >= 0; i--) cadenaResultante += string[i];

  for (let j = 0; j < string.length - 1; j++) {
    if (string[j] != cadenaResultante[j]) return false;
  }

  return true;
}

module.exports = esPalindromo;
