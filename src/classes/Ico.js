'use strict';

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