'use strict';

import { CountDown } from '../classes/CountDown.js';

let startSwitch = true;
export function start(){
    startSwitch = !startSwitch;
    const timeBtn = document.querySelector('#start');
    
    if (startSwitch){
        timeBtn.innerHTML = 'START';
    }
    else{
        timeBtn.innerHTML = 'STOP';
        //create counter object
        const timer = new CountDown(localStorage.getItem('time'));
        timer.render();
    }
}