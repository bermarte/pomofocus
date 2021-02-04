'use strict';

//ids of the 3 buttons
let btnArr = [
    '#label-btn-pomodoro',
    '#label-btn-long',
    '#label-btn-short'
];

export function setColor(btn) {
    //check which button is clicked to change the color accordingly
    const normalStateRed = "rgb(223, 100, 95)";//#DF645F
    const activeStateRed = "rgb(190, 85, 81)";//#BE5551

    const property = document.querySelector(btn);
    //while mousedown is true the button is moved 3px down
    property.style.position = "unset";
    //remove the item from the array
    let btnArrNew = btnArr.filter(item => item !== btn);
    if (property.style.backgroundColor === normalStateRed) {
        property.style.fontWeight = 'bold';
        property.style.backgroundColor = activeStateRed;
        //only one element cat a time can have that color (activeStateRed)
        btnArrNew.forEach(element => {
            document.querySelector(element).style.backgroundColor = normalStateRed;
            document.querySelector(element).style.fontWeight = 'normal';
        });
    } 
}