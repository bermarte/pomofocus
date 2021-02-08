'use strict';

import { BreakClass } from '../classes/Break.js';

export function shortBreak(){

    //const breakObj = new BreakClass('short break', 'green', '05:00');
    const breakObj = new BreakClass('short break', 'green', '00:05');
    breakObj.render();

}