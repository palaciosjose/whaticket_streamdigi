import CreateMessageService from "../CreateMessageService";
import Message from "../../../models/Message";
import { getIO } from "../../../libs/socket";

jest.mock("../../../models/Message");
jest.mock("../../../libs/socket");

const mockedMessage = Message as jest.Mocked<typeof Message>;
const mockedGetIO = getIO as jest.Mock;

describe("CreateMessageService", () => {
  beforeEach(() => {
    mockedGetIO.mockReturnValue({ of: () => ({ emit: jest.fn() }) });
  });

  it("should throw error if message is not created", async () => {
    mockedMessage.upsert.mockResolvedValue({} as any);
    mockedMessage.findOne.mockResolvedValue(null as any);
    await expect(
      CreateMessageService({ messageData: { wid: "1", ticketId: 1, body: "hi" }, companyId: 1 })
    ).rejects.toThrow();
  });
});
