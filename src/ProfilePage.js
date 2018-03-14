import React, { Component } from "react";
import "./ProfilePage.css"; 
import FontAwesome from "react-fontawesome"
import faStyles from "font-awesome/css/font-awesome.css";
import {getUserImage, getUsername} from "./Users.js";


class ProfilePage extends Component {
  constructor(props) {
    super(props);
      this.state = {
        profilePic: "assets/img/brady.jpg",
        // `${getUserImage(this.state.username)}`
      };
  }



//   var test = React.createClass({
//   componentDidUpdate: function(prevProp, prevState){
//     this.refs.test.innerHTML = "Hello";
//   },
//   render: function(){
//     return (
//       <div contentEditable='true' ref='test'></div>
//     );
//   }
// });

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
            <div id="hiMessage"> Hi </div>  
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
