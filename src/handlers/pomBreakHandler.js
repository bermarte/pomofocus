'use strict';

import { BreakClass } from '../classes/Break.js';
import { Ico } from '../classes/Ico.js';


export function pomBreak(){

    const breakObj = new BreakClass('pomo break', 'red', '25:00');
    breakObj.render();

    const ico = '../../public/imgs/pomo_favicon-16x16.png';
    const setIco = new Ico(ico);
    setIco.render();
    document.title = `25:00 - Time to work!`;
    
}