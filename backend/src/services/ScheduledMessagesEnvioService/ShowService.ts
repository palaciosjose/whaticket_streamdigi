import ScheduledMessagesEnvio from "../../models/ScheduledMessagesEnvio";
import AppError from "../../errors/AppError";

const ScheduleService = async (id: string | number): Promise<ScheduledMessagesEnvio> => {
  const schedule = await ScheduledMessagesEnvio.findByPk(id);

  if (!schedule) {
    throw new AppError("ERR_NO_SCHEDULE_FOUND", 404);
  }

  return schedule;
};

export default ScheduleService;
