import "dotenv/config";
import gracefulShutdown from "http-graceful-shutdown";
import https from "https";
import fs from "fs";
import app from "./app";
import { initIO } from "./libs/socket";
import { startServerTasks } from "./utils/serverHelper";

const isHttps = process.env.USE_HTTPS === "true";

const server = isHttps
  ? https.createServer(
      {
        key: fs.readFileSync(process.env.SSL_KEY_FILE),
        cert: fs.readFileSync(process.env.SSL_CRT_FILE)
      },
      app
    )
  : app;

const listener = server.listen(process.env.PORT, async () => {
  await startServerTasks(isHttps);
});

process.on("uncaughtException", err => {
  console.error(`${new Date().toUTCString()} uncaughtException:`, err.message);
  console.error(err.stack);
  process.exit(1);
});

process.on("unhandledRejection", (reason, p) => {
  console.error(
    `${new Date().toUTCString()} unhandledRejection:`,
    reason,
    p
  );
  process.exit(1);
});

initIO(listener);
gracefulShutdown(listener);


