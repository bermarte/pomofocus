'use strict';

import { BreakClass } from '../classes/Break.js';
import { Ico } from '../classes/Ico.js';

export function shortBreak(){

    const breakObj = new BreakClass('short break', 'green', '05:00');
    breakObj.render();

    const ico = 'https://github.com/bermarte/pomofocus/blob/main/public/imgs/short_favicon-16x16.png';
    const setIco = new Ico(ico);
    setIco.render();
    document.title = `05:00 - Time to work!`;

}