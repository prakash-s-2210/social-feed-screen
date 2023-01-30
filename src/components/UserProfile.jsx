import React from "react";
import "../css files/SideNavigationBar.scss"
import profileImage from "../images/profileImage.jpg"
function UserProfile() {
    return(
        <div className = "personalInformation">
            <img src= {profileImage} alt="profileImage.jpg" className = "profileImage" />
            <p className = "profileContent">Prakash</p>
        </div>
    );
}
export default UserProfile;