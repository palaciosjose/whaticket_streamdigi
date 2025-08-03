import AppError from "../../errors/AppError";
import { me } from "../SessionController";
import FindUserFromToken from "../../services/AuthServices/FindUserFromToken";

jest.mock("../../services/AuthServices/FindUserFromToken");

const mockedFindUser = FindUserFromToken as jest.Mock;

describe("SessionController", () => {
  it("me should throw AppError if token is missing", async () => {
    mockedFindUser.mockResolvedValue({ id: 1, profile: "admin", super: false });
    const req: any = { cookies: {} };
    const res: any = { json: jest.fn() };
    await expect(me(req, res)).rejects.toBeInstanceOf(AppError);
    expect(mockedFindUser).toHaveBeenCalledWith(undefined);
  });
});
