import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./SendMessages.css"; 
import {SwipeItem} from "./SwipeItem.js";
import {withRouter} from 'react-router';


class SendMessages extends Component {
  constructor(props) {
    super(props);
  
  };

  render() {
    const {user} = this.props.match.params
    let userProfile = `/view-user-profile/${user}`

    return (
	  <div className="sm-con">
			
			<div className="sm-main-body">
        <div className="s-msg-con">
          <Link to="/messages" className="messages"> Messages </Link>
        </div>
        <div className="ta-btn">
          <textarea className="text-area" rows="15" cols="100"></textarea>
          <div className="btn-send"><button className="send"> Send </button></div>
        </div>
      </div>

      <div className="sm-main-footer">
        <div className="footer-btns">
          <Link to="/swipe" className="keep-swiping"> Keep Swiping </Link>
          <Link to={userProfile} className="view-profile"> View Profile </Link>
        </div>
      </div>

	  </div>
	);
  }
}

export default withRouter(SendMessages);










        
  

		 
			  	
   




