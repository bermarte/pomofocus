'use strict';

import { TransColor } from '../classes/Colors.js';

export function longBreak(){
    console.log('long break');
    const shortColor = new TransColor('blue');
    shortColor.render();
}