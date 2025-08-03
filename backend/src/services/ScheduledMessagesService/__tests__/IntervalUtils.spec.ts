import { calculateNextSendDate, shouldScheduleAgain } from "../IntervalUtils";

describe("IntervalUtils", () => {
  it("calculates next date based on days interval", () => {
    const start = new Date("2024-01-01T00:00:00Z");
    const result = calculateNextSendDate(start, 1, 2);
    expect(result.getTime()).toBe(start.getTime() + 2 * 24 * 60 * 60 * 1000);
  });

  it("calculates next date based on minutes interval", () => {
    const start = new Date("2024-01-01T00:00:00Z");
    const result = calculateNextSendDate(start, 4, 30);
    expect(result.getTime()).toBe(start.getTime() + 30 * 60 * 1000);
  });

  it("enforces send limit", () => {
    expect(shouldScheduleAgain(1, 2, 1)).toBe(true);
    expect(shouldScheduleAgain(2, 2, 1)).toBe(false);
  });
});
