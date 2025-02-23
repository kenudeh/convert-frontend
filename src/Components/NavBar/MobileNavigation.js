import NavLinks from "./NavLinks";
import './NavBar.css';
import {MdOutlineMenu} from 'react-icons/md'
import { useState } from "react";
import logo from './../../Images/logo.png'
import {MdClose} from 'react-icons/md';
import { Link } from "react-router-dom";





const MobileNavigation = () =>{

    const [click, setClick] = useState(false);

    /*Hamburger icon */
    const Hamburger = <MdOutlineMenu className="HamburgerMenu" size="30px" color="black" onClick={() => setClick(!click)}/>

    /*Close icon */
    const Close = <MdClose className="HamburgerMenu" size="30px" color="black" onClick={() => setClick(!click)} />
    
     /*Function to close the menu items when an option is selected */
    const closeMenu = () => setClick(false);


     return(
        <nav className="MobileNavigation">
            <Link to='/'><img src={logo} alt='convert brand logo'/></Link>
            {click ? Close : Hamburger}
            {click && <NavLinks isMobile={true} closeMenu={closeMenu}/>}
        </nav>
        
     )
 }

 export default MobileNavigation;

