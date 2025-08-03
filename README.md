# Whaticket Streamdigi

## Requisitos previos
- [Node.js](https://nodejs.org/) >= 16
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/) o [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/streamdigi/whaticket_streamdigi.git
   cd whaticket_streamdigi
   ```
2. Instala las dependencias del backend:
   ```bash
   cd backend
   npm install
   ```
3. Instala las dependencias del frontend:
   ```bash
   cd ../frontend
   npm install
   ```

## Variables de entorno
En `backend/.env.exemple` se incluye un ejemplo de configuración para producción.
Las variables más importantes son:

- `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`: credenciales de la base de datos.
- `REDIS_URI`: URL de conexión a Redis.
- `SCHEDULE_MARGIN_SECONDS`: margen en segundos para el envío programado de mensajes.

Copia el archivo a `backend/.env` y ajusta los valores según tu entorno.

## Ejecutar el backend
1. Configura las variables de entorno en el archivo `.env` según tus necesidades.
2. Ejecuta las migraciones de la base de datos si es necesario:
   ```bash
   npm run db:migrate
   npm run db:seed
   ```
3. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev:server
   ```
   Para producción:
   ```bash
   npm run build
   node dist/server.js
   ```
   También puedes usar [pm2](https://pm2.keymetrics.io/) o systemd con las
   plantillas incluidas `backend/ecosystem.config.js` y
   `backend/whaticket-backend.service.example`.

## Ejecutar el frontend
1. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
2. Para generar una versión de producción:
   ```bash
   npm run build
   ```
   Luego sirve los archivos con `node server.js`, o utiliza pm2/systemd mediante
   `frontend/ecosystem.config.js` o `frontend/whaticket-frontend.service.example`.

## Recursos externos
- Documentación de [Node.js](https://nodejs.org/docs/latest/api/).
- Documentación de [React](https://react.dev/).
- Guía de [Sequelize](https://sequelize.org/).
- Documentación de [Express](https://expressjs.com/).

## Contribución
1. Haz un fork del repositorio y crea una rama para tu feature o corrección.
2. Asegúrate de ejecutar los tests del backend y frontend antes de enviar tus cambios.
3. Abre un Pull Request describiendo claramente tu aporte.

¡Gracias por contribuir!
