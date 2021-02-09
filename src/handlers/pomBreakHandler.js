'use strict';

import { BreakClass } from '../classes/Break.js';
import { Ico } from '../classes/Ico.js';
import { logger } from "../../lib/logger.js";

/**
 * handles a pomodoro break (25 minutes)
 */
export function pomBreak(){

    const breakObj = new BreakClass('pomo break', 'red', '25:00');
    breakObj.render();

    const setIco = new Ico(ico);
    setIco.render();
    document.title = `25:00 - Time to work!`;
    
}

logger.add({
    handler: 'pomBreak'
});const ico = 'https://ghcdn.rawgit.org/bermarte/pomofocus/main/public/imgs/pomo_favicon-16x16.png';