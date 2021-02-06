'use strict';


import { start } from '../handlers/startCounterHandler.js';

const timeBtn = document.querySelector('#start');

timeBtn.addEventListener('click', start);