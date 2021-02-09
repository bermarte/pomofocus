'use strict';

import { logger } from "../../lib/logger.js";

//ids of the 3 buttons
let btnArr = [
    '#label-btn-pomodoro',
    '#label-btn-long',
    '#label-btn-short'
];

let btnColors = {
    'label-btn-pomodoro': 'rgba(219, 82, 77, 0.0)',
    'label-btn-short': 'rgba(70, 142, 145, 0.0)',
    'label-btn-long': 'rgba(67, 126, 168, 0.0)'
}

/**
 * sets the style for the 3 break-buttons (pomodoro, short and long)
 * 
 * @param  { string} btn - a css selector
 * 
 */
export function setColor(btn) {

    //check which button is clicked to change the color accordingly
    const myBtn = document.querySelector(btn);
    //sort of keyframe 0
    let activeState = btnColors[myBtn.id];
    myBtn.style.animation = `fade-in-${myBtn.id} 0.7s ease-in forwards`;

    //while mousedown is true the button is moved 3px down
    myBtn.style.position = "unset";
    myBtn.style.fontWeight = 'bold';
    myBtn.style.backgroundColor = activeState;

    //filter all the 3 buttons except the one being clicked
    let btnArrNew = btnArr.filter(item => item !== btn);

    btnArrNew.forEach(element => {
        document.querySelector(element).style.animation = null;
        document.querySelector(element).style.backgroundColor = 'transparent';
        document.querySelector(element).style.fontWeight = 'normal';
    })

};

logger.add({
    handler: 'setColor'
})

