import React from "react"
class text extends React.Component{
    constructor(props){
        super(props);
        this.state =this.getTime();
        
    }
    componentDidMount(){
        this.setTimer();
    }
    setTimer(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.updateClock.bind(this),5000);
    }
    updateClock(){
        this.setState(this.getTime,this.setTimer);

    }
    getTime(){
        
           for(var v=1; v<=10; v++){
              var table =v*2;
              
              return table;
           }
    }
    render(){
        const {table} = this.state;
        return(
            <div>
            <h1 className="text-danger">{table}</h1>

            </div>
    )
    }
}

export default text;