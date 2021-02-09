'use strict';

import {
    TransColor
} from './Colors.js';
import {
    start
} from '../handlers/startCounterHandler.js';

export class BreakClass {
    constructor(myBreak, color, time) {
        this.myBreak = myBreak;
        this.color = color;
        this.time = time;
    }
    render() {
        
        console.log(`${this.myBreak} HANDLER`);
        const transColor = new TransColor(this.color);
        transColor.render();

        let timeDom = document.querySelector("#hour");
        timeDom.innerHTML = this.time;
        const timeBtn = document.querySelector('#start');

        if (timeBtn.innerHTML == 'STOP') {

            console.log(`${this.myBreak} HANDLER - timeBtn.innerHTML == STOP`);

            window.reset = true;
            window.pause = false;
            timeDom.innerHTML = this.time;
            window.timeDom = timeDom.innerHTML;
            start();

        }
        if (timeBtn.innerHTML == 'START') {

            console.log(`${this.myBreak} HANDLER - timeBtn.innerHTML == START`);
            window.reset = true;
            window.pause = false;
            timeDom.innerHTML = this.time;
            window.timeDom = timeDom.innerHTML;

        }
    }
}