import GetDefaultWhatsApp from "../helpers/GetDefaultWhatsApp";
import Whatsapp from "../models/Whatsapp";

describe("GetDefaultWhatsApp", () => {
  it("should select default connection without console logs", async () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    const defaultWpp = { status: "CONNECTED" } as Whatsapp;
    const findOneSpy = jest
      .spyOn(Whatsapp, "findOne")
      .mockResolvedValue(defaultWpp as any);

    const result = await GetDefaultWhatsApp(null, 1);

    expect(result).toBe(defaultWpp);
    expect(findOneSpy).toHaveBeenCalledWith({
      where: { status: "CONNECTED", companyId: 1, isDefault: true }
    });
    expect(logSpy).not.toHaveBeenCalled();

    findOneSpy.mockRestore();
    logSpy.mockRestore();
  });
});
