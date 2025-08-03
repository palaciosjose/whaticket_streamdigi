import moment from "moment";
import { scheduleTimeWindow } from "../helpers/scheduleTimeRange";

describe("scheduleTimeWindow", () => {
  const originalEnv = process.env.SCHEDULE_MARGIN_SECONDS;

  afterEach(() => {
    process.env.SCHEDULE_MARGIN_SECONDS = originalEnv;
  });

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

  it("defaults to 300 seconds when SCHEDULE_MARGIN_SECONDS is not a number", () => {
    process.env.SCHEDULE_MARGIN_SECONDS = "abc" as any;
    const [start, end] = scheduleTimeWindow();
    const diff = moment(end).diff(moment(start), "seconds");
    expect(diff).toBe(600);
  });

  it("defaults to 300 seconds when SCHEDULE_MARGIN_SECONDS is non-positive", () => {
    process.env.SCHEDULE_MARGIN_SECONDS = "-10";
    const [start, end] = scheduleTimeWindow();
    const diff = moment(end).diff(moment(start), "seconds");
    expect(diff).toBe(600);
  });
});
