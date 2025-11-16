import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';

// Configure Day.js to use the UTC
// and relative time plugins
dayjs.extend(utc);
dayjs.extend(relativeTime);

export default dayjs;
