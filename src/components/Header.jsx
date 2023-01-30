import "../css files/Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faGreaterThan, faBars } from '@fortawesome/free-solid-svg-icons'

function Header({handleToggle}) {
    return(
            <header className="headerContainer" >
                <div className= "navBarContainer">
                    <div className="navBarLeftArrowIcon"><FontAwesomeIcon icon={faArrowLeft} className = "arrowLeftIcon" /></div>
                    <p className = "dashBoard" >Dashboard</p>
                    <FontAwesomeIcon icon={faGreaterThan} className = "greaterThanIcon" />
                    <p className = "socialFeed" >Social Feed</p>
                </div>
                <div className="hamburgerIconContainer" >
                    <FontAwesomeIcon icon={faBars} className="hamburgerIcon" onClick={handleToggle}/>
                </div>
            </header>
    );
 }
 export default Header;