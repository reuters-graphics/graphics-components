import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import timezone from 'dayjs/plugin/timezone.js';
import updateLocale from 'dayjs/plugin/updateLocale.js';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a min',
    mm: '%d min',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  },
});

const getTimeZone = (local) => {
  if (local) {
    return dayjs.tz.guess();
  }

  return 'UTC';
};

const diff = (dateFrom, dateTo, measurement = 'day') => {
  return dayjs(dateFrom).diff(dayjs(dateTo), measurement, true);
};

const olderThanHour = (dateFrom, dateTo, hours = 1) => {
  return diff(dateFrom, dateTo, 'hour') < -hours;
};

const isSameDay = (dateFrom, dateTo) => {
  const first = new Date(dateFrom);
  const second = new Date(dateTo);
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};

export const getTime = (datetime) => {
  const publishTime = dayjs(datetime, { utc: true });
  const showRelativeTime = !olderThanHour(publishTime, Date.now());
  const showTime = isSameDay(publishTime, Date.now());
  const timezone = getTimeZone(false);
  if (showRelativeTime) {
    return dayjs().to(publishTime);
  }
  if (showTime) return dayjs(datetime).tz(timezone).format('h:mm A z');
  return publishTime.format('MMMM D, YYYY');
};
