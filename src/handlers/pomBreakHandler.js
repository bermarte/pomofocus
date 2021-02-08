'use strict';

import { BreakClass } from '../classes/Break.js';

export function pomBreak(){

    const breakObj = new BreakClass('pomo break', 'red', '25:00');
    breakObj.render();

}