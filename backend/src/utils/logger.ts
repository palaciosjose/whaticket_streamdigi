import pino from 'pino';
import moment from 'moment-timezone';

// Función para obtener el timestamp con huso horario
const timezoned = () => {
  const timezone = process.env.TZ || 'UTC'; // Usa la zona horaria definida en TZ o UTC por defecto
  return moment().tz(timezone).format('DD-MM-YYYY HH:mm:ss');
};

const logger = pino({
  timestamp: () => `,"time":"${timezoned()}"`, // Añade el timestamp formateado
});

// Para redirigir los logs a un archivo o servicio externo, configura pino.destination
// según la infraestructura disponible.

export default logger;
