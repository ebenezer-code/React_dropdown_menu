import React,{useState} from "react"
import {Link} from "react-router-dom"
import "./NavBar.css"
import Menu from "./Menu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button"

const NavBar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const dropDownMenuMouseIn = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        }else {
            setDropdown(true)
        }
    }
    const dropDownMenuMouseOut = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        }else {
            setDropdown(false)
        }
    }


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return(
        <>
            <nav className = "navbar">
                 <Link to= "/home" className = "navbar-logo">
                    EbenCODE
                </Link>
                <div className = "menu-icon" onClick = {handleClick}> 
                  <FontAwesomeIcon icon = {click ? faTimes: faBars}/>
                </div> 
                <ul className = {click ? 'nav-menu active': 'nav-menu'}>
                    <li className = "nav-item">
                          <Link to= "/home" className = "nav-links" onClick = {closeMobileMenu}>
                                Home
                           </Link> 
                    </li>
                    <li className = "nav-item"onMouseEnter = {dropDownMenuMouseIn}  onMouseLeave = {dropDownMenuMouseOut}>
                          <Link to= "/services" className = "nav-links" onClick = {closeMobileMenu}>
                                Services <FontAwesomeIcon icon = {faCaretDown}/>
                           </Link>
                           {dropdown && <Menu />}
                    </li>
                    <li className = "nav-item">
                          <Link to= "/products" className = "nav-links" onClick = {closeMobileMenu}>
                             Products
                           </Link>
                    </li>
                    <li className = "nav-item">
                         <Link to= "/contact-us" className = "nav-links" onClick = {closeMobileMenu}>
                             Contact Us
                           </Link> 
                    </li>
                    <li className = "nav-item">
                         <Link to= "/sign-up" className = "nav-links-mobile" onClick = {closeMobileMenu}>
                             SIGNUP
                           </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    )
}

export default NavBar