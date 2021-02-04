'use strict';

let btnArr = [
    '#label-btn-pomodoro',
    '#label-btn-long',
    '#label-btn-short'
];
export function setColor(btn) {
    const property = document.querySelector(btn);
    //remove the item from the array
    let btnArrNew = btnArr.filter(item => item !== btn);
    if (property.style.backgroundColor === "rgb(223, 100, 95)") {
        property.style.backgroundColor = "rgb(190, 85, 81)";
        //only one element cat a time can have that color (rgb(223, 100, 95))
        btnArrNew.forEach(element => {
            document.querySelector(element).style.backgroundColor = "rgb(223, 100, 95)";
        });
    } else {
        property.style.backgroundColor = "rgb(223, 100, 95)";
    }
}