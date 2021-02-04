'use strict';

//move the button while mousedown is true
export function moveText(btn){
    const property = document.querySelector(btn);
    //move the item 4px down
    property.style.position = "relative";
    property.style.top = "4px";
}
