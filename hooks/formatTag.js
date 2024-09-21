export function formatTags(tagsArray) {
  if (!Array.isArray(tagsArray)) {
    return ""; // Retorna una cadena vacía si tagsArray no es un array
  }

  // Mapea el array para agregar el símbolo '#' a cada tag y unirlos en una cadena
  const formattedTags = tagsArray
    .filter((tag) => tag.trim() !== "") // Filtra los tags vacíos
    .map((tag) => `#${tag.trim()}`) // Agrega el símbolo '#' a cada tag
    .join("    "); // Une los tags con un espacio

  return formattedTags;
}
