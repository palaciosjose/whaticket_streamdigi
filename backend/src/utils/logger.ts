import pino from 'pino';
import moment from 'moment-timezone';

// Función para obtener el timestamp con huso horario
const timezoned = () => {
  return moment().tz('America/Bogota').format('DD-MM-YYYY HH:mm:ss');
};

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: 'SYS:dd-mm-yyyy HH:MM:ss', // Úsalo para traducir la hora
      ignore: "pid,hostname"
    },
  },
  timestamp: () => `,"time":"${timezoned()}"`, // Añade el timestamp formateado
});

export default logger;
