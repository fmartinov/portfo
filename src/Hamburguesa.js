import React, {useState} from "react"
import {withToggler} from "./js/withToggler"

function Hamburguesa(props) {
    const [nombreClaseItem, setNombreClaseItem] = useState("nav-toggle")
    
    console.log("props.on[" + props.on + "]")
    return (
        <div>
            <button 
                onClick={props.toggle} 
                className={props.on ? "nav-open" : "nav-toggle"} 
                aria-label="toggle navigation"                
                >
                <span className="hamburger"></span>
                {console.log("nombreClaseBoton: [" + (props.on ? "nav-open" : "nav-toggle") + "]" )}
            </button>
            <nav className={props.on ? "nav-ope" : "nav"}>
                {console.log("nombreClaseNav: [" + (props.on ? "nav-ope" : "nav") + "]" )}
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home0" onClick={props.toggle} className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#services" onClick={props.toggle} className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="#about" onClick={props.toggle} className="nav__link">About me</a></li>
                    <li className="nav__item"><a href="#work" onClick={props.toggle} className="nav__link">My Work</a></li>
                </ul>
            </nav>   
        </div>   
    ) 
}

const SuperchargedFavoriteComponent = withToggler(Hamburguesa, {defaultOnValue: false})
export default SuperchargedFavoriteComponent
