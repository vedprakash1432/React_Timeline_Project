import React from "react";
import Clock from "./clock";
import DidHook from "./DidHook";
// import Moment from "./data.js";
class ActiviItem extends React.Component{
    render(){
        const {activity} =this.props;//es6 destructuring
        return (
            
            <div className="item">                          
                <div className="avatar">
                 <img alt={activity.text}
                  src={activity.user.avatar} />                 
                </div>
                 < DidHook/>
                <b>{activity.user.name} </b>
                <p>{activity.text}</p>
                <div className="timeClock"><small>{<Clock/>}</small></div>
                 {/* <span className={'time'}>{moment(activity.time).fromNow()}</span> */}
                <ul className="commentsReply">
                  <li><span><i className=" fa fa-comments"></i> {activity.comments.length} </span></li>
                  <li><i className="fa fa-heart"></i></li>
                  <li><i className="fa fa-reply"></i></li>
               </ul>      
            </div>
            
        )
    }
}
export default ActiviItem;