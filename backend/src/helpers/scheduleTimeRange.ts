import moment from "moment";

/**
 * Returns start and end timestamps for schedule verification window.
 * @param marginSeconds number of seconds before and after the current time
 */
export const scheduleTimeWindow = (
  marginSeconds?: number
): [string, string] => {
  const margin =
    marginSeconds ??
    parseInt(process.env.SCHEDULE_MARGIN_SECONDS || "300", 10);

  const start = moment()
    .subtract(margin, "seconds")
    .format("YYYY-MM-DD HH:mm:ss");
  const end = moment()
    .add(margin, "seconds")
    .format("YYYY-MM-DD HH:mm:ss");
  return [start, end];
};

export default scheduleTimeWindow;
