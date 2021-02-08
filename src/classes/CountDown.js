'use strict';

//sound library
import '../../lib/soundmanager2-jsmin.js';
import { pomBreak } from '../handlers/pomBreakHandler.js';
import { start } from '../handlers/startCounterHandler.js';

export class CountDown {
    constructor(time){
        //if time is not use pomodoro break as default one (25 min)
        if (time === null) time = 25*60;
        this.time = time;
    }

    render(){
        

        let counter = 0;
        let timeSpan = setInterval(count, 1000);

        let timeleft = this.time;
        /*debug timer (set it to tue to run tests)
        if set to true sets the time to 5 seconds
        (so you don't wait to see wat happens)*/
        let debuggTimer = false;
        if (debuggTimer){
            timeleft = 0.1*60;//5 seconds
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
        
        function count() {

            counter++;
            let timeDom = document.querySelector("#hour");
            timeDom.innerText = toMinutes(timeleft - counter);
            //check when is done
            if (counter == timeleft){
                loadMp3();
                clearInterval(timeSpan);
                //send it to pomodoroBreak
                pomBreak();
                //reset the text on the start button
                start();
            }

            if (window.reset){
                console.log('window.reset',window.reset);
                //reset the count down
                clearInterval(timeSpan);
                let timeDom = document.querySelector("#hour");
                timeDom.innerHTML = window.timeDom;
            }

            if (window.pause === true){
                //pause the count down
                clearInterval(timeSpan);
            }
            
        }

    }
}