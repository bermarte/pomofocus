'use strict';

import { BreakClass } from '../classes/Break.js';

export function longBreak(){
    
    const breakObj = new BreakClass('long break', 'blue', '15:00');
    breakObj.render();

}