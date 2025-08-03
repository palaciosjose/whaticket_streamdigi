import CreateService from "../services/ScheduleServices/CreateService";
import Schedule from "../models/Schedule";

describe("Schedule CreateService", () => {
  it("should create schedule without whatsappId", async () => {
    const reload = jest.fn().mockResolvedValue(null);
    const scheduleMock = { reload } as any;
    const createSpy = jest
      .spyOn(Schedule, "create")
      .mockResolvedValue(scheduleMock);

    await CreateService({
      body: "test message",
      sendAt: new Date().toISOString(),
      contactId: 1,
      companyId: 1
    } as any);

    expect(createSpy).toHaveBeenCalled();
    const passedData = createSpy.mock.calls[0][0] as any;
    expect(passedData.whatsappId).toBeUndefined();
  });
});
