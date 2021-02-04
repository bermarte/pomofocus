'use strict';

import { setColor } from '../handlers/sendClick.js';
import { shortBreak } from '../handlers/shortBreakHandler.js';

const id = '#label-btn-short';
let btnShort = document.querySelector(id);

btnShort.addEventListener('click', setColor.bind(this, id), false);
btnShort.addEventListener('click', shortBreak);