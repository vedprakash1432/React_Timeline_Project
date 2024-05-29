import React from "react";
class clock2 extends React.Component{
    
    constructor(props){
        super(props);
     this.state =this.getTime();
    }
    componentDidCount(){
        this.setTimer();
    }
    setTimer(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this),1000);
    }
    updateClock(){
        this.setState(this.getTime, this.setTimer);
    }
    getTime(){
        const currentTime = new Date();
        return{
            hours:currentTime.getHours(),
            minutes:currentTime.getMinutes(),
            seconds:currentTime.getSeconds(),
            ampm: currentTime.getHours() >=12 ? 'AM':'PM'
        }
    }
    render(){
        const {hours,minutes,seconds,ampm} =this.state;
        return(
             <div className="clock">
                 {
                 hours == 0? 12: (hours>12)? (hours-12) : `0${hours}`
                 }:{
                     minutes >9? minutes : `0${minutes}`
                 }:{
                     seconds >9? seconds: `0${seconds}`
                 } {ampm}
             </div>
        )
    }
}