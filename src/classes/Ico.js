'use strict';

import { logger } from "../../lib/logger.js";

/**
 * creates a new icon
 * 
 * @param  { text } ico - a URL (an image)
 */
export class Ico {
    constructor(ico){
        this.ico = ico
    }

   render(){
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = this.ico;
   }
}

logger.add({
    class: 'Ico'
});