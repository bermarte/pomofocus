'use strict';

import { BreakClass } from '../classes/Break.js';

export function shortBreak(){

    const breakObj = new BreakClass('short break', 'green', '05:00');
    
    breakObj.render();

}