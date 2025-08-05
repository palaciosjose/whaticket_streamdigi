import { FlowBuilderModel } from "../../models/FlowBuilder";
import { WebhookModel } from "../../models/Webhook";
import { randomString } from "../../utils/randomCode";
import logger from "../../utils/logger";

interface Request {
  companyId: number;
  name: string;
  flowId: number;
}

const UpdateFlowBuilderService = async ({
  companyId,
  name,
  flowId
}: Request): Promise<String> => {
  try {

    const nameExist = await FlowBuilderModel.findOne({
      where: {
        name,
        company_id: companyId
      }
    })

    logger.info({ nameExist })
    
    if(nameExist){
      return 'exist'
    }

    const flow = await FlowBuilderModel.update({ name }, {
      where: {id: flowId, company_id: companyId}
    });

    return 'ok';
  } catch (error) {
    logger.error("Error al insertar el usuario:", error);

    return error
  }
};

export default UpdateFlowBuilderService;
