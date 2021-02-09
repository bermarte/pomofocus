'use strict';

import { logger } from "../../lib/logger.js";


//UI elements
/**
 * change colors to the UI, adds animations/transition to the UI when changing color
 * 
 * @param  { string } color - a css value for a color
 */
export class TransColor {
    constructor(color) {
        this.color = color;
    }

    //change color to the UI
    render() {

        //set animation at keyframe 0
        const par = '0.7s ease-in forwards';
        document.body.style.animation = `trans-to-${this.color}-back ${par}`;
        //buttons: report, settings and login
        const btn = document.querySelectorAll('.btn');
        btn.forEach(element => element.style.animation = `trans-to-${this.color}-light-short-back ${par}`);
        //big square in the middle
        const label = document.querySelector('#label');
        label.style.animation = `trans-to-${this.color}-light-short-back ${par}`;
        //start button
        const start = document.querySelector('#start');
        start.style.animation = `trans-to-${this.color}-short-color-back ${par}`;
        //little button on the right
        const btnTask = document.querySelector('#btn-task');
        btnTask.style.animation = `trans-to-${this.color}-light-short-back ${par}`;
        //add task button
        const addTask = document.querySelector('#add-task');
        addTask.style.animation = `trans-to-${this.color}-dark-short ${par}`;
        //ruler background color
        const ruler = document.querySelector('#ruler');
        ruler.style.animation = `trans-to-${this.color}-dark-short ${par}`;

        this.assignColor(this.color);
    }

    //assign color for transitions (~KEYFRAME 0)
    assignColor(col) {

        let back, light, dark;
        if (col === 'green') {
            back = '--color-background-short';
            light = '--color-light-short';
            dark = '--color-dark-short';
            console.log('back green');
        }
        if (col === 'red') {
            back = '--color-background-pom';
            light = '--color-light-pom';
            dark = '--color-dark-pom';
            console.log('back red');
        }
        if (col === 'blue') {
            back = '--color-background-long';
            light = '--color-light-long';
            dark = '--color-dark-long';
            console.log('back blue');
        }

        const backColor = getComputedStyle(document.documentElement)
            .getPropertyValue(back);

        const lightColor = getComputedStyle(document.documentElement)
            .getPropertyValue(light);

        const darkColor = getComputedStyle(document.documentElement)
            .getPropertyValue(dark);

        //setting colors (needed when starting CSS animations ~KEYFRAME 0)
        function setBackGround() {
            document.body.style.backgroundColor = backColor;
            this.label.style.backgroundColor = lightColor;
            document.querySelectorAll('.btn').forEach(element => element.style.backgroundColor = lightColor);
            document.querySelector('#btn-task').style.backgroundColor = lightColor;
            document.querySelector('#add-task').style.backgroundColor = darkColor;
            //set also the color for the start/stop button
            document.querySelector('#start').style.color = lightColor;
            //ruler's color
            document.querySelector('#ruler').style.backgroundColor = darkColor;
        }

        setTimeout(setBackGround, 1000);
    }
}

logger.add({
    class: 'TransColor'
});