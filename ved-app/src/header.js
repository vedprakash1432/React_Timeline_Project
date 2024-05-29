import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="menuIcon">
          <div className="dashTop"></div>
          <div className="dashBottom"></div>
          <div className="circle"></div>
        </div>
        <span className="title"> {this.props.title} </span>
        <div className="searchIcon">
          <i className="fa fa-search"></i><input type="text" className="searchInput" placeholder="Search ..." />
        </div>

      </div>
    );
  }
}


export default Header