import AppError from "../../../errors/AppError";
import CheckContactNumber from "../CheckNumber";
import GetDefaultWhatsApp from "../../../helpers/GetDefaultWhatsApp";
import { getWbot } from "../../../libs/wbot";

jest.mock("../../../helpers/GetDefaultWhatsApp");
jest.mock("../../../libs/wbot");

const mockedGetDefaultWhatsApp = GetDefaultWhatsApp as jest.Mock;
const mockedGetWbot = getWbot as jest.Mock;

describe("CheckContactNumber", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should validate number and return jid without domain", async () => {
    mockedGetDefaultWhatsApp.mockResolvedValue({ id: 1 });
    const wbot = { onWhatsApp: jest.fn().mockResolvedValue([{ exists: true, jid: "123@s.whatsapp.net" }]) };
    mockedGetWbot.mockReturnValue(wbot);

    const result = await CheckContactNumber("123", 1, false);

    expect(mockedGetDefaultWhatsApp).toHaveBeenCalledWith(null, 1);
    expect(wbot.onWhatsApp).toHaveBeenCalledWith("123@s.whatsapp.net");
    expect(result).toBe("123");
  });

  it("should throw AppError if number does not exist", async () => {
    mockedGetDefaultWhatsApp.mockResolvedValue({ id: 1 });
    const wbot = { onWhatsApp: jest.fn().mockResolvedValue([{ exists: false }]) };
    mockedGetWbot.mockReturnValue(wbot);

    await expect(CheckContactNumber("123", 1, false)).rejects.toBeInstanceOf(AppError);
  });

  it("should handle group numbers", async () => {
    mockedGetDefaultWhatsApp.mockResolvedValue({ id: 1 });
    const wbot = { groupMetadata: jest.fn().mockResolvedValue({ id: "123@g.us" }) };
    mockedGetWbot.mockReturnValue(wbot);

    const result = await CheckContactNumber("123@g.us", 1, true);

    expect(wbot.groupMetadata).toHaveBeenCalledWith("123@g.us");
    expect(result).toBe("123");
  });
});
