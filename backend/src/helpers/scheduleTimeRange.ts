import moment from "moment";

const envMargin = Number(process.env.SCHEDULE_MARGIN_SECONDS);
export const SCHEDULE_MARGIN_SECONDS =
  Number.isNaN(envMargin) || envMargin <= 0 ? 300 : envMargin;

/**
 * Returns start and end timestamps for schedule verification window.
 * @param marginSeconds number of seconds before and after the current time
 */
export const scheduleTimeWindow = (
  marginSeconds: number = SCHEDULE_MARGIN_SECONDS
): [string, string] => {
  const start = moment()
    .subtract(marginSeconds, "seconds")
    .format("YYYY-MM-DD HH:mm:ss");
  const end = moment()
    .add(marginSeconds, "seconds")
    .format("YYYY-MM-DD HH:mm:ss");
  return [start, end];
};

export default scheduleTimeWindow;
