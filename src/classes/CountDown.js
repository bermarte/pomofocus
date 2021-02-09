'use strict';

//sound library
import '../../lib/soundmanager2-jsmin.js';
import {
    pomBreak
} from '../handlers/pomBreakHandler.js';
import {
    Ico
} from './Ico.js';
import { logger } from "../../lib/logger.js";


/**
 * creates a countdown
 * 
 * @param  { number } time - the amount of seconds of a time interval
 */
export class CountDown {
    constructor(time) {
        //if time is not use pomodoro break as default one (25 min)
        if (time === null) time = 25 * 60;
        this.time = time;
    }

    render() {

        let counter = 0;
        let timeSpan = setInterval(count, 1000);

        let timeleft = this.time;

        //play sound
        function loadMp3() {
            var mySound = soundManager.createSound({
                url: 'https://ghcdn.rawgit.org/bermarte/pomofocus/main/public/Ding-Sound-Effect.mp3'
            });
            mySound.play();
        }

        function toMinutes(s) {
            //remove decimal part
            let min = Math.floor(s / 60);
            //the rest are seconds
            let sec = s % 60;
            //add a 0 if min or sec is < 10
            min = pad(min);
            sec = pad(sec);
            return min + ':' + sec;
        }

        function pad(d) {
            return (d < 10) ? '0' + d.toString() : d.toString();
        }

        function count() {

            counter++;

            let timeDom = document.querySelector("#hour");
            timeDom.innerText = toMinutes(timeleft - counter);
            //update document title
            document.title = `${timeDom.innerText} - Time for a break!`;

            //update ruler bar
            const percent = (counter / timeleft) * 100;
            const pos = document.querySelector("#pos");
            pos.setAttribute("style", `width:${percent}%`);

            //check when is done
            if (counter == timeleft) {
                loadMp3();
                clearInterval(timeSpan);
                //send it to pomodoroBreak
                pomBreak();
                window.reset = true;
                //pomodoro button selected
                document.querySelector('#label-btn-pomodoro').click();
                //fadeout the ruler
                document.querySelector("#pos").style.animation = 'ruler-out 0.7s ease-in forwards';
            }

            if (window.reset) {
                console.log('window.reset', window.reset);
                //reset the count down
                clearInterval(timeSpan);
                let timeDom = document.querySelector("#hour");
                timeDom.innerHTML = window.timeDom;
                //update document title and ico
                const ico = 'https://ghcdn.rawgit.org/bermarte/pomofocus/main/public/imgs/pomo_favicon-16x16.png';
                const setIco = new Ico(ico);
                setIco.render();
                document.title = `${timeDom.innerText} - Time to work!`;
            }

            if (window.pause === true) {
                //pause the count down
                clearInterval(timeSpan);
            }

        }

    }
}

logger.add({
    class: 'CountDown'
});