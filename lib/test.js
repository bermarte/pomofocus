'use strict';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import util from 'util';

import core from '@actions/core';

import { describeIt } from './describe-it.js';

const unlinkPromise = util.promisify(fs.unlink);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// re-throw any errors
process.on('uncaughtException', (err) => {
  throw err;
});
process.on('unhandledRejection', (err) => {
  throw err;
});

// const sourceRelativePath = process.argv[2] || '../src';
// const throwErrors = String(process.argv[3]).toLowerCase() === 'ci';
const sourceRelativePath = '../src';
const throwErrors = String(process.argv[2]).toLowerCase() === 'ci';

const SOURCE_DIR = path.normalize(path.join(__dirname, sourceRelativePath));

const testFolder = async (dir) => {
  const paths = fs.readdirSync(dir);

  for (const nextPath of paths) {
    const testPath = path.normalize(path.join(dir, nextPath));

    const isDirectory =
      fs.existsSync(testPath) && fs.statSync(testPath).isDirectory();
    if (isDirectory) {
      await testFolder(testPath);
    }

    const isSpecFile = /.spec.js/.test(testPath);
    if (!isSpecFile) {
      continue;
    }

    let report = '';

    // written to work with describeIt, not a general solution
    const outputIntercept = function () {
      for (const arg of arguments) {
        report += arg;
      }
    };

    const errors = [];
    const status = { fail: false };
    const { describe, it } = describeIt(outputIntercept, errors, status);
    global.describe = describe;
    global.it = it;

    try {
      await import(testPath);
    } catch (err) {
      status.fail = true;
      report = err.toString();
    }

    const compressedReport = report.replace(/\n[ \t]{2,}\n/gim, '\n');

    // log the colored report to the console
    console.log(
      '--- ',
      testPath.replace(path.dirname(__dirname), ''),
      ' ---\n\n',
      compressedReport
    );

    // used for hiding local directory structure from reported callstacks
    const cleanCallstack = (stack) =>
      stack.split(path.dirname(__dirname)).join(' [ ... ] ');

    // format the report for writing to a .report.txt file
    const passPath = testPath.split('.spec.js').join(`.pass.txt`);
    const failPath = testPath.split('.spec.js').join(`.fail.txt`);
    if (fs.existsSync(passPath)) {
      await unlinkPromise(passPath);
    }
    if (fs.existsSync(failPath)) {
      await unlinkPromise(failPath);
    }

    const reportPath = status.fail ? failPath : passPath;

    const destyled = compressedReport.replace(/\[[\d]+m/gm, '');
    const cleanedStacks = cleanCallstack(destyled);
    fs.writeFile(reportPath, cleanedStacks, 'utf-8', (err) =>
      err ? console.error(err) : null
    );

    // if in CI mode, throw a helpful error to fail the integration
    if (throwErrors && errors.length !== 0) {
      core.setFailed('CI check: failed assertions while testing');
    }
  }
};

testFolder(SOURCE_DIR);
