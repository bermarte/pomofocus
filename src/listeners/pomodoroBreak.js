'use strict';

import { setColor } from '../handlers/sendClick.js';
import { pomBreak } from '../handlers/pomBreakHandler.js';

const id = '#label-btn-pomodoro';
let btnPomodoro = document.querySelector(id);

btnPomodoro.addEventListener('click', setColor.bind(this, id), false);
btnPomodoro.addEventListener('click', pomBreak);