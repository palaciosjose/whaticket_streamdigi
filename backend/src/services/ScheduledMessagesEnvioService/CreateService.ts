import * as Yup from "yup";

import AppError from "../../errors/AppError";
import ScheduledMessagesEnvio from "../../models/ScheduledMessagesEnvio";

interface Request {
  mediaPath: string;
  mediaName: string;
  mensagem: string;
  companyId: number
  data_envio: Date;
  scheduledmessages: number;
  key: string;
}

const CreateService = async ({
  mediaPath,
  mediaName,
  mensagem,
  companyId,
  data_envio,
  scheduledmessages,
  key
}: Request): Promise<ScheduledMessagesEnvio> => {
  const schema = Yup.object().shape({
    mediaPath: Yup.string(),
    mediaName: Yup.string(),
    mensagem: Yup.string().required(),
    companyId: Yup.number().required(),
    data_envio: Yup.date().required(),
    scheduledmessages: Yup.number().required(),
    key: Yup.string().required(),
  });

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

  const schedule = await ScheduledMessagesEnvio.create(
    {
      mediaPath,
      mediaName,
      mensagem,
      companyId,
      data_envio,
      scheduledmessages,
      key
    }
  );

  await schedule.reload();

  return schedule;
};

export default CreateService;
