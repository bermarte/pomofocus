'use strict';

import { BreakClass } from '../classes/Break.js';
import { Ico } from '../classes/Ico.js';

export function longBreak(){
    
    const breakObj = new BreakClass('long break', 'blue', '15:00');
    breakObj.render();
    
    const ico = 'https://ghcdn.rawgit.org/bermarte/pomofocus/blob/main/public/imgs/long_favicon-16x16.png';
    const setIco = new Ico(ico);
    setIco.render();
    document.title = `15:00 - Time to work!`;

}