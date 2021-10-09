# dayjs issue #1577 demo

![Build Status](https://github.com/briangershon/nodejs-minimal/workflows/Continuous%20Integration/badge.svg)

Minimal package to show what happens, when package using dayjs uses different plugin configuration than program that uses this package (See [dayjs issue #1577](https://github.com/iamkun/dayjs/issues/1577#issuecomment-926149823) for thecorresponding question).



## use this package in a program

> npm install @bepo65/dayjs-demo-submodule

and then in the test program

```
import dayjs from 'dayjs'
import updateLocale from "dayjs/plugin/updateLocale";
import relativeTime from "dayjs/plugin/relativeTime";
import { formatNow } from '@bepo65/dayjs-demo-submodule'

// update locale
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few modified seconds",
    m: "1 minute",
    mm: "%d modified minutes",
    h: "1 hour",
    hh: "%d modified hours",
    d: "1 day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

console.log(`dayjs in this program gets '${dayjs(new Date()).fromNow()}' from dayjs.fromNow()`);

console.log(`dayjs in the imported package gets '${formatNow()}' from the formatNow`);
```
