'use strict';

/**
 * returns conventional describe and it functions for simple unit tests in node
 * @param {Function} reporter - a callback used to do something with test results
 */
export const describeIt = (reporter, errors = [], status = {}) => {
  let depth = 0;
  let indent = '  ';

  const testConsole = {
    log: function () {
      const localIndent = Array(depth).fill(indent).join('');
      reporter(localIndent, ...Array.from(arguments), '\n');
    },
    group: function () {
      const localIndent = Array(depth).fill(indent).join('');
      reporter(localIndent, ...Array.from(arguments), '\n');
      depth++;
    },
    groupEnd: function () {
      depth && depth--;
      const localIndent = Array(depth).fill(indent).join('');
      reporter(localIndent, ...Array.from(arguments), '\n');
    },
    error: function () {
      status.fail = true;
      const localIndent = Array(depth).fill(indent).join('');
      reporter(
        localIndent,
        ...Array.from(arguments).map((entry) => {
          if (!entry) {
            return entry;
          }
          if (entry instanceof Error) {
            errors.push(entry);
            return entry.stack
              .toString()
              .split('\n')
              .join('\n' + localIndent);
          }
          return entry
            .toString()
            .split('\n')
            .join(localIndent + '\n');
        }),
        '\n'
      );
    },
  };

  return {
    describe: (description, testFunction) => {
      if (typeof description !== 'string') {
        throw new TypeError('first argument must be a string');
      }
      if (typeof testFunction !== 'function') {
        throw new TypeError('second argument must be a function');
      }

      testConsole.group(`\x1b[1m${description}\x1b[22m`);
      try {
        testFunction();
      } catch (err) {
        testConsole.error('\x1b[31mSUITE ERROR\x1b[39m ', err);
      }
      testConsole.groupEnd();
    },

    it: (() => {
      let itIsCalled = false;
      return (description, testFunction) => {
        if (itIsCalled) {
          throw new Error('can not call it from inside of it');
        }
        if (typeof description !== 'string') {
          throw new TypeError('first argument must be a string');
        }
        if (typeof testFunction !== 'function') {
          throw new TypeError('second argument must be a function');
        }

        itIsCalled = true;

        // prevent user-defined console output for simpler and cleaner reports
        //  they can always debug single files
        const consoleBackup = Object.assign({}, console);
        const consoleCalls = [];
        for (let key in console) {
          if (typeof console[key] === 'function') {
            console[key] = function () {
              consoleCalls.push({ method: key, args: Array.from(arguments) });
            };
          }
        }

        let thrown = null;
        try {
          testFunction();
        } catch (exception) {
          thrown = exception;
        }

        // re-enable console output
        Object.assign(console, consoleBackup);

        if (thrown) {
          testConsole.group(`\x1b[31m✖ FAIL:\x1b[39m ${description}`);
          testConsole.error(thrown);
          testConsole.groupEnd();
        } else {
          testConsole.log(`\x1b[32m√ PASS:\x1b[39m ${description}`);
        }

        itIsCalled = false;
      };
    })(),
  };
};
