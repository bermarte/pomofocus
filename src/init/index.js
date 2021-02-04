'use strict';

// import all listener files so they can attach to the DOM

// does your project have code that executes when the document or window are ready?
// that code can go here

import '../listeners/shortBreak.js';
import '../listeners/pomodoroBreak.js';
import '../listeners/longBreak.js';


document.querySelector('#label-btn-pomodoro').style.backgroundColor = "#DF645F";
document.querySelector('#label-btn-short').style.backgroundColor = "#DF645F";
document.querySelector('#label-btn-long').style.backgroundColor = "#DF645F";
