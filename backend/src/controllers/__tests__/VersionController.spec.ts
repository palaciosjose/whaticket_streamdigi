import { index, store } from "../VersionController";
import Version from "../../models/Versions";

jest.mock("../../models/Versions");

describe("VersionController", () => {
  const mockStatus = jest.fn().mockReturnThis();
  const mockJson = jest.fn();
  const res: any = { status: mockStatus, json: mockJson };

  beforeEach(() => {
    jest.clearAllMocks();
    mockStatus.mockReturnThis();
  });

  it("index should return current frontend version", async () => {
    (Version as any).findByPk.mockResolvedValue({ versionFrontend: "1.0.0" });

    await index({} as any, res);

    expect(Version.findByPk).toHaveBeenCalledWith(1);
    expect(mockStatus).toHaveBeenCalledWith(200);
    expect(mockJson).toHaveBeenCalledWith({ version: "1.0.0" });
  });

  it("store should update frontend version", async () => {
    const save = jest.fn();
    const versionInstance = { versionFrontend: "1.0.0", save };
    (Version as any).findByPk.mockResolvedValue(versionInstance);

    const req: any = { body: { version: "2.0.0" } };

    await store(req, res);

    expect(versionInstance.versionFrontend).toBe("2.0.0");
    expect(save).toHaveBeenCalled();
    expect(mockJson).toHaveBeenCalledWith({ version: "2.0.0" });
  });
});
