'use strict';

import { TransColor } from '../classes/Colors.js';

export function pomBreak(){
    console.log('pomodoro break');
    const shortColor = new TransColor('red');
    shortColor.render();
    //timer reset
    let time = document.querySelector("#hour");
    time.innerHTML = '25:00';
}