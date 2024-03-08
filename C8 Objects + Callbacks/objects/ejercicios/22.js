function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  return (
    str1
      .toUpperCase()
      .split("")
      .every((letra) => {
        return str2.toUpperCase().split("").includes(letra);
      }) && str1.length == str2.length
  );
}

module.exports = esAnagrama;
