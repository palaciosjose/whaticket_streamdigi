import { FlowBuilderModel } from "../../models/FlowBuilder";
import { FlowImgModel } from "../../models/FlowImg";
import { WebhookModel } from "../../models/Webhook";
import { randomString } from "../../utils/randomCode";
import logger from "../../utils/logger";

interface Request {
  userId: number;
  name: string;
  companyId: number
}

const UploadImgFlowBuilderService = async ({
  userId,
  name,
  companyId
}: Request): Promise<FlowImgModel> => {
  try {
    const flowImg = await FlowImgModel.create({
      userId: userId,
      companyId: companyId,
      name: name,
    });

    return flowImg;
  } catch (error) {
    logger.error("Error al insertar el usuario:", error);

    return error
  }
};

export default UploadImgFlowBuilderService;
