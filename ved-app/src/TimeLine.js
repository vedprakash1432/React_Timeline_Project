import React from "react";
import ActiviItem from "./ActivityItem";
import Moment from "./data.js"
class TimeLine extends React.Component {
  activities = [];

  constructor(props) {
    super(props);
    this.state = { activities: [] }
  }
  componentDidMount() {
    this.setState({ activities: Moment.data });
    console.log(this.state.activities)
  }
  render() {
    const activities = this.state.activities;
    return (
      <div className="container">
        <div className="content">
          <div className="line"></div>
          {activities.map((activity) => (
            <ActiviItem activity={activity} />
          ))}
        </div>
      </div>
    )
  }
}
export default TimeLine;
