'use strict';

import { BreakClass } from '../classes/Break.js';
import { Ico } from '../classes/Ico.js';
import { logger } from "../../lib/logger.js";

/**
 * handles a pomodoro break (5 minutes)
 */
export function shortBreak(){

    const breakObj = new BreakClass('short break', 'green', '05:00');
    breakObj.render();

    const ico = 'https://ghcdn.rawgit.org/bermarte/pomofocus/main/public/imgs/short_favicon-16x16.png';
    const setIco = new Ico(ico);
    setIco.render();
    document.title = `05:00 - Time to work!`;

}

logger.add({
    handler: 'shortBreak'
});