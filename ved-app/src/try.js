import React from "react";
class Try extends React.Component{
    constructor(props){
        super(props);
        this.state =this.getTable();
        
    }
    componentDidMount(){
        this.setTimer();
    }
    setTimer(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this),1000);
    }
    updateClock(){
        this.setState(this.getTime,this.setTimer);

    }
    getTable(){
        for(var v=1; v<=10; v++){
            var table =v*2;
           
        }
        return {table};

    }
    render(){
       
        const {table} = this.state;
        return(
            <div className="text-success text-center">
               <h1>{table}</h1>
             </div>
        )
    }
}
export default Try;