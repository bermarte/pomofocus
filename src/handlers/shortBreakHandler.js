'use strict';

import { TransColor } from '../classes/Colors.js';

export function shortBreak(){
    console.log('short break');
    const shortColor = new TransColor('green');
    shortColor.render();
}