'use strict';

import { CountDown } from '../classes/CountDown.js';
import '../../lib/soundmanager2-jsmin.js';

var startSwitch = true;

export function start() {

    console.log('start counter HANDLER - START function');
    startSwitch = !startSwitch;
    const timeBtn = document.querySelector('#start');
    var timeDom = document.querySelector('#hour').innerHTML;
    window.restart = false;
    window.pause = false;

    if (startSwitch) {
        timeBtn.innerHTML = 'START';
        console.log("start counter HANDLER - STOPPED");

        if (window.playing){
            console.log('start counter HANDLER - GOT PLAYING');
            window.pause = true;
            window.restart = true;
        }
        loadMp3();   
        
    } else {
        timeBtn.innerHTML = 'STOP';
        console.log("start counter HANDLER - STARTED");
        window.reset = false;

        var timer;
    
        var toSec = timeDom.split(':');
        var minToSec = parseInt(toSec[0])*60;
        var sec = parseInt(toSec[1]);
        var secLeft = minToSec+sec;

        timer = new CountDown(secLeft);
        timer.render();
        window.playing = true;
        loadMp3(); 

    }
}

//play sound
function loadMp3(){
    var mySound = soundManager.createSound({
        url: 'https://github.com/bermarte/pomofocus/blob/main/public/button-press.mp3'
       });
       mySound.play();
}