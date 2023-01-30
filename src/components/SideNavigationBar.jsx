import {React, useState} from "react";
import UserProfile from "./UserProfile"
import SideBarProfileDetails from "./SideBarProfileDetails";
import Button from "./Button"
import { profileDetails } from "../data file/ProfileDetails";
import { data } from "../data file/RecentlyAddedData";
import "../css files/SideNavigationBar.scss"
import "../css files/Content.scss"

function SideNavigationBar(props) {
    const[isSeeMore, setIsSeeMore]=useState(false)
    const[seeMore, setSeeMore] = useState(false)

    const toggleFunction=()=>{
        return setIsSeeMore(!isSeeMore)
    }
    const seeMoreToggleFunction=()=>{
        return setSeeMore(!seeMore)
    }
    return(
        <div className={`showNavigationBarContainer ${props.isToggle&&'display'}`}>
            <div className="sideNavigationBar">
                <UserProfile />
                <SideBarProfileDetails details = {isSeeMore?profileDetails:profileDetails.slice(0,7)} />
                <Button isSeeMore={isSeeMore}  toggleSeeMore={toggleFunction}/>
                <br />
                <div className = "recentlyAddedContainer">Recently Added:</div>
                <SideBarProfileDetails details = {seeMore?data:data.slice(0,3)} />
                <Button seeMore={seeMore} toggleSeeMore={seeMoreToggleFunction}/>
            </div>
        </div> 
);
}
export default SideNavigationBar;