import { FlowBuilderModel } from "../../models/FlowBuilder";
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
}: Request): Promise<"ok" | "exist"> => {
  try {

    const nameExist = await FlowBuilderModel.findOne({
      where: {
        name,
        company_id: companyId
      }
    })

    logger.info({ nameExist });

    if (nameExist) {
      return "exist";
    }

    await FlowBuilderModel.update(
      { name },
      { where: { id: flowId, company_id: companyId } }
    );

    return "ok";
  } catch (error) {
    logger.error("Error al insertar el usuario:", error);
    throw error;
  }
};

export default UpdateFlowBuilderService;
