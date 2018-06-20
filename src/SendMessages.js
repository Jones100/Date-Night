import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./SendMessages.css"; 
import {SwipeItem} from "./SwipeItem.js";
import {withRouter} from 'react-router';
import {getUsername} from "./Users.js";


class SendMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	message: "",
    }
  
	  this.handleSend = this.handleSend.bind(this);
	  this.handleChange = this.handleChange.bind(this);
  };

  handleSend() {
  	console.log(this.state.message);
  	console.log(getUsername());
  	console.log(this.props.match.params['user']);
  }

  handleChange(event) {
  	// let message = this.state.message;
    this.setState({message: event.target.value});
    // console.log(message);
    // localStorage.setItem("textareaMessages", textareaMessage);

    // let textareaMessages = []

    // for(let textareaMessage in textareaMessages) {
  		// textareaMessages.push(textareaMessage);
  		// console.log(textareaMessage);
		// }
	}

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
	          <textarea type="textarea" className="text-area" rows="15" cols="100" value={this.state.message}
	          onChange={this.handleChange}></textarea>
	          <div className="btn-send"><button className="send" onClick={this.handleSend}> Send </button></div>
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










        
  

		 
			  	
   




