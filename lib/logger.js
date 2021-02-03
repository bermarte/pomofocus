'use strict';

import { deepClone } from './deep-clone.js';

const logs = [];

const logger = {
  get history() {
    return deepClone(logs);
  },
  add: (logEntry) => {
    const entryCopy = deepClone(logEntry);
    logs.push(entryCopy);
  },
};

Object.freeze(logger);

try {
  window.addEventListener('error', (event) => {
    logger.add({
      [event.error.name]: {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      },
    });
  });
} catch (o_0) {}

export { logger };
