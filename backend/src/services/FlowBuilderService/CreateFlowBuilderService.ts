import { FlowBuilderModel } from "../../models/FlowBuilder";
import logger from "../../utils/logger";

interface Request {
  userId: number;
  name: string;
  companyId: number
}

const CreateFlowBuilderService = async ({
  userId,
  name,
  companyId
}: Request): Promise<"ok" | "exist"> => {
  try {
    
    const nameExist = await FlowBuilderModel.findOne({
      where: {
        name,
        company_id: companyId
      }
    })


    if (nameExist) {
      return "exist";
    }

    await FlowBuilderModel.create({
      user_id: userId,
      company_id: companyId,
      name
    });

    return "ok";
  } catch (error) {
    logger.error("Error al insertar el usuario:", error);
    throw error;
  }
};

export default CreateFlowBuilderService;
