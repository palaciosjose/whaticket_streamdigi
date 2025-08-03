import moment from "moment";

export const MIN_SCHEDULE_MARGIN_SECONDS = 120;
export const MAX_SCHEDULE_MARGIN_SECONDS = 300;

const envMargin = Number(process.env.SCHEDULE_MARGIN_SECONDS);
const parsedEnvMargin = Number.isFinite(envMargin)
  ? envMargin
  : MAX_SCHEDULE_MARGIN_SECONDS;
export const SCHEDULE_MARGIN_SECONDS = Math.min(
  Math.max(parsedEnvMargin, MIN_SCHEDULE_MARGIN_SECONDS),
  MAX_SCHEDULE_MARGIN_SECONDS
);

/**
 * Returns start and end timestamps for schedule verification window.
 * @param marginSeconds number of seconds before and after the current time
 */
export const scheduleTimeWindow = (
  marginSeconds: number = SCHEDULE_MARGIN_SECONDS
): [string, string] => {
  const margin = Math.min(
    Math.max(marginSeconds, MIN_SCHEDULE_MARGIN_SECONDS),
    MAX_SCHEDULE_MARGIN_SECONDS
  );
  const start = moment()
    .subtract(margin, "seconds")
    .format("YYYY-MM-DD HH:mm:ss");
  const end = moment()
    .add(margin, "seconds")
    .format("YYYY-MM-DD HH:mm:ss");
  return [start, end];
};

export default scheduleTimeWindow;
