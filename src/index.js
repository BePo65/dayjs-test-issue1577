import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import { formatNow } from '@bepo65/dayjs-demo-submodule';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

// update locale
dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few modified seconds',
    m: '1 minute',
    mm: '%d modified minutes',
    h: '1 hour',
    hh: '%d modified hours',
    d: '1 day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  }
});

// eslint-disable-next-line security-node/detect-crlf
console.log(`dayjs in this program gets '${dayjs(new Date()).fromNow()}' from dayjs.fromNow()`);

// eslint-disable-next-line security-node/detect-crlf
console.log(`dayjs in the imported package gets '${formatNow()}' from the formatNow`);
