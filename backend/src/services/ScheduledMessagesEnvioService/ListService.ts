import ScheduledMessagesEnvio from "../../models/ScheduledMessagesEnvio";

interface Request {
  scheduleId: number | string;
  companyId: number;
}

const ListService = async ({
  scheduleId,
  companyId
}: Request): Promise<ScheduledMessagesEnvio[]> => {
  const envios = await ScheduledMessagesEnvio.findAll({
    where: {
      scheduledmessages: scheduleId,
      companyId
    },
    order: [["createdAt", "DESC"]]
  });

  return envios;
};

export default ListService;

