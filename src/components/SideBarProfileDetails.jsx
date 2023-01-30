import {React, useState} from "react";
import { NavLink } from "react-router-dom";
import "../css files/SideNavigationBar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function SideBarProfileDetails(props) {
    return(
        <nav className="open" >
        { 
            props.details.map((information, id) => {
                return(
            <NavLink className = "profileOptions"  to={information.path}  style={({ isActive }) => ({  
                backgroundColor: isActive ? '#9c075b' : 'white',
                color: isActive? "white":"black"
              })}>
                <>
                    <div className = "profileDetails">
                        <div className="sideBarIcon"><FontAwesomeIcon icon={information.icon} className = "icon"style={{color:"black"}} /></div>
                        <div className = "detail">
                            <p className = "title">{information.title}</p>
                            <div className = "count">{information.count} </div>
                        </div>
                    </div>
                </>
            </ NavLink>    
                );
            })
        }
        </nav>
    );
}
export default SideBarProfileDetails;