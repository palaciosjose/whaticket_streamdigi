import * as Yup from "yup";

import AppError from "../../errors/AppError";
import ScheduledMessagesEnvio from "../../models/ScheduledMessagesEnvio";
import ShowService from "./ShowService";

interface ScheduleData {
  mediaPath: string;
  mediaName: string;
  mensagem: string;
  companyId: number;
  data_envio: Date;
  scheduledmessages: number;
  key: string;
}

interface Request {
  scheduleData: ScheduleData;
  id: string | number;
  companyId: number;
}

const UpdateService = async ({
  scheduleData,
  id,
  companyId
}: Request): Promise<ScheduledMessagesEnvio | undefined> => {
  const schedule = await ShowService(id);

  const schema = Yup.object().shape({
    mediaPath: Yup.string(),
    mediaName: Yup.string(),
    mensagem: Yup.string().required(),
    companyId: Yup.number().required(),
    data_envio: Yup.date().required(),
    scheduledmessages: Yup.number().required(),
    key: Yup.string().required(),
  });

  const {
    mediaPath,
    mediaName,
    mensagem,
    data_envio,
    scheduledmessages,
    key
  } = scheduleData;

  try {
    await schema.validate({
      mediaPath,
      mediaName,
      mensagem,
      companyId,
      data_envio,
      scheduledmessages,
      key
    });
  } catch (err: any) {
    throw new AppError(err.message);
  }

  await schedule.update({
    mediaPath,
    mediaName,
    mensagem,
    companyId,
    data_envio,
    scheduledmessages,
    key
  });

  await schedule.reload();
  return schedule;
};

export default UpdateService;
