import React from "react";
class DidHook extends React.Component{
    constructor(props){
        super(props);
    }
    str="";
    componentDidMount(){
        this.str ="ved->";
        console.log(this.str);
    }
    componentDidUpdate(){
         this.str ="prakash->";
        //  console.log(this.str);
   }
    componentWillUnmount(){
          this.str = "ved-prakash-sharma";
       console.log(this.str);
   }
    render(){
        let str ="";
        return(
            <div>{str}</div>
        )
    }
}
export default DidHook;