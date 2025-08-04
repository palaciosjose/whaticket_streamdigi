import moment from "moment";
import { scheduleTimeWindow } from "../helpers/scheduleTimeRange";

describe("scheduleTimeWindow", () => {
  const originalEnv = process.env.SCHEDULE_MARGIN_SECONDS;

  afterEach(() => {
    if (originalEnv === undefined) {
      delete process.env.SCHEDULE_MARGIN_SECONDS;
    } else {
      process.env.SCHEDULE_MARGIN_SECONDS = originalEnv;
    }
  });

  it("captures times within margin even with different seconds", () => {
    const margin = 180;
    const [start, end] = scheduleTimeWindow(margin);

    const insideFuture = moment().add(100, "seconds");
    const insidePast = moment().subtract(100, "seconds");
    const outsideFuture = moment().add(margin + 10, "seconds");

    expect(insideFuture.isBetween(start, end, undefined, "[]")).toBe(true);
    expect(insidePast.isBetween(start, end, undefined, "[]")).toBe(true);
    expect(outsideFuture.isBetween(start, end, undefined, "[]")).toBe(false);
  });

  it("clamps provided margin to recommended range", () => {
    const [start, end] = scheduleTimeWindow(30);
    const diff = moment(end).diff(moment(start), "seconds");
    expect(diff).toBe(240);
  });

  it("reflects changes in SCHEDULE_MARGIN_SECONDS between calls", () => {
    process.env.SCHEDULE_MARGIN_SECONDS = "200";
    let [start, end] = scheduleTimeWindow();
    let diff = moment(end).diff(moment(start), "seconds");
    expect(diff).toBe(400);

    process.env.SCHEDULE_MARGIN_SECONDS = "180";
    [start, end] = scheduleTimeWindow();
    diff = moment(end).diff(moment(start), "seconds");
    expect(diff).toBe(360);
  });

  it("clamps SCHEDULE_MARGIN_SECONDS below minimum", () => {
    process.env.SCHEDULE_MARGIN_SECONDS = "60";
    const [start, end] = scheduleTimeWindow();
    const diff = moment(end).diff(moment(start), "seconds");
    expect(diff).toBe(240);
  });

  it("clamps SCHEDULE_MARGIN_SECONDS above maximum", () => {
    process.env.SCHEDULE_MARGIN_SECONDS = "400";
    const [start, end] = scheduleTimeWindow();
    const diff = moment(end).diff(moment(start), "seconds");
    expect(diff).toBe(600);
  });

  it("defaults to 300 seconds when SCHEDULE_MARGIN_SECONDS is not a finite number", () => {
    process.env.SCHEDULE_MARGIN_SECONDS = "abc" as any;
    const [start, end] = scheduleTimeWindow();
    const diff = moment(end).diff(moment(start), "seconds");
    expect(diff).toBe(600);
  });

  it("defaults to 300 seconds when SCHEDULE_MARGIN_SECONDS is missing", () => {
    delete process.env.SCHEDULE_MARGIN_SECONDS;
    const [start, end] = scheduleTimeWindow();
    const diff = moment(end).diff(moment(start), "seconds");
    expect(diff).toBe(600);
  });
});
