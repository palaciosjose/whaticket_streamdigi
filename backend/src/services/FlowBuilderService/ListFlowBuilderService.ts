import { WebhookModel } from "../../models/Webhook";
import User from "../../models/User";
import { FlowBuilderModel } from "../../models/FlowBuilder";
import logger from "../../utils/logger";

interface Request {
  companyId: number;
}

interface Response {
  flows: FlowBuilderModel[];
}

const ListFlowBuilderService = async ({
  companyId,
}: Request): Promise<Response> => {
  
    try {
    
        // Realiza a consulta com paginação usando findAndCountAll
        const { count, rows } = await FlowBuilderModel.findAndCountAll({
          where: {
            company_id: companyId
          }
        });
    
        const flowResult = []
        rows.forEach((flow) => {
          flowResult.push(flow.toJSON());
        });

        return {
            flows: flowResult,
        }
      } catch (error) {
        logger.error('Error al consultar usuarios:', error);
      }
};

export default ListFlowBuilderService;
