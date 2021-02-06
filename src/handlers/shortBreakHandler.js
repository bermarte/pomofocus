'use strict';

import { TransColor } from '../classes/Colors.js';

export function shortBreak(){
    console.log('short break');
    const shortColor = new TransColor('green');
    shortColor.render();
    //timer reset
    let time = document.querySelector("#hour");
    time.innerHTML = '05:00';
    localStorage.setItem("time",5*60);
}