'use strict';

export class CountDown {
    constructor(time){
        //if time is not set pomodoro break is the default one (25 min)
        if (time === null) time = 25;
        this.time = time;
    }

    render(){
        
        let counter = 0;
        //convert minutes to seconds
        //let timeleft = this.time*60;
        v

        function toMinutes(s){
            //remove decimal part
            let min = Math.floor(s/60);
            //the rest are seconds
            let sec =  s%60;
            //add a 0 if min or sec is < 10
            min = pad(min);
            sec = pad(sec);
            return min +':'+ sec;
        }

        function pad(d) {
            return (d < 10) ? '0' + d.toString() : d.toString();
        }

        function count() {
            counter++;
            let time = document.querySelector("#hour");
            time.innerText = toMinutes(timeleft - counter);
        }

        setInterval(count, 1000);

    }
}