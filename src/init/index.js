'use strict';

// import all listener files so they can attach to the DOM

// does your project have code that executes when the document or window are ready?
// that code can go here

import '../listeners/shortBreak.js';
import '../listeners/pomodoroBreak.js';
import '../listeners/longBreak.js';
import '../listeners/startCounter.js';
import { Ico } from '../classes/Ico.js';

//pomodoro is predefined
document.querySelector('#label-btn-pomodoro').click();