import Company from "../models/Company";
import BullQueue from "../libs/queue";
import { startQueueProcess } from "../queues";
import { StartAllWhatsAppsSessions } from "../services/WbotServices/StartAllWhatsAppsSessions";
import logger from "./logger";

export const startServerTasks = async (isHttps: boolean): Promise<void> => {
  const companies = await Company.findAll({
    where: { status: true },
    attributes: ["id"]
  });

  const allPromises = companies.map(c => StartAllWhatsAppsSessions(c.id));
  await Promise.all(allPromises);

  await startQueueProcess();

  if (process.env.REDIS_URI_ACK && process.env.REDIS_URI_ACK !== "") {
    BullQueue.process();
  }

  logger.info(
    `Server started on port: ${process.env.PORT}${isHttps ? " with HTTPS" : ""}`
  );
};
