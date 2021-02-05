'use strict';

//sound library
import '../../lib/soundmanager2-jsmin.js';
import { pomBreak } from '../handlers/pomBreakHandler.js';

export class CountDown {
    constructor(time){
        //if time is not set pomodoro break is the default one (25 min)
        if (time === null) time = 25;
        this.time = time;
    }

    render(){
        
        let counter = 0;

        //convert minutes to seconds
        let timeleft = this.time*60;
        //debug timer (set it to tue to debug it)
        let debuggTimer = true;
        if (debuggTimer){
            timeleft = 0.1*60;
        }

        //play sound
        function loadMp3(){
            var mySound = soundManager.createSound({
                url: '../../public/Ding-Sound-Effect.mp3'
               });
               mySound.play();
        }

        function toMinutes(s){
            //remove decimal part
            let min = Math.floor(s/60);
            //the rest are seconds
            let sec =  s%60;
            //add a 0 if min or sec is < 10
            min = pad(min);
            sec = pad(sec);
            return min +':'+ sec;
        }

        function pad(d) {
            return (d < 10) ? '0' + d.toString() : d.toString();
        }

        let timeSpan = setInterval(count, 1000);

        function count() {
            counter++;
            let time = document.querySelector("#hour");
            time.innerText = toMinutes(timeleft - counter);
            //check when is done
            if (counter == timeleft){
                loadMp3();
                clearInterval(timeSpan);
                //send to pomodoroBreak
                pomBreak();
            }
        }

    }
}