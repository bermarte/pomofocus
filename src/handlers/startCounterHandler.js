'use strict';

import {
    CountDown
} from '../classes/CountDown.js';

var startSwitch = true;
export function start() {
    startSwitch = !startSwitch;
    const timeBtn = document.querySelector('#start');
    var pausable = sessionStorage.getItem("pausable");

    if (startSwitch) {
        timeBtn.innerHTML = 'START';

        let play = sessionStorage.getItem("play");
        if (play === "true"){
            //it is ok to pause the countdown
            sessionStorage.setItem('pausable', 'true');
        }
    } else {
        //the countdown is playing
        timeBtn.innerHTML = 'STOP';

        if (pausable == 'true'){
            //the counter is paused and now should restart
            var timePaused = document.querySelector('#hour').innerHTML;
  
            var toSec = timePaused.split(':');
            var minToSec = parseInt(toSec[0])*60;
            var sec = parseInt(toSec[1]);
            var secLeft = minToSec+sec;

            //when paused we create a new time value
            localStorage.setItem("time", secLeft);
            sessionStorage.removeItem('pausable');
            
            //read num
            var timer = new CountDown(localStorage.getItem('time'));
            timer.render();
            localStorage.removeItem('time');
            sessionStorage.setItem('play', 'true');

        }

        var timer = new CountDown(localStorage.getItem('time'));
        timer.render();
        sessionStorage.setItem('play', 'true');

    }
}