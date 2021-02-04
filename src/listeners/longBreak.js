'use strict';

import { setColor } from '../handlers/sendClick.js';
import { moveText } from '../handlers/clickDown.js';
import { longBreak } from '../handlers/longBreakHandler.js';

const id = '#label-btn-long';
let btnLong = document.querySelector(id);

btnLong.addEventListener('click', setColor.bind(this, id), false);
btnLong.addEventListener('mousedown', moveText.bind(this, id), false);
btnLong.addEventListener('click', longBreak);