'use strict';

import { setColor } from '../handlers/sendClick.js';
import { longBreak } from '../handlers/longBreakHandler.js';

const id = '#label-btn-long';
let btnLong = document.querySelector(id);

btnLong.addEventListener('click', setColor.bind(this, id), false);
btnLong.addEventListener('click', longBreak);

/*
const id = '#label-btn-pomodoro';
let btnPomodoro = document.querySelector(id);

btnPomodoro.addEventListener('click', setColor.bind(this, id), false);
btnPomodoro.addEventListener('click', pomBreak);
*/