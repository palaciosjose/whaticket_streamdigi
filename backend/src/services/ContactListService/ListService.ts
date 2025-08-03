import { Op, fn, col, where } from "sequelize";
import ContactList from "../../models/ContactList";
import ContactListItem from "../../models/ContactListItem";
import { isEmpty } from "lodash";
import removeAccents from "remove-accents"
interface Request {
  companyId: number | string;
  searchParam?: string;
  pageNumber?: string;
  limit?: string;
  offset?: string;
}

interface Response {
  records: ContactList[];
  count: number;
  hasMore: boolean;
}

const ListService = async ({
  searchParam = "",
  pageNumber = "1",
  companyId,
  limit = "20",
  offset
}: Request): Promise<Response> => {
  let whereCondition: any = {
    companyId
  };

  if (!isEmpty(searchParam)) {
    const sanitizedSearchParam = removeAccents(searchParam.toLocaleLowerCase().trim());

    whereCondition = {
      ...whereCondition,
      [Op.or]: [
        {
          name: where(
            fn("LOWER", fn('unaccent',col("ContactList.name"))),
            "LIKE",
            `%${sanitizedSearchParam}%`
          )
        }
      ]
    };
  }

  const limitNumber = +limit;
  const offsetNumber = offset ? +offset : limitNumber * (+pageNumber - 1);

  const { count, rows: records } = await ContactList.findAndCountAll({
    where: whereCondition,
    limit: limitNumber,
    offset: offsetNumber,
    order: [["name", "ASC"]],
    subQuery: false,
    include: [
      {
        model: ContactListItem,
        as: "contacts",
        attributes: [],
        required: false
      }
    ],
    attributes: [
      "id",
      "name",
      [fn("count", col("contacts.id")), "contactsCount"]
    ],
    group: ["ContactList.id"]
  });

  const hasMore = count > offsetNumber + records.length;

  return {
    records,
    count,
    hasMore
  };
};

export default ListService;
