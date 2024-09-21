export function formatPostDate(dateString) {
  const now = new Date();
  const postDate = new Date(dateString);

  // Calcula la diferencia en horas entre ahora y la fecha del post
  const diffHours = Math.floor((now - postDate) / (1000 * 60 * 60));

  // Formatear la fecha sin el año
  const optionsDate = { month: "short", day: "numeric" };
  const formattedDate = postDate.toLocaleDateString(undefined, optionsDate);

  // Formatear el tiempo si la diferencia es menor a 48 horas
  const formattedTime = diffHours < 48 ? `(${diffHours} hours ago)` : "";

  return `${formattedDate} ${formattedTime}`;
}
