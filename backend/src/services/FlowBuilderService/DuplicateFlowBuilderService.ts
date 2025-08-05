import { FlowBuilderModel } from "../../models/FlowBuilder";
import { WebhookModel } from "../../models/Webhook";
import { randomString } from "../../utils/randomCode";
import logger from "../../utils/logger";

interface Request {
  id: number;
}

const DuplicateFlowBuilderService = async ({
  id
}: Request): Promise<FlowBuilderModel> => {
  try {
    const flow = await FlowBuilderModel.findOne({
      where: {
        id: id
      }
    });

    const duplicate = await FlowBuilderModel.create({
      name: flow.name + " - copy",
      flow: flow.flow,
      user_id: flow.user_id,
      company_id: flow.company_id
    });

    return duplicate;
  } catch (error) {
    logger.error("Error al insertar el usuario:", error);

    return error;
  }
};

export default DuplicateFlowBuilderService;
