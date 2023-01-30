import {React} from "react";
import "../css files/SideNavigationBar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
function Button(props) {
    function buttonChange() {
        props.toggleSeeMore()
        props.toggleSeeMoreFunction()
    }
    return (
        <div>
            <div className = "seeMoreButton" onClick={buttonChange}>
                <button className = "primaryButton">{props.isSeeMore ? "See less" : "See more" }<FontAwesomeIcon icon = {props.isSeeMore?(faChevronUp):(faChevronDown) }className= "seeMoreButton"/></button>               
            </div>
        </div>
    );
}
export default SeeMoreButton;