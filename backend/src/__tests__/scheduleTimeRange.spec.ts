import moment from "moment";
import { scheduleTimeWindow } from "../helpers/scheduleTimeRange";

describe("scheduleTimeWindow", () => {
  it("captures times within margin even with different seconds", () => {
    const margin = 30;
    const [start, end] = scheduleTimeWindow(margin);

    const insideFuture = moment().add(15, "seconds");
    const insidePast = moment().subtract(15, "seconds");
    const outsideFuture = moment().add(margin + 5, "seconds");

    expect(insideFuture.isBetween(start, end, undefined, "[]")).toBe(true);
    expect(insidePast.isBetween(start, end, undefined, "[]")).toBe(true);
    expect(outsideFuture.isBetween(start, end, undefined, "[]")).toBe(false);
  });
});
