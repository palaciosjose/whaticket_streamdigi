import AppError from "../../../errors/AppError";
import AuthUserService from "../AuthUserService";
import User from "../../../models/User";

jest.mock("../../../models/User");

describe("AuthUserService", () => {
  it("should throw AppError if user is not found", async () => {
    (User.findOne as jest.Mock).mockResolvedValue(null);
    await expect(
      AuthUserService({ email: "no@user.com", password: "123" })
    ).rejects.toBeInstanceOf(AppError);
  });
});
