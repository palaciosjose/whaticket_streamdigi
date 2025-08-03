import moment from "moment";

/**
 * Returns start and end timestamps for schedule verification window.
 * @param marginSeconds number of seconds before and after the current time
 */
export const scheduleTimeWindow = (marginSeconds = 30): [string, string] => {
  const start = moment()
    .subtract(marginSeconds, "seconds")
    .format("YYYY-MM-DD HH:mm:ss");
  const end = moment()
    .add(marginSeconds, "seconds")
    .format("YYYY-MM-DD HH:mm:ss");
  return [start, end];
};

export default scheduleTimeWindow;
