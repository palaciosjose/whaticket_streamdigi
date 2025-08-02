export function capitalize(str) {
    // Verifica si la cadena no está vacía
    if (str.length === 0) {
      return str;
    }

    // Capitaliza la primera letra y concatena con el resto de la cadena
    return str.charAt(0).toUpperCase() + str.slice(1);
  }