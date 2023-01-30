import {React, useState} from "react";
import "../css files/SideNavigationBar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
function Button(props) {
    const [showMenu, setShowMenu] = useState(true)
    function buttonChange() {
        setShowMenu(!showMenu)
        props.toggleSeeMore()
        
    }
    return (
        <div>
            <div className = "seeMoreButton" onClick={buttonChange}>
                <button className = "leftPanelButton">{showMenu ? "See more" : "See less" }<FontAwesomeIcon icon = {showMenu?(faChevronDown):(faChevronUp) }className="upAndDownButton"/></button>               
            </div>
        </div>
    );
}
export default Button;