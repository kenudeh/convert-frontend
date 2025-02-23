 //DesktopNavigation.js
 import NavLinks from "./NavLinks";
 import './NavBar.css';
 import logo from './../../Images/logo.png'
import { Link } from "react-router-dom";

 const DesktopNavigation = () =>{
     return(
        <nav className="DesktopNavigation">
            <Link to='/'><img src={logo} alt='convert brand logo'/></Link>
            <NavLinks isMobile={false} />
        </nav>
        
     )
 }

 export default DesktopNavigation;

