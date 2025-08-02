/* eslint-disable new-cap */
export default function formatToCurrency(value) {
  return Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
