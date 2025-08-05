import request from "supertest";
import app from "../app";

describe("rate limiting", () => {
  it("should block requests after exceeding the limit", async () => {
    for (let i = 0; i < 100; i++) {
      await request(app).get("/public/test");
    }
    const res = await request(app).get("/public/test");
    expect(res.status).toBe(429);
  });
});
