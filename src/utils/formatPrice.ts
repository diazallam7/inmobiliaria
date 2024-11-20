export function formatPrice(price: number) {
  return Number(price).toLocaleString("es-PY", {
    style: "currency",
    currency: "PYG",
    minimumFractionDigits: 0, // Opcional, para evitar decimales, ya que el guaraní no tiene subdivisiones.
  });
}
