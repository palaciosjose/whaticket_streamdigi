import { WebhookModel } from "../../models/Webhook";
import { randomString } from "../../utils/randomCode";
import logger from "../../utils/logger";

interface Request {
  userId: number;
  hashId: string;
  data: any
}

interface webhookCustom {
	config: null | {
    lastRequest: {},
    keys:{}
  }
}

const DispatchWebHookService = async ({
  userId,
  hashId,
  data
}: Request): Promise<WebhookModel> => {
  try {

    const webhook = await WebhookModel.findOne({
      where:{
        user_id: userId,
        hash_id: hashId,
      }
    });

    const config = {
      lastRequest: {
        ...data
      },
    }

    const webhookUpdate = await WebhookModel.update({ config }, {
      where: {hash_id: hashId, user_id: userId}
    });

    return webhook;
  } catch (error) {
    logger.error("Error al insertar el usuario:", error);

    return error
  }
};

export default DispatchWebHookService;
