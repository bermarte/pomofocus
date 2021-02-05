'use strict';

import { TransColor } from '../classes/Colors.js';

export function longBreak(){
    console.log('long break');
    const shortColor = new TransColor('blue');
    shortColor.render();
    //timer reset
    let time = document.querySelector("#hour");
    time.innerHTML = '15:00';
    localStorage.setItem("time",15);
}