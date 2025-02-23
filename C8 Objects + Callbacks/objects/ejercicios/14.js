function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if (!objetoUsuario.hasOwnProperty("email")) return false;
  return objetoUsuario.email != undefined && objetoUsuario.email != null;
}

module.exports = tieneEmail;
