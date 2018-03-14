import React, { Component } from "react";
import "./ProfilePage.css"; 
import FontAwesome from "react-fontawesome"
import faStyles from "font-awesome/css/font-awesome.css";
import {getUserImage, getUsername} from "./Users.js";


class ProfilePage extends Component {
  constructor(props) {
    super(props);
    let username = getUsername();
    this.state = {
      username: username,
      profilePic: `assets/img/${getUserImage(username)}`
    };
  }

  
  render() {
    return (
      <div className="profile-main-con">
        <div className="profile-header">
          
          <div className="profile-icon"> 
            <FontAwesome name="cog" size="4x" /> 
            <div > Settings </div>
          </div>

          <div className="profile-icon">  
            <FontAwesome name="user" size="4x" /> 
          </div>

          <div className="profile-icon">                       
            <FontAwesome name="pencil" size="4x" /> 
            <div> Edit Profile </div>
          </div>

        </div>

        <div className="profile-body">

          <div className="img-mes">
            <div id="hiMessage"> Hi {this.state.username}</div>
            <div className="profile-pic-container">
              <img src={this.state.profilePic} className="profile-pic" id="display-pic" alt="" />
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <input type="submit" value="Get Swiping" className="get-swiping-btn" />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
