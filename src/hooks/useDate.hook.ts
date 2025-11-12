import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';

/**
 * The `useDate` hook response
 */
interface UseDateResponse {
  /**
   * Creates a new `dayjs` UTC date set
   * to the current date and time
   */
  readonly utc: typeof dayjs.utc;

  /**
   * Creates a new `dayjs` UTC date
   * from a specified date `value`
   */
  readonly from: (value: Date | string) => Dayjs;
}

/**
 * Used to provide functions to work with dates
 * using the `dayjs` package under the hood.
 *
 * Extends `dayjs` and applies the `utc`
 * and `relativeTime` plugins
 *
 * @returns The `useDate` hook response
 * @example
 *
 * const { utc, from } = useDate();
 *
 * const utcDate = utc();
 * const fromDate = from('1970-01-01T00:00:00.000Z');
 */
const useDate = (): UseDateResponse => {

  // Apply the Day.js UTC and
  // relative time plugins
  dayjs.extend(utc);
  dayjs.extend(relativeTime);

  return {
    utc: dayjs.utc,
    from: (value: Date | string) => dayjs.utc(value),
  };
};

export default useDate;
