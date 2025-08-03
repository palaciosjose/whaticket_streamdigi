import * as Yup from "yup";
import AppError from "../../errors/AppError";
import Campaign from "../../models/Campaign";
import ContactList from "../../models/ContactList";
import Queue from "../../models/Queue";
import User from "../../models/User";
import Whatsapp from "../../models/Whatsapp";

interface Data {
  id: number | string;
  name: string;
  status: string;
  confirmation: boolean;
  scheduledAt: string;
  companyId: number;
  contactListId: number;
  messages: string[];
  confirmationMessages: string[];
  userId: number | string;
  queueId: number | string;
  statusTicket: string;
  openTicket: string;
}

const UpdateService = async (data: Data): Promise<Campaign> => {
  const { id } = data;

  const record = await Campaign.findByPk(id);

  if (!record) {
    throw new AppError("ERR_NO_CAMPAIGN_FOUND", 404);
  }

  const campaignSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "ERR_CAMPAIGN_INVALID_NAME")
      .required("ERR_CAMPAIGN_REQUIRED"),
    scheduledAt: Yup.date()
      .nullable()
      .typeError("ERR_CAMPAIGN_INVALID_SCHEDULE"),
    status: Yup.string().required("ERR_CAMPAIGN_REQUIRED"),
    messages: Yup.array()
      .of(Yup.string().required("ERR_CAMPAIGN_REQUIRED"))
      .required("ERR_CAMPAIGN_REQUIRED"),
    confirmationMessages: Yup.array().of(
      Yup.string().required("ERR_CAMPAIGN_REQUIRED")
    )
  });

  try {
    await campaignSchema.validate(data);
  } catch (err: any) {
    throw new AppError(err.message);
  }

  if (["INATIVA", "PROGRAMADA", "CANCELADA"].indexOf(data.status) === -1) {
    throw new AppError(
      "Solo se permite modificar campañas Inactivas y Programadas",
      400
    );
  }

  if (
    data.scheduledAt != null &&
    data.scheduledAt !== "" &&
    data.status === "INATIVA"
  ) {
    data.status = "PROGRAMADA";
  }

  const { messages = [], confirmationMessages = [], ...campaignData } = data;

  await record.update({
    ...campaignData,
    message1: messages[0],
    message2: messages[1],
    message3: messages[2],
    message4: messages[3],
    message5: messages[4],
    confirmationMessage1: confirmationMessages[0],
    confirmationMessage2: confirmationMessages[1],
    confirmationMessage3: confirmationMessages[2],
    confirmationMessage4: confirmationMessages[3],
    confirmationMessage5: confirmationMessages[4]
  });

  await record.reload({
    include: [
      { model: ContactList },
      { model: Whatsapp, attributes: ["id", "name"] },
      { model: User, attributes: ["id", "name"] },
      { model: Queue, attributes: ["id", "name"] }
    ]
  });

  return record;
};

export default UpdateService;
