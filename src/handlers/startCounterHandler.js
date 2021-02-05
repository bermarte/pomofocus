'use strict;'

let startSwitch = true;
export function start(){
    startSwitch = !startSwitch;
    const timeBtn = document.querySelector('#start');
    
    if (startSwitch){
        timeBtn.innerHTML = 'START';
    }
    else{
        timeBtn.innerHTML = 'STOP';
    }
}