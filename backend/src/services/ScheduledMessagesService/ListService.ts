import { Op, Sequelize } from "sequelize";
import ScheduledMessages from "../../models/ScheduledMessages";

interface Request {
  searchParam?: string;
  companyId?: number;
  pageNumber?: string | number;
}

interface Response {
  schedules: ScheduledMessages[];
  count: number;
  hasMore: boolean;
}

const ListService = async ({
  searchParam,
  pageNumber = "1",
  companyId
}: Request): Promise<Response> => {
  const sanitizedSearchParam = searchParam
    ? searchParam.toLowerCase().trim()
    : "";

  let whereCondition = {};
  const limit = 20;
  const offset = limit * (+pageNumber - 1);

  if (sanitizedSearchParam) {
    whereCondition = {
      [Op.or]: [
        {
          mensagem: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("mensagem")),
            "LIKE",
            `%${sanitizedSearchParam}%`
          )
        },
        {
          nome: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col("nome")),
            "LIKE",
            `%${sanitizedSearchParam}%`
          )
        }
      ]
    };
  }

  whereCondition = {
    ...whereCondition,
    companyId: {
      [Op.eq]: companyId
    }
  }

  const { count, rows: schedules } = await ScheduledMessages.findAndCountAll({
    where: whereCondition,
    limit,
    offset,
    order: [["createdAt", "DESC"]]
  });

  const hasMore = count > offset + schedules.length;

  return {
    schedules,
    count,
    hasMore
  };
};

export default ListService;
